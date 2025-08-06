docker run -it --rm \
  -v $(pwd):/app \
  -p 4000:4000 \
  ruby:latest bash -c "cd /app && ./in_docker.sh"