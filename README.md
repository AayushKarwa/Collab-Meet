

# Collab Meet

Collab Meet is a Google Meet clone built with modern web technologies, providing seamless video conferencing capabilities with user authentication. This app uses **Node.js** and **Next.js** for a robust and scalable backend and frontend, **NextAuth** for secure authentication, and the **ZEGOCLOUD API** for real-time video and audio communication.

## Table of Contents
- [Features](#features)
- [Demo](#demo)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Tech Stack](#tech-stack)
- [License](#license)

## Features
- **User Authentication**: Secure sign-in with GitHub and Google using NextAuth.
- **Video Conferencing**: High-quality, real-time video and audio with ZEGOCLOUD API.
- **User Management**: Track and manage meeting participants.
- **Responsive UI**: Clean and intuitive interface optimized for desktop and mobile.
- **Dark Mode**: Default dark mode for comfortable usage.
- **Real-time Chat**: In-meeting chat support for enhanced collaboration.

## Demo
You can access the live demo of Collab Meet here: [https://collab-meet-kxj4ohbiq-ayush737565s-projects.vercel.app]()

## Getting Started

### Prerequisites
- **Node.js** (v16 or higher)
- **MongoDB** (for user management if required)
- **GitHub** and **Google OAuth Apps** (for NextAuth authentication)
- **ZEGOCLOUD API Key and Secret** (for video conferencing)

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/AayushKarwa/collab-meet.git
   cd collab-meet
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set up Environment Variables**:

   Create a `.env.local` file in the root directory and configure the following environment variables:

   ```plaintext
   NEXTAUTH_SECRET=<Your NextAuth Secret>
   GITHUB_ID=<Your GitHub Client ID>
   GITHUB_SECRET=<Your GitHub Client Secret>
   GOOGLE_CLIENT_ID=<Your Google Client ID>
   GOOGLE_CLIENT_SECRET=<Your Google Client Secret>
   ZEGOCLOUD_APP_ID=<Your ZEGOCLOUD App ID>
   ZEGOCLOUD_SERVER_SECRET=<Your ZEGOCLOUD Server Secret>
   ```

4. **Run the Development Server**:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Configuration

To use authentication with GitHub and Google, you will need to register your application on their developer platforms. Here’s a quick guide:

1. **GitHub OAuth App**:
   - Go to [GitHub Developer Settings](https://github.com/settings/developers).
   - Create a new OAuth App and add your development URI (e.g., `http://localhost:3000`).
   - Copy the `Client ID` and `Client Secret` into your `.env.local`.

2. **Google OAuth App**:
   - Go to [Google Cloud Console](https://console.cloud.google.com/).
   - Create a new project and set up OAuth credentials for a Web Application.
   - Copy the `Client ID` and `Client Secret` into your `.env.local`.

3. **ZEGOCLOUD API**:
   - Register on [ZEGOCLOUD](https://www.zegocloud.com/) and create a project.
   - Copy your `App ID` and `Server Secret` into your `.env.local`.

## Tech Stack
- **Frontend**: [Next.js](https://nextjs.org/)
- **Backend**: [Node.js](https://nodejs.org/), [NextAuth](https://next-auth.js.org/)
- **Database**: [MongoDB](https://www.mongodb.com/) (if using a database)
- **Video Conferencing**: [ZEGOCLOUD API](https://www.zegocloud.com/)
- **Styling**: Tailwind CSS (optional)

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

