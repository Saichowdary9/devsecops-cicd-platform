🚀 Sai Kukkapalli — DevOps & Cloud Engineer Portfolio

Production-Style DevOps • DevSecOps • AWS • Kubernetes • CI/CD • Observability

<p>
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 18">
  <img src="https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite 6">
  <img src="https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Docker-Multi--Stage-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker">
  <img src="https://img.shields.io/badge/Jenkins-CI%2FCD-D24939?style=for-the-badge&logo=jenkins&logoColor=white" alt="Jenkins">
  <img src="https://img.shields.io/badge/Trivy-DevSecOps-1904DA?style=for-the-badge&logo=aqua&logoColor=white" alt="Trivy">
</p>

<p>
  <img src="https://img.shields.io/badge/AWS-EKS%20%7C%20ECR%20%7C%20ALB-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white" alt="AWS">
  <img src="https://img.shields.io/badge/Kubernetes-1.36-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white" alt="Kubernetes">
  <img src="https://img.shields.io/badge/Prometheus-Monitoring-E6522C?style=for-the-badge&logo=prometheus&logoColor=white" alt="Prometheus">
  <img src="https://img.shields.io/badge/Grafana-Observability-F46800?style=for-the-badge&logo=grafana&logoColor=white" alt="Grafana">
</p>

A production-style, hands-on DevOps project that demonstrates how a real application is built, tested, secured, containerized, versioned, deployed, observed, intentionally broken, troubleshot, and recovered.

</div>

🧭 Project Overview

This repository is more than a React portfolio website.

It is a complete DevOps and DevSecOps implementation built around a real application, covering the software delivery lifecycle from source code commit to Kubernetes deployment and operational monitoring.

The project demonstrates practical experience with:

CI/CD automation using Jenkins

Automated application testing

Shift-left security using Trivy

Multi-stage containerization using Docker

Versioned container artifacts in Amazon ECR

Kubernetes orchestration using Amazon EKS

AWS Application Load Balancer integration

IAM least-privilege design

Kubernetes runtime hardening

ServiceAccount and credential exposure reduction

NetworkPolicy

Prometheus + Grafana observability

Failure injection and recovery

Real troubleshooting using Kubernetes events and runtime state

The engineering lifecycle

        CODE
         │
         ▼
      GitHub
         │
         ▼
      Jenkins
         │
         ├──────────────► Automated Tests
         │
         ├──────────────► Trivy Filesystem Scan
         │
         ▼
    Docker Build
         │
         ▼
   Trivy Image Scan
         │
         ▼
 Versioned Image
   BUILD_NUMBER
         │
         ▼
    Amazon ECR
         │
         ▼
     Amazon EKS
         │
         ▼
 Kubernetes Deployment
         │
         ▼
 Service → Ingress → AWS ALB
         │
         ▼
      🌐 Users
         │
         ▼
 Prometheus → Grafana
         │
         ▼
     Observability
         │
         ▼
 Failure Testing
         │
         ▼
 Troubleshooting
         │
         ▼
      Recovery

Core philosophy: Build → Test → Scan → Package → Version → Publish → Deploy → Verify → Monitor → Break → Troubleshoot → Recover

🏗️ Architecture

End-to-End Architecture

flowchart TB
    DEV["👨‍💻 Developer"] --> GH["GitHub"]

    GH --> J["Jenkins CI/CD"]

    subgraph CI["CI / DevSecOps"]
        J --> TEST["Automated Tests"]
        TEST --> FS["Trivy Filesystem Scan"]
        FS --> BUILD["Docker Multi-Stage Build"]
        BUILD --> IMGSCAN["Trivy Image Scan"]
        IMGSCAN --> TAG["Versioned Image<br/>BUILD_NUMBER"]
    end

    TAG --> ECR["Amazon ECR"]

    subgraph EKS["Amazon EKS 1.36"]
        ECR --> DEP["Deployment"]
        DEP --> RS["ReplicaSet"]
        RS --> P1["Portfolio Pod :8080"]
        RS --> P2["Portfolio Pod :8080"]

        SVC["portfolio-service :80"] --> P1
        SVC --> P2
        ING["portfolio-ingress"] --> SVC
    end

    ALB["AWS Application Load Balancer :80"] --> ING
    USER["🌐 Browser"] --> ALB

    subgraph OBS["Observability"]
        P1 --> PROM["Prometheus"]
        P2 --> PROM
        PROM --> GRAF["Grafana"]
    end

