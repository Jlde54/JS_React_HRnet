import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import CreateEmployee from './pages/CreateEmployee.jsx'
import Error from './pages/Error.jsx'
import './styles/App.module.scss'
import Employees from './components/Employees.jsx'

function App() {

  const ROUTES = {
    CREATEEMPLOYEE: '/',
    EMPLOYEES: '/Employees',
    ERROR: '*'
  }

  return (
    <>
      <Router>
        <Header />
          <Routes>
            <Route path={ROUTES.CREATEEMPLOYEE} element={<CreateEmployee />}/>
            <Route path={ROUTES.EMPLOYEES} element={<Employees />}/>
            <Route path={ROUTES.ERROR} element={<Error />} />
          </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
