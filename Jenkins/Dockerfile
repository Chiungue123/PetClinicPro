# Use the official Jenkins image as a parent image
FROM jenkins/jenkins:lts

# Switch to root to install Docker Compose
USER root

# Install Docker CLI using the official Docker installation script
RUN curl -fsSL https://get.docker.com -o get-docker.sh && sh get-docker.sh \
    && docker -v

# Clean up
RUN rm get-docker.sh

# Switch back to the jenkins user
USER jenkins

