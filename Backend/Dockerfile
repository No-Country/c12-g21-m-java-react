#
# Build stage
#
#FROM maven:4-openjdk-17 AS build
#COPY . .
#RUN mvn clean package -DskipTests

#
# Package stage
#
FROM adoptopenjdk:17-jdk-alpine
COPY --from=build  /target/ecommerce-1.0.0.jar demo.jar
# ENV PORT=8080
EXPOSE 8080
ENTRYPOINT ["java","-jar","demo.jar"]

