# Use an official Node.js runtime as a parent image
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Install TypeScript globally to compile your code
RUN npm install -g typescript

# Build the TypeScript code
RUN tsc

# Expose the port that your app runs on
EXPOSE 5000

# Command to start the application
CMD ["npm", "run", "dev"]