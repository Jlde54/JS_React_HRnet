# HRnet - React Application

HRnet is an employee management application previouly built with jQuery and rebuilt with **React**, **Redux Toolkit**, and **Vite**.  
It allows creating and viewing employee records within a company.

# Previous application in jQuery

Repository: https://github.com/OpenClassrooms-Student-Center/P12_Front-end

Issues: https://github.com/OpenClassrooms-Student-Center/P12_Front-end/issues

# Converted application in React

Repository: https://github.com/Jlde54/JS_React_HRnet

Plug-in react-datalist: https://github.com/Jlde54/react-datalist

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
├── redux/ => Redux slice & store (employeeSlice, store)  
├── styles/ => SCSS files  
├── data/ => Static data (States, Departments)  
├── App.jsx => Routing setup  
├── main.jsx => React entry point  
public/  
index.html => Main HTML file  

# Installation

1. Install NodeJS : [NodeJS](https://nodejs.org/en/download)

2. Clone the repository:
    git clone https://github.com/Jlde54/JS_React_HRnet  
    cd JS_React_HRnet

3. Install dependencies:
    npm install

4. Run the app:
    npm run dev

5. Open http://localhost:5173 in your browser.

# Dependencies

- React
- Redux Toolkit
- React Router
- Sass
- react-select
- react-multi-date-picker
- react-datalist-jld

# Build

npm run build

# Performance: lighthouse analysis

createEmployee jQuery: 

# License

MIT Open Source