🌐 Application Request Flow

                    INTERNET
                       │
                       ▼
             ┌──────────────────┐
             │    AWS ALB :80   │
             └────────┬─────────┘
                      │
                      ▼
             ┌──────────────────┐
             │ Kubernetes       │
             │ Ingress          │
             └────────┬─────────┘
                      │
                      ▼
             ┌──────────────────┐
             │ Service :80      │
             │ ClusterIP        │
             └────────┬─────────┘
                      │
                ┌─────┴─────┐
                ▼           ▼
          ┌──────────┐ ┌──────────┐
          │ Pod :8080│ │ Pod :8080│
          │ NGINX    │ │ NGINX    │
          └────┬─────┘ └────┬─────┘
               │             │
               └──────┬──────┘
                      ▼
               React Static Files

🚀 CI/CD Delivery Flow

Git Push
   │
   ▼
GitHub
   │
   ▼
Jenkins
   │
   ├── Checkout
   │
   ├── Automated Tests
   │
   ├── Trivy Filesystem Scan
   │
   ├── Docker Build
   │
   ├── Image Tag
   │      └── :${BUILD_NUMBER}
   │
   ├── Trivy Image Scan
   │
   ├── Push to ECR
   │
   ├── Update EKS Deployment
   │
   └── Rollout Verification
          │
          ▼
       SUCCESS

🧰 Technology Stack

Layer

Technology

Role

Frontend

React 18

Application

Build

Vite 6

Production build

Styling

Tailwind CSS

UI styling

Testing

Vitest

Automated testing

UI Testing

React Testing Library

Component behavior

Linting

ESLint

Static analysis

Source Control

Git / GitHub

Version control

CI/CD

Jenkins

Pipeline automation

Containerization

Docker

Application packaging

Local Runtime

Docker Compose

Local container workflow

Security

Trivy

Dependency/filesystem/image scanning

Registry

Amazon ECR

Container artifact storage

Orchestration

Amazon EKS 1.36

Kubernetes platform

Ingress

AWS Load Balancer Controller

Kubernetes → AWS integration

Load Balancing

AWS ALB

Public HTTP entry point

Monitoring

Prometheus

Metrics collection

Visualization

Grafana

Dashboards

Cluster Metrics

kube-state-metrics

Kubernetes object metrics

Node Metrics

node-exporter

Node metrics

📁 Repository Structure

sai-kukkapalli-devops-portfolio/
│
├── src/
│   ├── components/
│   ├── sections/
│   ├── App.jsx
│   └── App.test.jsx
│
├── public/
│
├── k8s/
│   ├── portfolio-deployment.yml
│   ├── portfolio-service.yml
│   ├── portfolio-ingress.yml
│   ├── portfolio-serviceaccount.yml
│   └── portfolio-network-policy.yml
│
├── Dockerfile
├── docker-compose.yml
├── Jenkinsfile
├── package.json
├── package-lock.json
├── vite.config.*
├── tailwind.config.*
├── eslint.config.*
├── .gitignore
└── README.md

🧪 Application Testing

The application uses:

Vitest
+
React Testing Library

Implemented tests verify:

Hero section renders the name and headline

Top-level sections are present as landmarks

Featured projects render correctly

Current result:

3 / 3 tests passed

Production build:

npm run build

The production build completes successfully.

🐳 Docker Engineering

Multi-Stage Build

The image uses separate build and runtime stages.

FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build


FROM nginx:alpine

RUN apk update && apk upgrade

COPY --from=builder /app/dist /usr/share/nginx/html

Why this design?

Node.js + npm + dependencies
             │
             ▼
        Build React App
             │
             ▼
           dist/
             │
             ▼
      NGINX Runtime Image

The final container only needs NGINX and the generated static assets.

Benefits

Smaller runtime surface

Build dependencies excluded from runtime

Clear build/runtime separation

Reduced attack surface

Faster and simpler production serving

🔐 Container Security Hardening

The NGINX container was changed from a privileged/root-style runtime to an unprivileged runtime.

NGINX
 │
 ├── UID 101
 ├── GID 101
 ├── listen :8080
 ├── USER nginx
 └── PID file → /tmp/nginx.pid

Kubernetes additionally enforces:

runAsUser: 101
runAsGroup: 101
runAsNonRoot: true

The running container was verified using:

kubectl exec <pod> -- id

Result:

