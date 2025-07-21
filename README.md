# LSOM

A modern, responsive React app built using Vite, TailwindCSS, and React Router. Designed for modular development, fast builds, and a scalable architecture.

## Project Structure

```
src/
├── assets/             # Static images/icons
├── components/         # Reusable UI components
├── pages/             # Page-level views (Home.jsx)
├── styles/            # Global stylesheets
├── App.jsx            # Root component
├── main.jsx           # App entry point
└── index.css          # Tailwind base styles
public/
├── images/
├── icons/
vite.config.js
tailwind.config.js
README.md
```

## Tech Stack

- ⚛️ React 19
- 🛣️ React Router DOM 7
- 🎨 TailwindCSS 3.4
- ⚡ Vite 7
- 🛠️ ESLint (Code quality)
- 🔍 React Icons

## Setup Instructions

1. **Clone Repository**
   ```bash
   git clone https://github.com/your-username/LSOM-BOPDEV-RUN.git
   cd LSOM-BOPDEV-RUN
   ```
2. **Install Dependencies**
   ```bash
   npm install
   ```
3. **Run Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) to view the project.

## Production Build

```bash
npm run build
```
To preview the production build:

```bash
npm run preview
```

## Key Features

- ⚡ Blazing-fast Vite setup
- 🎨 TailwindCSS for responsive UI
- 🛣️ React Router for navigation
- 📦 Modular, component-based architecture
- 🏁 Sections: Hero, Gallery, Race Schedule, InfoSection
- 🚀 Preloader component for initial loading
- 🌙 Light/Dark mode support (if implemented)
- 🛠️ Easy to extend and customize
