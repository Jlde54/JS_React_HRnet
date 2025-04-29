import { Link, useLocation } from 'react-router-dom'
import styles from '../styles/Header.module.scss'

function Header () {
  const location = useLocation()
  const isOnCreateEmployee = location.pathname === '/'
  const isOnEmployeeList = location.pathname === '/Employees'
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <h1 className={styles.header__logo}>HRnet</h1>
        <nav className={styles.header__nav}>
          {isOnEmployeeList && (
            <Link to='/' className={styles.header__link}>Home</Link>
          )}
          {isOnCreateEmployee && (
            <Link to='/Employees' className={styles.header__link}>View current employees</Link>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Header