uid=101(nginx)
gid=101(nginx)

🛡️ DevSecOps

Security is integrated directly into the delivery pipeline.

Developer
   │
   ▼
Source Code
   │
   ▼
Dependency / Filesystem Scan
   │
   ▼
Container Build
   │
   ▼
Final Image Scan
   │
   ▼
Security Gate
   │
   ├── FAIL → Stop pipeline
   │
   └── PASS → Publish artifact

🔎 Trivy Filesystem Scan

trivy fs . \
  --include-dev-deps \
  --exit-code 1 \
  --severity HIGH,CRITICAL

This scans the application filesystem and dependency tree.

The pipeline is configured so HIGH/CRITICAL findings cause a non-zero exit code.

🔎 Trivy Image Scan

trivy image \
  --exit-code 1 \
  --severity HIGH,CRITICAL \
  <image>

The second scan validates the actual container artifact that will be published.

Why scan twice?

Scan

Primary purpose

Filesystem

Application/dependency vulnerabilities

Image

Final container/runtime vulnerabilities

🩹 Real Vulnerability Remediation

During development, the initial Alpine-based NGINX image produced HIGH findings involving packages including:

libcrypto3
libexpat
libssl3

The runtime image was updated using:

RUN apk update && apk upgrade

Then rebuilt:

docker compose build --no-cache

Final security result:

HIGH:      0
CRITICAL:  0

This demonstrates a real DevSecOps feedback loop:

Detect
  ↓
Investigate
  ↓
Remediate
  ↓
Rebuild
  ↓
Rescan
  ↓
Pass

📦 Amazon ECR

Repository:

sai-kukkapalli-devops-portfolio

Region:

eu-north-1

Image:

008482604258.dkr.ecr.eu-north-1.amazonaws.com/sai-kukkapalli-devops-portfolio

Image Versioning

Jenkins uses the build number:

BUILD_NUMBER

Example:

Build #7 → ECR :7
Build #8 → ECR :8
Build #9 → ECR :9

This provides deployment traceability:

Jenkins Build
      │
      ▼
Container Tag
      │
      ▼
ECR Artifact
      │
      ▼
EKS Deployment

ECR security configuration includes:

Immutable tags

Scan on push

AES256 encryption

☸️ Amazon EKS

Cluster:

sai-devops-eks

Region:

eu-north-1

Kubernetes:

1.36

The application runs as a Kubernetes Deployment with two replicas.

🔄 Kubernetes Deployment Model

Deployment
     │
     ▼
 ReplicaSet
     │
 ┌───┴────┐
 ▼        ▼
Pod      Pod
:8080    :8080

The Deployment maintains the desired state.

If one Pod disappears:

Desired = 2
Running = 1
     │
     ▼
ReplicaSet detects drift
     │
     ▼
Replacement Pod
     │
     ▼
Running = 2

🌐 Kubernetes Networking

Service

portfolio-service

Service Port 80
       │
       ▼
Target Port 8080
       │
       ▼
Portfolio Pods

The Service provides stable networking while Pod IP addresses remain ephemeral.

Ingress

portfolio-ingress

The AWS Load Balancer Controller watches the Ingress and reconciles it with AWS.

Kubernetes Ingress
        │
        ▼
AWS Load Balancer Controller
        │
        ▼
Application Load Balancer
        │
        ▼
Target Group
        │
        ▼
Pod IP Targets

The public ALB successfully returned:

HTTP 200 OK

❤️ ALB Health Checks

Observed NGINX logs contained requests from:

ELB-HealthChecker/2.0

with:

GET / HTTP/1.1
200

This validates:

ALB
 ↓
Ingress
 ↓
Service
 ↓
Pod
 ↓
NGINX
 ↓
HTTP 200

👤 ServiceAccount Hardening

ServiceAccount:

portfolio-sa

The portfolio application does not need Kubernetes API access.

Therefore:

automountServiceAccountToken: false

is configured.

The Pod was explicitly tested and confirmed:

NO TOKEN MOUNTED

This prevents an unnecessary Kubernetes credential from being exposed to the application.

🔒 Kubernetes SecurityContext

The Deployment uses:

securityContext:
  runAsUser: 101
  runAsGroup: 101
  runAsNonRoot: true
  seccompProfile:
    type: RuntimeDefault

Container-level restrictions include:

allowPrivilegeEscalation: false

capabilities:
  drop:
    - ALL

Defense-in-depth model

Non-root
   +
