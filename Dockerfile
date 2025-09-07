# Stage 1: Build the Angular application
# Use a specific Node.js version as defined in your package.json
FROM node:22-alpine as builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the application for production
# This will create the 'dist' folder
RUN npm run build


# Stage 2: Create the production image
# Use a lightweight Node.js image for the final image
FROM node:22-alpine

WORKDIR /app

# Copy the build output from the builder stage
# and the necessary package files to install production dependencies.
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./

# Install only production dependencies to keep the image small
RUN npm install --omit=dev

# Expose the port the app will run on
EXPOSE 4000

# Command to run the server
CMD ["node", "dist/rohan/server/server.mjs"]
