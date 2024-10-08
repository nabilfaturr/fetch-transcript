# YouTube Transcript Fetcher

This project is a Node.js application that fetches and cleans transcripts from YouTube videos using their URLs.

## Features

- Fetch transcripts from YouTube videos
- Clean and format the fetched transcripts

## Technologies Used

- Node.js
- Express.js
- TypeScript
- youtube-transcript (npm package)
- Docker

## Project Structure

The main components of the project are:

- API routes (`api/routes/transcript.route.ts`)
- Controller (`api/controller/transcript.controller.ts`)
- Utility functions (`api/lib/utils.ts`)
- Main application file (`api/index.ts`)

## Setup and Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Build the project:
   ```
   npm run build
   ```
4. Start the server:
   ```
   npm start
   ```

For development, you can use:

```
npm run dev
```

## Docker

    To run the application using Docker, follow these steps:

1. Build the Docker image:
   ```
   docker build -t youtube-transcript-fetcher .
   ```
2. Run the Docker container:
   ```
   docker run -p 3001:3001 youtube-transcript-fetcher
   ```
