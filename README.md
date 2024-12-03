# AI Writing Assistant

A simple writing assistant that leverages an AI text-generation API to help users improve or rewrite sentences.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- Generate AI-based text responses.
- Explain AI-generated responses.
- Download chat history as a `.txt` file.
- Manage chat history and delete functionalities.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: You need Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).
- **npm or Yarn**: Ensure you have npm or Yarn installed for package management.

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/phlemb93/ai-writing-assistant.git
   cd ai-writing-assistant
   ```

2. **Install Dependencies**

   Using npm:

   ```bash
   npm install
   ```

   Or using Yarn:

   ```bash
   yarn install
   ```

3. **Environment Variables**

   Create a `.env.local` file in the root directory and add your environment variables. For example:

   ```plaintext
   NEXT_PUBLIC_API_KEY=your_api_key_here
   ```

## Usage

1. **Run the Development Server**

   Using npm:

   ```bash
   npm run dev
   ```

   Or using Yarn:

   ```bash
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

2. **Interacting with the Application**

   - Enter text in the input field to generate AI responses.
   - Use the "Rewrite" button to submit your text.
   - View and manage your chat history.
   - Download your chat history as a `.txt` file.

## Deployment

To deploy the application, you can use platforms like Vercel, Netlify, or any other hosting service that supports Next.js applications.

1. **Build the Application**

   Using npm:

   ```bash
   npm run build
   ```

   Or using Yarn:

   ```bash
   yarn build
   ```

2. **Start the Production Server**

   Using npm:

   ```bash
   npm start
   ```

   Or using Yarn:

   ```bash
   yarn start
   ```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/YourFeature`).
6. Open a pull request.

