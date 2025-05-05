# HRnet - React Application

HRnet is an employee management application built with **React**, **Redux Toolkit**, and **Vite**. 
It allows creating and viewing employee records within a company.

# Features

- Employee creation form
- Current employees list with filtering, sorting, and pagination
- Local data persistence using `localStorage`
- Navigation via React Router
- Use of third-party components (`react-modal`, `react-select`, `react-multi-date-picker`, `react-datalist-jld`)

# Structure

src/
├── components/ => UI components (Header, Footer, Employees)
├── pages/ => Main pages (CreateEmployee, Error)
├── redux/ => Redux slice & store
├── styles/ => SCSS files
├── data/ => Static data (States, Departments)
├── App.jsx => Routing setup
├── main.jsx => React entry point
public/
index.html => Main HTML file

# Installation

1. Clone the repository:
    git clone https://github.com/your-repo/hrnet.git
    cd hrnet

2. Install dependencies:
    npm install

3. Run the app:
    npm run dev

4. Open http://localhost:5173 in your browser.

# Dependencies

React
Redux Toolkit
React Router
react-select
react-multi-date-picker
react-datalist-jld

# Build

npm run build

# License

MIT Open Source