No privilege escalation
   +
Drop capabilities
   +
RuntimeDefault seccomp
   +
No ServiceAccount token
   +
NetworkPolicy

🧱 NetworkPolicy

Policy:

portfolio-network-policy

Selected workload:

app=portfolio

Allowed ingress:

TCP 8080

The current policy intentionally does not restrict source selectors or egress because this application is a simple static frontend and does not require a multi-tier traffic model.

🔑 AWS IAM Architecture

The project uses IAM roles rather than static AWS access keys.

Jenkins Identity

Jenkins EC2
     │
     ▼
JenkinsECRRole
     │
     ├── ECR permissions
     ├── EKS DescribeCluster
     └── EKS Edit access
              │
              └── default namespace

Jenkins was deliberately not granted cluster-admin permissions.

This follows least privilege.

Worker Node Identity

The EKS worker role includes permissions for:

AmazonEKSWorkerNodePolicy
AmazonEKS_CNI_Policy
AmazonEC2ContainerRegistryPullOnly
AmazonSSMManagedInstanceCore

The permission model separates responsibilities:

Jenkins
  └── Push image

Worker Node
  └── Pull image

🔐 EKS API Security

The EKS public API endpoint was initially broadly accessible.

It was hardened to allow access only from the required administration and Jenkins source IPs using /32 CIDRs.

Conceptually:

Internet
   │
   ├── ❌ Unknown source
   │
   ├── ❌ Unapproved source
   │
   ├── ✅ Admin EC2 IP
   │
   └── ✅ Jenkins EC2 IP
             │
             ▼
         EKS API

Operational consideration: EC2 public IPs can change after stop/start unless Elastic IPs are used. If a source IP changes, the EKS API CIDR allowlist must be updated.

📋 EKS Control-Plane Logging

All five EKS control-plane logging categories were enabled:

API
Audit
Authenticator
Controller Manager
Scheduler

These provide better visibility into Kubernetes control-plane operations and support security investigations and troubleshooting.

📊 Observability

Monitoring is implemented using Prometheus and Grafana.

                  Kubernetes
                      │
          ┌───────────┴───────────┐
          ▼                       ▼
 kube-state-metrics          node-exporter
          │                       │
          └───────────┬───────────┘
                      ▼
                  Prometheus
                      │
                      ▼
                   Grafana

Installed components include:

Prometheus

Grafana

Alertmanager

kube-state-metrics

node-exporter

📈 Portfolio Monitoring Dashboard

The custom dashboard tracks:

Panel

What it tells us

Available replicas

Deployment availability

CPU

Pod CPU consumption

Memory

Pod working-set usage

Restarts

Container instability

Running phase

Pod health

Desired vs available

Deployment reconciliation

This gives visibility into both workload state and resource behavior.

📝 Logging Strategy

The current operational visibility model uses:

kubectl logs
      +
Kubernetes Events
      +
EKS Control Plane Logs
      +
Prometheus Metrics
      +
Grafana

For a small static NGINX portfolio application, adding a full centralized logging platform would introduce complexity without a current operational requirement.

A centralized logging stack can be added if the workload grows.

💥 Failure Engineering

The project intentionally introduces failures to validate Kubernetes behavior instead of assuming the system is healthy.

Failure Test 1 — Pod Deletion

kubectl delete pod <pod-name> -n default

Observed:

Pod deleted
     ↓
ReplicaSet detects missing replica
     ↓
Replacement Pod created
     ↓
2 Pods Running

Validates

Desired state

ReplicaSet reconciliation

Self-healing

Replacement Pod creation

Failure Test 2 — Kill Container PID 1

kubectl exec -n default <pod-name> -- sh -c 'kill 1'

Observed:

Container process terminated
        ↓
Container restarted
        ↓
Restart count increased
        ↓
Pod returned to Running

Important distinction

Delete Pod
   ↓
New Pod

Kill PID 1
   ↓
Container restart
   ↓
Same Pod

This demonstrates the difference between Pod lifecycle recovery and container restart behavior.

Failure Test 3 — Invalid ECR Image

The Deployment was intentionally changed to:

:9999

The tag did not exist in ECR.

Observed:

ErrImagePull
     ↓
ImagePullBackOff

Troubleshooting command:

kubectl describe pod <pod-name> -n default

The Events section identified:

failed to resolve reference
...:9999
not found

Root cause

The cluster requested an image tag that did not exist in the ECR repository.

