# HRnet - React Application

HRnet is an employee management application previouly built with jQuery and rebuilt with **React**, **Redux Toolkit**, and **Vite**.  
It allows creating and viewing employee records within a company.

# Previous application in jQuery

Repository : https://github.com/OpenClassrooms-Student-Center/P12_Front-end

Issues : https://github.com/OpenClassrooms-Student-Center/P12_Front-end/issues

# Converted application in React

Repository : https://github.com/Jlde54/JS_React_HRnet

GitHub pages : https://jlde54.github.io/JS_React_HRnet/

Plug-in react-datalist : https://github.com/Jlde54/react-datalist

# Features

- Employee creation form
- Current employees list with filtering, sorting, and pagination
- Local data persistence using `localStorage`
- Navigation via React Router
- Use of third-party components (`react-modal`, `react-select`, `react-multi-date-picker`, `react-datalist-jld`)

# Structure

src/  
├── components/ => UI components (Header, Footer, Employees)  
├── data/ => Static data (States, Departments)  
├── pages/ => Main pages (CreateEmployee, Error)  
├── performance-reports/ => Lighthouse reports (jQuery, react)  
├── redux/ => Redux slice & store (employeeSlice, store)  
├── styles/ => SCSS files  
├── App.jsx => Routing setup  
├── main.jsx => React entry point  
index.html => Main HTML file  

# Installation

1. Install NodeJS : [NodeJS](https://nodejs.org/en/download)

2. Clone the repository :  
    git clone https://github.com/Jlde54/JS_React_HRnet  
    cd JS_React_HRnet

3. Install dependencies :
    npm install

4. Run the app :
    npm run dev

5. Open http://localhost:5173 in your browser.

# Dependencies

- React
- Redux Toolkit
- React Router
- Sass
- react-select
- react-modal
- react-multi-date-picker
- react-datalist-jld

# Build

npm run build

# Performance: Lighthouse analysis

- The repository "performance-reports" contains the Lighthouse pdf reports allowing to compare the performance of each page in the old and the new applications.  

- It also contains the .json files showing the visuals of the performance status.  
Open the .json files with : https://googlechrome.github.io/lighthouse/viewer/ and select the file.  

- The page creating new employee has a performance of 90% with jQuery against 98% with React.  

- The page listing the employees has a performance of 98% with jQuery against 98% with React.

# License

MIT Open Source
