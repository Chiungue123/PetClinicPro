pipeline {
    agent any

    stages {
	stage('Checkout') {
            steps {
                // Checkout the source code from the Git repository
                git 'https://github.com/Chiungue123/PetClinicPro.git'
            }
        }

        stage('Build Spring Boot Application') {
            steps {
                script {
                    // Assuming Maven is configured in Jenkins
                    sh 'mvn -f BackEnd/pom.xml clean package'
                }
            }
        }

        stage('Build and Deploy Containers') {
            steps {
                script {
                    // Assuming Docker and Docker Compose are configured in Jenkins
                    sh 'docker-compose up --build -d'
                }
            }
        }

	// Stage to Connect to EC2 Instance (commented out for local testing)
        /*stage('Connect to EC2 Instance') {
            steps {
                script {
                    // Use SSH to connect to the EC2 instance
                    // Example commands to connect and run commands on EC2:
                    // ssh -i /path/to/your/private/key ec2-user@your-ec2-instance-ip
                    // sudo docker-compose -f /path/to/your/docker-compose.yml up -d
                }
            }
        }*/
    }

    post {
        // Example: Send email notification upon build completion
        success {
            emailext (
                subject: "Build Successful",
                body: "Your Jenkins pipeline has completed successfully!",
                to: "stagg.roberto@gmail.com"
            )
        }
        // Example: Send email notification if build fails
        failure {
            emailext (
                subject: "Build Failed",
                body: "Your Jenkins pipeline has failed. Please check the logs for details.",
                to: "stagg.roberto@gmail.com"
            )
        }
    }
}