# AI Chat App

This is a simple AI chat application developed for the African Girls Can Code Bootcamp in Zimbabwe, an initiative by UN Women. The app allows users to chat with an AI assistant.

## Table of Contents
- [AI Chat App](#ai-chat-app)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Folder Structure](#folder-structure)
  - [Setup and Installation](#setup-and-installation)
    - [Prerequisites](#prerequisites)
    - [Installation Steps](#installation-steps)
  - [Getting an API Key](#getting-an-api-key)
  - [Configuring the .env File](#configuring-the-env-file)
  - [Running the Project](#running-the-project)

## Features
- Real-time chat with an AI assistant
- User and assistant messages displayed with different styles
- Timestamp for assistant messages

## Technologies Used
- Node.js
- Express.js
- Handlebars.js
- OpenAI API
- SQLite3
- Tailwind CSS

## Folder Structure

The project has the following structure:

```
├── app.js
├── package.json
├── .env
├── views
│   ├── layouts
│   │   └── main.hbs
│   └── index.hbs
└── README.md
```

## Setup and Installation

Follow these steps to set up and run the project locally.

### Prerequisites

- Node.js and npm installed on your machine.
- Internet connection to access the Groq API.

### Installation Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/mikeyny/agcc-ai-chat-app
   cd agcc-ai-chat-app
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

## Getting an API Key

To use this application, you need to obtain an API key from Groq.

1. **Sign Up for Groq**

   Go to [https://groq.com/](https://groq.com/) and sign up for an account.

2. **Obtain the API Key**

   Once signed in, navigate to [https://console.groq.com/keys](https://console.groq.com/keys) to obtain your API key.

## Configuring the .env File

Create a `.env` file in the root directory of the project and add the following content:

```
API_KEY="your_groq_api_key_here"
SYSTEM_PROMPT="You are a helpful assistant meant to help African girls with their coding problems."
```

- Replace `"your_groq_api_key_here"` with the API key you obtained from Groq.
- The `SYSTEM_PROMPT` variable defines the personality of the AI assistant. You can change it to make the chatbot behave differently.

## Running the Project

Start the application by running:

```bash
npm start
```

The server will start on `http://localhost:3000`. Open this URL in your browser to interact with the AI chat application.




