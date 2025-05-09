import { BrowserRouter as Routes, Route  } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import CreateEmployee from './pages/CreateEmployee.jsx'
import Error from './pages/Error.jsx'
import './styles/App.module.scss'
import Employees from './components/Employees.jsx'

/**
 * Main application routing using React Router.
 * Includes CreateEmployee, Employees, and Error pages.
 *
 * @component
 * @returns {JSX.Element}
 */
function App() {

  const ROUTES = {
    CREATEEMPLOYEE: '/',
    EMPLOYEES: '/Employees',
    ERROR: '*'
  }

  return (
    <>
        <Header />
          <Routes>
            <Route path={ROUTES.CREATEEMPLOYEE} element={<CreateEmployee />}/>
            <Route path={ROUTES.EMPLOYEES} element={<Employees />}/>
            <Route path={ROUTES.ERROR} element={<Error />} />
          </Routes>
        <Footer />
    </>
  )
}

export default App