Recovery

The Deployment was restored to the known-good image:

:9

Then rollout and external HTTP response were verified.

🧠 Troubleshooting Methodology

The project follows a structured troubleshooting process:

┌───────────────┐
│    DETECT     │
└───────┬───────┘
        ▼
┌───────────────┐
│    OBSERVE    │
└───────┬───────┘
        ▼
┌───────────────┐
│    DESCRIBE   │
└───────┬───────┘
        ▼
┌───────────────┐
│ CHECK EVENTS  │
└───────┬───────┘
        ▼
┌───────────────┐
│ FIND ROOT CAUSE│
└───────┬───────┘
        ▼
┌───────────────┐
│    RECOVER    │
└───────┬───────┘
        ▼
┌───────────────┐
│    VERIFY     │
└───────────────┘

Useful commands:

kubectl get pods -n default

kubectl describe pod <pod-name> -n default

kubectl logs <pod-name> -n default

kubectl logs <pod-name> -n default --previous

kubectl get events -n default --sort-by=.lastTimestamp

kubectl get deployment portfolio -n default

kubectl rollout status deployment/portfolio -n default

kubectl get service portfolio-service -n default

kubectl get ingress portfolio-ingress -n default

🔄 Deployment Verification

The pipeline does not treat:

kubectl set image

as proof of successful deployment.

It waits for:

kubectl rollout status deployment/portfolio \
  --namespace default \
  --timeout=180s

and then verifies:

Pods
Deployment
Service
Ingress
NetworkPolicy

This separates:

API accepted the change

from:

Application successfully rolled out and is healthy

🎯 Engineering Decisions & Trade-offs

Why SonarQube is not in the final pipeline

SonarQube was evaluated during the original design.

The available dedicated EC2 environment had only 2 GB RAM and the Java-based SonarQube process repeatedly caused memory pressure/OOM behavior.

Rather than adding an unsuitable component simply to increase the tool count, the final security/quality workflow uses:

Automated Tests
      +
Trivy Filesystem Scan
      +
Trivy Image Scan

SonarQube is therefore not claimed as implemented.

Why ConfigMap and Secret are not used

The application is a static frontend and currently has no backend credentials or sensitive runtime configuration.

Adding Kubernetes configuration objects without an actual requirement would increase complexity without providing meaningful security value.

If the application later introduces:

Backend APIs

Runtime configuration

Credentials

External service integrations

then ConfigMaps and Secrets can be introduced appropriately.

Why centralized logging is not implemented

The current workload is small and static.

Current visibility is provided through:

Container logs
Kubernetes Events
EKS Control Plane Logs
Prometheus
Grafana

A centralized logging platform can be introduced when scale, retention, or multi-service troubleshooting requires it.

Why HTTPS / ACM is intentionally skipped

The current deployment uses the generated AWS ALB DNS name and does not have a custom domain configured.

HTTPS would require:

Custom Domain
      +
AWS Certificate Manager
      +
ALB HTTPS Listener :443

This is intentionally marked as a future enhancement rather than being represented as implemented.

🧩 Kubernetes Concepts Demonstrated

Concept

Practical demonstration

Deployment

Desired-state workload management

ReplicaSet

Self-healing

Pod

Runtime unit

Service

Stable networking

Ingress

HTTP routing

ServiceAccount

Workload identity

SecurityContext

Runtime hardening

NetworkPolicy

Network boundary

Rolling update

Image release

Events

Failure diagnosis

Restart behavior

Container recovery

☁️ AWS Concepts Demonstrated

AWS Concept

Practical use

EC2

Jenkins/admin hosts

IAM

Identity and least privilege

ECR

Container registry

EKS

Kubernetes control plane

ALB

Public application endpoint

VPC

Cluster networking

Security Groups

Network filtering

EKS Access Entries

IAM → Kubernetes authorization

EKS Control Plane Logs

Operational visibility

🏆 Project Status

Capability

Status

React/Vite application

✅

Tailwind CSS

✅

Automated tests

✅

Git/GitHub

✅

Docker

✅

Docker Compose

✅

Jenkins CI/CD

✅

Trivy filesystem scan

✅

Trivy image scan

✅

ECR

✅

ECR immutable tags

✅

ECR scan-on-push

✅

ECR encryption

✅

Amazon EKS

✅

Kubernetes Deployment

✅

Kubernetes Service

✅

Kubernetes Ingress

✅

AWS Load Balancer Controller

