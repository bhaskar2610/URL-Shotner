# Use the official Node.js image as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm ci

# Copy the rest of the project files to the working directory
COPY . .

# Expose a port (if your Node.js app listens on a specific port)
EXPOSE 8000

# Start the Node.js application
CMD ["npm", "start"]