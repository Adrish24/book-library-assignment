# 📚 Book Library

A modern React-based book library application that allows users to browse, search, and add their book collection.

## Repository

[GitHub Repository](https://github.com/Adrish24/book-library-assignment)

## 🚀 Features

- Browse and search books
- View detailed book information
- Add new books to the library
- State management with Redux Toolkit
- Dynamic routing with React Router

## 🛠️ Technologies Used

- **Frontend Framework:** React 19
- **State Management:** Redux Toolkit
- **Routing:** React Router DOM
- **Styling:**
  - Tailwind CSS
  - DaisyUI components
- **HTTP Client:** Axios
- **Build Tool:** Vite
- **Others:**
  - React Icons
  - UUID for unique identifiers

## 🔧 Installation

1. Clone the repository:

   ```bash
   git clone [your-repo-url]
   cd book-library
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173`

## 📁 Project Structure

```
src/
├── assets/          # Static assets
├── components/      # Reusable UI components
├── context/         # Redux store and slices
├── layout/         # Layout components
├── pages/          # Route pages
└── utils/          # Utility functions
```

### Key Components

- `BookList.jsx`: Displays the list of books
- `BookItem.jsx`: Individual book card component
- `SearchBar.jsx`: Search functionality
- `Rating.jsx`: Book rating component
- `InputItem.jsx`: Form input components
- `Navbar.jsx`: Navigation header
- `Sidebar.jsx`: Side navigation menu

## 🔨 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🎨 Styling

The project uses Tailwind CSS with DaisyUI for styling, providing:

- Responsive design
- Custom color themes
- Modern UI components
- Consistent styling across components
