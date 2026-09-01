

export const personal = {
  name: 'Sai Kukkapalli',
  roles: [
    'DevOps Engineer',
    'Junior DevOps Engineer',
    'Cloud Engineer',
    'DevOps Trainee',
    'Technical Support Engineer',
  ],
  headline: 'DevOps & Cloud Engineer',
  subheadline:
    'Building automated, secure and scalable infrastructure through DevOps, cloud technologies and infrastructure as code.',
  status: 'Open to DevOps & Cloud Engineering opportunities',
  positioning:
    'Aspiring DevOps & Cloud Engineer passionate about automation, cloud infrastructure, containerization, CI/CD, Kubernetes, and building reliable deployment systems.',
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Security', href: '#security' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

export const about = {
  paragraphs: [
    "I'm building practical, hands-on expertise across the DevOps and cloud toolchain — Linux, Git and GitHub, Docker, Kubernetes, Jenkins, AWS, Terraform and Ansible — with a focus on CI/CD, DevSecOps and monitoring.",
    "My focus is on implementation over theory: setting up pipelines myself, breaking things in a lab environment, reading the logs, and understanding how a request actually moves from a Git push to a running container in production.",
    "I care about how infrastructure works end-to-end — provisioning, deployment, security and observability — and I'm systematically working through that stack one project at a time rather than collecting tools for a resume.",
  ],
  focusAreas: [
    'Hands-on implementation',
    'Automation over manual steps',
    'Troubleshooting real failures',
    'End-to-end infrastructure understanding',
  ],
};

// -- Skills -----------------------------------------------------------------
// icon values map to lucide-react component names, resolved in TechBadge.jsx
export const skillCategories = [
  {
    id: 'cloud',
    title: 'Cloud',
    icon: 'Cloud',
    items: ['AWS', 'EC2', 'VPC', 'IAM', 'ECR', 'Load Balancer', 'S3', 'CloudWatch', 'EKS'],
  },
  {
    id: 'cicd',
    title: 'DevOps & CI/CD',
    icon: 'GitBranch',
    items: ['Jenkins', 'Git', 'GitHub', 'CI/CD', 'GitHub Actions'],
  },
  {
    id: 'containers',
    title: 'Containers & Orchestration',
    icon: 'Container',
    items: ['Docker', 'Kubernetes', 'Helm'],
  },
  {
    id: 'iac',
    title: 'Infrastructure as Code',
    icon: 'FileCode2',
    items: ['Terraform'],
  },
  {
    id: 'config',
    title: 'Configuration Management',
    icon: 'Settings2',
    items: ['Ansible'],
  },
  {
    id: 'security',
    title: 'Security',
    icon: 'ShieldCheck',
    items: ['SonarQube', 'Trivy', 'IAM', 'RBAC', 'Secrets Management', 'Least Privilege'],
  },
  {
    id: 'monitoring',
    title: 'Monitoring',
    icon: 'Activity',
    items: ['Prometheus', 'Grafana'],
  },
  {
    id: 'os',
    title: 'Operating Systems',
    icon: 'Terminal',
    items: ['Linux', 'Ubuntu'],
  },
  {
    id: 'scripting',
    title: 'Programming / Scripting',
    icon: 'Code2',
    items: ['Python', 'Bash', 'YAML'],
  },
];

// -- Projects -----------------------------------------------------------------
export const projects = [
  {
    id: 'devsecops-pipeline',
    title: 'Production-Grade DevSecOps CI/CD Platform',
    status: 'In progress — primary hands-on project',
    description:
      'Designed and implemented an end-to-end DevSecOps pipeline that automates source-code validation, security scanning, containerization and Kubernetes deployment.',
    tech: ['GitHub', 'Jenkins', 'Docker', 'SonarQube', 'Trivy', 'AWS ECR', 'Kubernetes', 'Prometheus', 'Grafana'],
    highlights: [
      'Automated CI/CD pipeline',
      'Static code analysis',
      'Container vulnerability scanning',
      'Secure image management',
      'Kubernetes deployment',
      'Monitoring and observability',
      'Automated rollback',
      'Security-first pipeline design',
    ],
  
    liveUrl: '',
    githubUrl: 'https://github.com/Saichowdary9/devsecops-cicd-platform',
  },
  {
    id: 'terraform-aws-infra',
    title: 'AWS Infrastructure Automation with Terraform',
    status: 'In progress',
    description:
      'Automated AWS infrastructure provisioning using Terraform following Infrastructure as Code and least-privilege principles.',
    tech: ['Terraform', 'AWS', 'VPC', 'IAM', 'EC2', 'EKS', 'Security Groups', 'Load Balancer', 'GitHub'],
    highlights: [
      'Infrastructure as Code',
      'Reusable Terraform modules',
      'AWS networking',
      'IAM and least privilege',
      'Infrastructure state management',
      'Automated infrastructure provisioning',
    ],
    liveUrl: '',
    githubUrl: 'https://github.com/Saichowdary9/aws-terraform-infrastructure',
  },
];

// -- Journey / roadmap --------------------------------------------------------
export const journeySteps = [
  { title: 'Linux', note: 'Filesystems, permissions, processes, shell fundamentals.' },
  { title: 'Git & GitHub', note: 'Version control, branching workflows, collaboration.' },
  { title: 'Docker', note: 'Building images, containers, multi-stage builds.' },
  { title: 'Kubernetes', note: 'Pods, services, deployments, cluster fundamentals.' },
  { title: 'Ansible', note: 'Configuration management and repeatable automation.' },
  { title: 'Jenkins & CI/CD', note: 'Automated build, test and deployment pipelines.' },
  { title: 'AWS', note: 'Core cloud services — compute, networking, storage, IAM.' },
  { title: 'Terraform', note: 'Infrastructure as Code and reusable provisioning.' },
  { title: 'DevSecOps', note: 'Security gates baked into the delivery pipeline.' },
  { title: 'Monitoring & Observability', note: 'Metrics, dashboards and alerting.' },
];

// -- What I build --------------------------------------------------------------
export const buildCards = [
  {
    icon: 'GitBranch',
    title: 'CI/CD Automation',
    description: 'Build automated pipelines for testing, security scanning, containerization and deployment.',
  },
  {
    icon: 'FileCode2',
    title: 'Infrastructure as Code',
    description: 'Provision and manage cloud infrastructure using Terraform.',
  },
  {
    icon: 'Container',
    title: 'Containerization',
    description: 'Build, optimize and deploy Docker containers.',
  },
  {
    icon: 'Boxes',
    title: 'Kubernetes',
    description: 'Deploy and manage containerized applications using Kubernetes.',
  },
  {
    icon: 'Cloud',
    title: 'Cloud Infrastructure',
    description: 'Work with AWS infrastructure, networking, IAM and compute resources.',
  },
  {
    icon: 'ShieldCheck',
    title: 'DevSecOps',
    description: 'Integrate security checks into CI/CD pipelines using tools such as SonarQube and Trivy.',
  },
  {
    icon: 'Settings2',
    title: 'Automation',
    description: 'Automate repetitive infrastructure and configuration tasks using Ansible and scripting.',
  },
  {
    icon: 'Activity',
    title: 'Monitoring',
    description: 'Monitor applications and infrastructure using Prometheus and Grafana.',
  },
];

// -- Security by design ----------------------------------------------------------
export const securityPrinciples = [
  { icon: 'KeyRound', title: 'Least privilege', description: 'Access is scoped to exactly what a role needs, nothing more.' },
  { icon: 'FileX2', title: 'No secrets in source code', description: 'Credentials never live in a repository or commit history.' },
  { icon: 'Lock', title: 'Secure credential management', description: 'Secrets are injected at runtime, not hardcoded.' },
  { icon: 'ScanSearch', title: 'Container vulnerability scanning', description: 'Images are scanned with Trivy before they ship.' },
  { icon: 'Code2', title: 'Static code analysis', description: 'SonarQube checks code quality and security issues pre-merge.' },
  { icon: 'ShieldCheck', title: 'Kubernetes RBAC', description: 'Role-based access control scopes what workloads can do.' },
  { icon: 'Box', title: 'Secure container execution', description: 'Containers run with minimal privileges and a reduced attack surface.' },
  { icon: 'UserCog', title: 'IAM roles', description: 'AWS access is granted through roles, not long-lived static keys.' },
  { icon: 'Network', title: 'Network security', description: 'VPCs, security groups and subnets restrict traffic by design.' },
  { icon: 'GitPullRequestArrow', title: 'Security gates in CI/CD', description: 'Pipelines fail closed when a security check does not pass.' },
];

// -- GitHub section (placeholders only, no fabricated stats) --------------------
export const github = {
  // REPLACE_ME: your GitHub profile URL
  profileUrl: 'https://github.com/Saichowdary9',
  repositories: projects.map((p) => ({
    name: p.title,
    description: p.description,
    tech: p.tech,
    url: p.githubUrl,
  })),
};

// -- Resume ------------------------------------------------------------------
export const resume = {
  headline: 'Interested in working together?',
  text: "I'm actively looking for opportunities where I can contribute, learn and grow as a DevOps or Cloud Engineer.",

  fileUrl: import.meta.env.VITE_RESUME_URL || '/resume/Sai-Kukkapalli-Resume.pdf',
};

// -- Contact -------------------------------------------------------------------
export const contact = {

  email: 'saikukkapalli9@gmail.com',
  linkedin: 'https://www.linkedin.com/in/kukkapalli-sai-chowdary-devops/',
  githubUrl: 'https://github.com/Saichowdary9',
  formEndpoint: import.meta.env.VITE_CONTACT_FORM_ENDPOINT || '',
};

export const footer = {
  tagline: 'DevOps & Cloud Engineer',
  note: 'Built with curiosity, automation and continuous learning.',
};
