import { useState } from 'react';
import { contact } from '../data/portfolioData';
import { Icon } from '../components/icons';

const initialState = { name: '', email: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (contact.formEndpoint) {
      setStatus('sending');
      try {
        const res = await fetch(contact.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        });
        if (!res.ok) throw new Error('Request failed');
        setStatus('sent');
        setForm(initialState);
      } catch {
        setStatus('error');
      }
      return;
    }

    // No backend configured: fall back to opening the visitor's email client
    // with the message pre-filled, so the form works with zero infrastructure.
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || 'a visitor'}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    setStatus('sent');
  };

  return (
    <section id="contact" className="section-pad border-t border-line">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Get in touch
          </h2>
          <p className="mt-4 max-w-prose text-base leading-relaxed text-ink-soft">
            Reach out directly, or send a message using the form.
          </p>

          <dl className="mt-8 space-y-4">
            <div className="flex items-center gap-3">
              <Icon name="Mail" className="h-4 w-4 text-pulse" />
              <dt className="sr-only">Email</dt>
              <dd>
                <a href={`mailto:${contact.email}`} className="text-sm text-ink-soft hover:text-ink">
                  {contact.email}
                </a>
              </dd>
            </div>
            <div className="flex items-center gap-3">
              <Icon name="Linkedin" className="h-4 w-4 text-pulse" />
              <dt className="sr-only">LinkedIn</dt>
              <dd>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ink-soft hover:text-ink"
                >
                  LinkedIn
                </a>
              </dd>
            </div>
            <div className="flex items-center gap-3">
              <Icon name="Github" className="h-4 w-4 text-pulse" />
              <dt className="sr-only">GitHub</dt>
              <dd>
                <a
                  href={contact.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ink-soft hover:text-ink"
                >
                  GitHub
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <form onSubmit={handleSubmit} className="card space-y-5 p-6 sm:p-8">
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm text-ink-soft">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-md border border-line bg-base px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-pulse"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm text-ink-soft">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-md border border-line bg-base px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-pulse"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm text-ink-soft">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={form.message}
              onChange={handleChange}
              className="w-full resize-none rounded-md border border-line bg-base px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-pulse"
            />
          </div>

          <button type="submit" disabled={status === 'sending'} className="btn-primary w-full">
            <Icon name="Send" className="h-4 w-4" />
            {status === 'sending' ? 'Sending…' : 'Send Message'}
          </button>

          {status === 'sent' && (
            <p className="text-sm text-pulse" role="status">
              {contact.formEndpoint
                ? 'Message sent — thanks for reaching out.'
                : 'Opening your email client with this message pre-filled.'}
            </p>
          )}
          {status === 'error' && (
            <p className="text-sm text-signal" role="alert">
              Something went wrong sending that. Email me directly at{' '}
              <a href={`mailto:${contact.email}`} className="underline">
                {contact.email}
              </a>
              .
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
