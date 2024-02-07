# Base Image
FROM openjdk:17

# Set the working directory
WORKDIR /app

# Copy the jar file to the working directory
COPY target/*.jar app.jar

# Run the jar file
CMD ["java", "-jar", "app.jar" ]

# Stage 1: Build with Maven
#FROM maven:3.9.6-openjdk-17 as build
#WORKDIR /app
#COPY pom.xml .
#COPY src ./src
#RUN mvn clean package

# Stage 2: Run with OpenJDK
#FROM openjdk:17
#COPY --from=build /app/target/*.jar app.jar
#ENTRYPOINT ["java","-jar","/app.jar"]