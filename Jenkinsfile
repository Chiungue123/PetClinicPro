pipeline {
    agent any

    stages {
	    stage('Checkout') {
            steps {
                // Checkout the source code from the Git repository
                git 'https://github.com/Chiungue123/PetClinicPro.git'
            }
        }

    	stage('Checking Docker') {
            steps {
        		sh '''
        		docker info
        		docker version
        		docker-compose version
        		'''
            }
        }

        stage('Build Spring Boot Application') {
            steps {
                script {
                    // Assuming Maven is configured in Jenkins
                   dir('BackEnd'){
		                sh './mvnw clean package -DskipTests'
                   }
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
}
