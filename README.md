# Movie Page React App

A single-page movie application built with **React** and **Vite**.  
The app allows users to browse movies, manage favorites, and interact with a clean, responsive UI.

## Features
- Display movies in a responsive grid layout
- Add and remove movies from favorites
- Global state management using React Context
- Reusable and modular React components
- Clean UI with custom CSS styling

## Technologies Used
- React
- Vite
- JavaScript (ES6+)
- CSS
- Context API

## Project Structure
src/
├─ components/ # Reusable UI components
├─ pages/ # Application pages (Home, Favorites)
├─ contexts/ # Global state (MovieContext)
├─ services/ # API logic
├─ css/ # Styling
└─ main.jsx # App entry point

## Installation & Setup
1. Clone the repository:
git clone https://github.com/monikacaneva/movie-page-react.git

2.Navigate to the project folder:
cd movie-page-react

3.Install dependencies:
npm install

4.Start the development server:
npm run dev

##Purpose

This project was created as a practical React exercise to improve skills in:
- component-based architecture
- state management
- UI layout with CSS Grid
- working with modern frontend tooling

# React + Vite 
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules. Currently, two official plugins are available: - [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh - [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh 
## React Compiler 
The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation). 
## Expanding the ESLint configuration 
If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [typescript-eslint](https://typescript-eslint.io)
