---
title: TimeLine A Simple Memory Timeline App
description: A simple timeline of your memories.
slug: timeline
date: 2024-10-20
tags: [Angular, Firebase, Firestore, Storage, Authentication, Cloudflare Pages]
layout: project
author: Amrohan
image: https://res.cloudinary.com/amrohan/image/upload/w_800,h_600,c_limit/xmyinhmej4ttgeajptvg.png
---

Welcome to **TimeLine**, a delightful web application where you can document your personal memories in a visually appealing timeline. Whether it's milestones, special moments, or just fun events, TimeLine helps you capture, organize, and relive these moments. With easy-to-use features and a clean design, this project brings together **images**, **titles**, **descriptions**, and **dates** in a beautifully arranged chronological order.

## Demo

You can see the app in action by visiting the live demo below:

[**TimeLine Demo**](https://vangu.pages.dev)

## Key Features

- **User Authentication**: Secure sign-in with Firebase Authentication.
- **Firestore Database**: Efficiently store and retrieve your event data.
- **Firebase Storage**: Upload and store images associated with each event.
- **Simple Event Management**: Add, update, and delete events with ease.
- **Responsive UI**: Built with Angular and Tailwind CSS for a smooth, modern user experience.

## Screenshots

Here are some screenshots of the app to give you an idea of the user interface:

| Page              | Screenshot                                                                                      |
| ----------------- | ----------------------------------------------------------------------------------------------- |
| Login Page        | ![Login Page](https://raw.githubusercontent.com/amrohan/timeline/main/static/image1.png)        |
| Empty Page        | ![Empty Page](https://raw.githubusercontent.com/amrohan/timeline/main/static/image2.png)        |
| Add Event Page    | ![Add Event Page](https://raw.githubusercontent.com/amrohan/timeline/main/static/image3.png)    |
| Update Event Page | ![Update Event Page](https://raw.githubusercontent.com/amrohan/timeline/main/static/image4.png) |
| Full-Screen Image | ![Full Screen Image](https://raw.githubusercontent.com/amrohan/timeline/main/static/image5.png) |
| Home Page         | ![Home Page](https://raw.githubusercontent.com/amrohan/timeline/main/static/image6.png)         |

## Technology Stack

This project is built with modern, widely-used technologies:

- **Angular 17**: A popular framework for building single-page applications (SPAs) with rich user interfaces.
- **Tailwind CSS**: A utility-first CSS framework that enables rapid UI development with a focus on responsiveness.
- **Firebase**: A Backend-as-a-Service (BaaS) platform providing Authentication, Firestore (NoSQL database), and Firebase Storage.
- **@angular/fire**: The official Angular library for Firebase integration.
- **Cloudflare Pages**: A platform for deploying static sites and web applications with ease.

## Installation Guide

To run the **TimeLine** app locally, follow these steps:

### Step 1: Clone the Repository

Clone the project repository using Git:

```bash
git clone https://github.com/amrohan/timeline.git
```

### Step 2: Install Dependencies

Navigate to the project directory and install the required dependencies:

```bash
cd timeline
npm install
```

### Step 3: Set Up Firebase

1. **Create a Firebase Project**: If you don’t already have one, create a Firebase project [here](https://console.firebase.google.com/).
2. **Enable Firebase Services**: Enable Firestore, Firebase Storage, and Firebase Authentication in the Firebase console.
3. **Create a Web App**: Once your Firebase project is set up, create a web app and copy the configuration details provided.

### Step 4: Configure Firebase in Your Project

Open `src/environments/environment.ts` and add the Firebase configuration details:

```typescript
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
  },
};
```

### Step 5: Set Up Environment Variables

Create a `.env` file at the root of your project directory and paste the Firebase configuration like so:

```bash
touch .env
```

Add the following to the `.env` file:

```bash
FIREBASE_API_KEY=YOUR_API_KEY
FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
FIREBASE_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID
FIREBASE_APP_ID=YOUR_APP_ID
```

### Step 6: Update Firebase Rules

To ensure that only authenticated users can access your data, set the following rules for Firestore and Firebase Storage:

#### Firestore Rules

```text
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

#### Firebase Storage Rules

```text
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

### Step 7: Enable Authentication

Go to Firebase Authentication in the Firebase console and enable **Email/Password Authentication**.

### Step 8: Run the Application

Now that everything is set up, run the app locally using Angular's development server:

```bash
ng serve -o
```

This will open the app in your default browser at `http://localhost:4200`.

## How to Use

Once the app is up and running, here’s how to use it:

1. **Sign In**: Log in using your email and password. You can also create a new account if you don’t have one.
2. **Add an Event**: Click the "Add Event" button, fill out the form with the title, description, date, and an image (max 1MB). Then submit to add it to your timeline.
3. **Delete an Event**: If you want to remove an event, simply click on the "Delete" button next to it.
4. **View Events**: All your added events will appear in a chronological order on the home page.
5. **Sign Out**: Click the "Sign Out" button to log out.

## Contributing

Contributions are always welcome! If you'd like to contribute to the project, please follow these steps:

1. **Fork the repository**.
2. **Create a new branch** for your changes.
3. **Make your changes** and commit them.
4. **Create a pull request** to the main repository.

This project is still in active development, so there are plenty of opportunities for enhancement and new features.

## FAQ

Here are some frequently asked questions about the project:

**1. Can I use this project for commercial purposes?**

Yes! You are free to use and modify the project for both personal and commercial purposes.

**2. Can I modify the project to suit my needs?**

Absolutely. The project is open-source and designed to be flexible, so feel free to customize it according to your requirements.

**3. Can I contribute to the project?**

Yes, contributions are welcome! You can fork the repository, make improvements, and submit a pull request.

**4. Can I deploy this project to the cloud?**

Yes, this project is easily deployable to the cloud. It's already deployed on **Cloudflare Pages**, but you can deploy it on any platform such as **Firebase Hosting**, **Netlify**, or **Vercel**.

## License

This project is licensed under the **MIT License**, which means you are free to use, modify, and distribute it according to the terms of the license.

## Author

For questions, feedback, or just to connect, feel free to reach out to the author:

- [Twitter](https://twitter.com/amrohxn)
- [Telegram](https://t.me/amrohan)
- [LinkedIn](https://www.linkedin.com/in/amrohan/)

Thank you for exploring **TimeLine**! Happy documenting your memories!
