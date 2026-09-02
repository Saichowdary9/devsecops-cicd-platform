pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Trivy Filesystem Scan') {
            steps {
                sh 'trivy fs . --include-dev-deps --exit-code 1 --severity HIGH,CRITICAL'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker compose build'
            }
        }

        stage('Tag Docker Image') {
            steps {
                sh '''
                    docker tag \
                    sai-kukkapalli-devops-portfolio-portfolio:latest \
                    008482604258.dkr.ecr.eu-north-1.amazonaws.com/sai-kukkapalli-devops-portfolio:${BUILD_NUMBER}
                '''
            }
        }

        stage('Trivy Docker Image Scan') {
            steps {
                sh '''
                    trivy image --exit-code 1 --severity HIGH,CRITICAL \
                    008482604258.dkr.ecr.eu-north-1.amazonaws.com/sai-kukkapalli-devops-portfolio:${BUILD_NUMBER}
                '''
            }
        }

        stage('Push Image to ECR') {
            steps {
                sh '''
                    aws ecr get-login-password --region eu-north-1 | \
                    docker login --username AWS --password-stdin \
                    008482604258.dkr.ecr.eu-north-1.amazonaws.com

                    docker push \
                    008482604258.dkr.ecr.eu-north-1.amazonaws.com/sai-kukkapalli-devops-portfolio:${BUILD_NUMBER}
                '''
            }
        }

        stage('Deploy Application') {
            steps {
                sh 'docker compose up -d'
            }
        }

        stage('Verify Deployment') {
            steps {
                sh 'docker compose ps'
            }
        }
    }
}
