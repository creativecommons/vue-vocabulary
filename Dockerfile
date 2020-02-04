# Build on top of a Node.js + npm image.
FROM node:lts

# Make a codebase directory and work in it
RUN mkdir codebase
WORKDIR /codebase

# Load the package.json and package-lock.json files
COPY package.json ./
COPY package-lock.json ./

# Install packages
RUN npm install

# Expose ports for conatiner to listen on
# 8080 - Website
# 6006 - Storybook
# 6060 - Styleguide
EXPOSE 8080 6006 6060