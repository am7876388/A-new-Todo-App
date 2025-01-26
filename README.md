# To-Do List Application

## Overview
This is a simple To-Do List application built using React and Vite. The application allows users to:
- Add new tasks.
- Delete tasks.
- Mark tasks as completed.
- Edit existing tasks.

## Features
- **Functional Components**: The app uses functional components for simplicity and reusability.
- **State and Props Management**: State is used to manage the list of tasks, and props are utilized to pass data between components.
- **Dynamic Rendering**: The tasks are dynamically rendered using the `map` function, ensuring each task has a unique key.
- **Event Handling**: Events are implemented for adding, editing, completing, and deleting tasks.
- **Styling**: The app is styled using Tailwind CSS for a modern and responsive design.

## Components
1. **App**: The main component managing the overall state.
2. **Header**: Displays the title of the application.
3. **ToDoList**: Renders the list of tasks dynamically.
4. **ToDoItem**: Represents each individual task.

## GitHub Repository
[https://github.com/am7876388/A-new-Todo-App](#)

## How to Run the Application
Follow the steps below to set up and run the application:

### Prerequisites
Make sure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (version 14 or above)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) (package manager)

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-link>
   cd <repository-folder>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
   Or if you're using Yarn:
   ```bash
   yarn
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   Or with Yarn:
   ```bash
   yarn dev
   ```
4. Open your browser and go to:
   ```
   http://localhost:5173
   ```

### Build for Production
To create a production build:
```bash
npm run build
```
Or with Yarn:
```bash
yarn build
```

The production build will be available in the `dist` folder.

### Preview the Production Build
To preview the production build locally:
```bash
npm run preview
```
Or with Yarn:
```bash
yarn preview
```

## License
This project is open-source and available under the MIT License.