✅

AWS ALB

✅

External HTTP access

✅

Non-root container

✅

SecurityContext

✅

ServiceAccount hardening

✅

NetworkPolicy

✅

IAM least privilege

✅

EKS API CIDR restriction

✅

EKS control-plane logging

✅

Prometheus

✅

Grafana

✅

Application logging review

✅

Pod failure test

✅

Container failure test

✅

Invalid image failure test

✅

HTTPS / ACM

⏭️ Intentionally skipped

Terraform

🔜 Future

HPA

🔜 Future

Centralized logging

🔜 Future

Automated rollback

🔜 Future

🚀 Future Enhancements

Current Platform
       │
       ├── Terraform
       │      └── Infrastructure as Code
       │
       ├── HTTPS + ACM
       │      └── TLS / custom domain
       │
       ├── HPA
       │      └── Automatic scaling
       │
       ├── Prometheus Alerts
       │      └── Proactive operations
       │
       ├── Centralized Logging
       │      └── Loki / Fluent Bit
       │
       ├── Automated Rollback
       │      └── Failed-release recovery
       │
       ├── Canary / Blue-Green
       │      └── Safer releases
       │
       └── Private EKS API
              └── Reduced control-plane exposure




Target group port

Service targetPort

Container listening port

Health-check response

Security Groups

NetworkPolicy



🧾 Command Reference

Application

npm ci
npm test
npm run build
npm run lint

Docker

docker compose build
docker compose build --no-cache
docker compose up -d
docker compose ps
docker images

Trivy

trivy fs . --include-dev-deps

trivy image <image>

AWS

aws sts get-caller-identity

aws ecr get-login-password \
  --region eu-north-1

aws eks update-kubeconfig \
  --name sai-devops-eks \
  --region eu-north-1

Kubernetes

kubectl get pods -n default

kubectl get deployment portfolio -n default

kubectl get service portfolio-service -n default

kubectl get ingress portfolio-ingress -n default

kubectl get networkpolicy -n default

kubectl rollout status deployment/portfolio -n default

kubectl rollout history deployment/portfolio -n default

kubectl describe pod <pod-name> -n default

kubectl logs <pod-name> -n default

kubectl logs <pod-name> -n default --previous

kubectl get events -n default --sort-by=.lastTimestamp

📌 Project Positioning

This project should be described as a:

Production-style DevOps/DevSecOps portfolio project

rather than claiming it is a fully production-scale enterprise platform.

The goal is to demonstrate practical engineering decisions:

Automation
   +
Security
   +
Reliability
   +
Observability
   +
Troubleshooting
   +
Recovery

without adding infrastructure simply for the sake of increasing the number of tools.

👨‍💻 Author

<div align="center">

Sai Kukkapalli

Aspiring DevOps & Cloud Engineer

AWS • Kubernetes • Docker • Jenkins • Terraform • Ansible • Linux • CI/CD • DevSecOps • Monitoring

</div>

⭐ Final Architecture Summary

                         ┌────────────────────┐
                         │      GitHub        │
                         └─────────┬──────────┘
                                   │
                                   ▼
                         ┌────────────────────┐
                         │      Jenkins       │
                         │       CI/CD        │
                         └─────────┬──────────┘
                                   │
                    ┌──────────────┼──────────────┐
                    ▼              ▼              ▼
                 Tests        Trivy FS       Docker Build
                    │              │              │
                    └──────────────┼──────────────┘
                                   ▼
                            Trivy Image Scan
                                   │
                                   ▼
                         Versioned ECR Image
                                   │
                                   ▼
                            Amazon EKS 1.36
                                   │
                              Deployment
                                   │
                         ┌─────────┴─────────┐
                         ▼                   ▼
                    Pod :8080           Pod :8080
                         │                   │
                         └─────────┬─────────┘
                                   ▼
                             Service :80
                                   │
                                   ▼
                              Ingress
                                   │
                                   ▼
                              AWS ALB :80
                                   │
                                   ▼
                              🌐 Users


                  ┌─────────────────────────────┐
                  │        OBSERVABILITY        │
                  │                             │
                  │ Kubernetes → Prometheus     │
                  │                  ↓          │
                  │               Grafana       │
                  └─────────────────────────────┘

<div align="center">

Build. Secure. Automate. Deploy. Observe. Break. Troubleshoot. Recover.

Built as a hands-on DevOps and Cloud engineering portfolio project.

</div>
