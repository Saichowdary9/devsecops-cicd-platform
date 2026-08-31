# Sai Kukkapalli — DevOps & Cloud Engineer Portfolio

A personal portfolio site for **Sai Kukkapalli**, an aspiring DevOps & Cloud
Engineer, built to showcase practical skills, hands-on projects, and a
transparent learning roadmap across the DevOps toolchain.

The site is intentionally simple on the backend (no server, no database) and
modular on the frontend, so it can double as the actual application deployed
through the DevSecOps pipeline it describes — see
[Planned DevOps infrastructure](#planned-devops-infrastructure) below.

## Features

- Dark-themed, responsive, single-page portfolio with smooth-scrolling
  in-page navigation and a sticky navbar with scroll-spy highlighting
- Signature animated CI/CD pipeline visual in the hero (Build → Test → Scan
  → Deploy → Monitor), respecting `prefers-reduced-motion`
- Sections: Hero, About, Skills (grouped by category), Featured Projects,
  DevOps Learning Journey (timeline), What I Build, Security by Design,
  GitHub Activity, Resume, and Contact
- A working contact form that requires no backend: it opens the visitor's
  email client with a pre-filled message, or posts to an optional form
  endpoint if one is configured (see [Environment variables](#environment-variables))
- All content (name, links, skills, projects, roadmap) lives in a single
  data file, `src/data/portfolioData.js`, so it can be updated without
  touching component code
- Accessible by default: semantic landmarks, visible keyboard focus states,
  a skip-to-content link, `aria-label`s on icon-only buttons, and reduced
  motion support
- No stock imagery, no tracking/analytics scripts, no third-party fonts
  loaded over the network (fonts are self-hosted via `@fontsource`)

## Technologies

| Layer      | Choice                                   |
| ---------- | ----------------------------------------- |
| Framework  | React 18                                  |
| Build tool | Vite 5                                    |
| Styling    | Tailwind CSS 3                            |
| Icons      | lucide-react                              |
| Fonts      | Space Grotesk, Inter, JetBrains Mono (self-hosted via `@fontsource`) |
| Testing    | Vitest + React Testing Library            |
| Linting    | ESLint (React + Hooks rules)              |

Dependencies are kept deliberately minimal — no router, no state management
library, no animation library, no UI kit — since a single-page portfolio
doesn't need them and every extra dependency is more surface area for a
future security scan to review.

## Local setup

Requires **Node.js 18+** and npm.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev

# 3. Build a production bundle into dist/
npm run build

# 4. Preview the production build locally
npm run preview
```

## Project structure

```text
portfolio/
├── src/
│   ├── components/       # Reusable UI pieces (Navbar, Footer, cards, icons)
│   ├── sections/         # One file per page section (Hero, About, etc.)
│   ├── data/
│   │   └── portfolioData.js   # All site content and placeholder links
│   ├── hooks/             # useScrollSpy (nav highlighting)
│   ├── App.jsx             # Composes all sections
│   ├── main.jsx            # React entry point
│   ├── index.css           # Tailwind layers, fonts, base styles
│   ├── setupTests.js        # Test environment mocks (jsdom gaps)
│   └── App.test.jsx          # Smoke tests
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── resume/             # Drop your real resume PDF here
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── .eslintrc.cjs
├── .env.example
└── package.json
```

## Before you deploy: replace the placeholders

Nothing here is fabricated — every stat, link and credential is a clearly
marked placeholder in `src/data/portfolioData.js`. Before deploying, update:

- `contact.email`, `contact.linkedin`, `contact.githubUrl`
- `github.profileUrl` and each project's `githubUrl` (currently point at
  `REPLACE_ME` repositories)
- `resume.fileUrl` — add the real PDF to `public/resume/Sai-Kukkapalli-Resume.pdf`
  (or point `VITE_RESUME_URL` at a different location)

## Environment variables

None of these are required to run the site locally — they're optional
overrides for deployment. Copy `.env.example` to `.env` and adjust as
needed. `.env` is already listed in `.gitignore` and nothing secret is
ever committed.

| Variable                       | Purpose                                                                 |
| ------------------------------- | ------------------------------------------------------------------------ |
| `VITE_SITE_URL`                 | Public URL of the deployed site (for canonical/OG tags if you add them) |
| `VITE_CONTACT_FORM_ENDPOINT`    | Optional POST endpoint (e.g. Formspree) for the contact form            |
| `VITE_RESUME_URL`               | Override the resume file path/URL                                      |

## Testing

```bash
npm run lint   # ESLint — 0 errors, 0 warnings
npm run test   # Vitest + React Testing Library
```

The current test suite is a smoke-test layer: it verifies the hero renders
the right name/headline, every top-level section mounts at its expected
anchor id, and both featured projects render. It's intentionally small —
enough to catch a broken build or a section that silently fails to
render — and is meant to grow alongside the Jenkins pipeline described
below (adding component-level tests as sections get more complex).

### A note on `npm audit`

`npm audit` currently reports moderate/high findings in the `esbuild` /
`vite` / `vitest` dependency chain
([GHSA-67mh-4wv8-2f99](https://github.com/advisories/GHSA-67mh-4wv8-2f99)).
This is a **dev-server-only** issue (it lets any website on the network
send requests to `vite`'s local dev server) — it does not affect the
production build output in `dist/`. Resolving it requires a breaking
major-version bump of Vite/Vitest, which hasn't been done here to avoid
destabilizing the project without full regression testing. This is worth
tracking as a real finding once the Jenkins/Trivy/SonarQube pipeline is in
place, rather than silently ignoring it.

## Currently implemented

- Static, responsive React frontend (this repository)
- Local build, lint, and test tooling
- Content structured so it's ready to containerize

## Planned DevOps infrastructure

The following are **not yet implemented** — they're the roadmap for turning
this portfolio into the hands-on DevSecOps project referenced in the
Featured Projects section:

```text
Git push
   │
   ▼
Jenkins pipeline triggered
   │
   ├─▶ npm ci / lint / test        (source validation)
   ├─▶ SonarQube static analysis   (code quality & security)
   ├─▶ Docker build                (multi-stage, minimal base image)
   ├─▶ Trivy scan                  (container vulnerability scanning)
   ├─▶ Push image to AWS ECR
   ├─▶ Deploy to Kubernetes (EKS)  (via manifests / Helm)
   └─▶ Prometheus + Grafana        (metrics, dashboards, alerting)
```

Planned additions, each as its own reviewable change:

- `Dockerfile` — multi-stage build serving the static `dist/` output
- `Jenkinsfile` — pipeline stages matching the diagram above
- `k8s/` — Kubernetes manifests (Deployment, Service, Ingress)
- `terraform/` — AWS infrastructure (VPC, EKS, IAM roles, ECR) as code
- `ansible/` — configuration management for any supporting infrastructure
- `sonar-project.properties` — SonarQube configuration
- Trivy scanning step wired into CI, failing the build on high-severity
  findings
- Prometheus/Grafana configuration for uptime and performance monitoring

None of this is claimed as already built — the "Currently Implemented"
section above is the accurate state of the repository today.
