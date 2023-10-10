# Use an official Node runtime as the parent image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install the app dependencies
RUN npm install

# Copy the content of the local src directory to the working directory
COPY . .

# Build the Next.js app
RUN npm run build

# Specify the command to run on container start
CMD ["npm", "run", "dev"]
