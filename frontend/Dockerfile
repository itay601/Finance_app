# Use the official Node.js 18 image as a base image
FROM node:current-alpine3.18 as build

# Set the working directory in the container
WORKDIR /frontend

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project directory to the working directory
COPY . .

# Expose port 3000 for the development server
EXPOSE 3000

# Command to start the development server
CMD ["npm", "start"]