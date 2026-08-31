import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the name and headline in the hero section', () => {
    render(<App />);
    // "Sai Kukkapalli" appears once (nav + hero use different markup), the
    // headline text intentionally repeats between the hero and the footer
    // tagline, so we assert presence rather than a single unique match.
    expect(screen.getAllByText('Sai Kukkapalli').length).toBeGreaterThan(0);
    expect(screen.getAllByText('DevOps & Cloud Engineer').length).toBeGreaterThan(0);
  });

  it('renders every top-level section as a landmark', () => {
    render(<App />);
    [
      'home',
      'about',
      'skills',
      'projects',
      'journey',
      'what-i-build',
      'security',
      'github',
      'resume',
      'contact',
    ].forEach((id) => {
      expect(document.getElementById(id)).toBeTruthy();
    });
  });

  it('renders the featured projects', () => {
    render(<App />);
    // Project titles intentionally appear in both the Projects section and
    // the GitHub Activity section, so there can be more than one match.
    expect(
      screen.getAllByText('Production-Grade DevSecOps CI/CD Platform').length
    ).toBeGreaterThan(0);
    expect(
      screen.getAllByText('AWS Infrastructure Automation with Terraform').length
    ).toBeGreaterThan(0);
  });
});
