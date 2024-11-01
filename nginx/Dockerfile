FROM docker.io/nginx:latest

# Copy your custom Nginx configuration file into the container
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 for HTTP traffic
EXPOSE 80

# Expose port 443 for HTTPS traffic (if you configure SSL later)
EXPOSE 443

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]
