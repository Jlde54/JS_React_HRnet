import { Link, useLocation } from 'react-router-dom'
import styles from '../styles/Header.module.scss'
import logo from '../assets/WealthHealth.png'

/**
 * Component displaying the header.
 *
 * @component
 * @returns {JSX.Element}
 */
function Header () {

  const location = useLocation()
  const isOnCreateEmployee = location.pathname === '/'
  const isOnEmployeeList = location.pathname === '/Employees'

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <img src={logo} alt="HRNet Logo" className={styles.header__logo} />
        <h1 className={styles.header__title}>HRnet</h1>
        <nav className={styles.header__nav}>
          {isOnEmployeeList && (
            <Link to='/' className={styles.header__link}>Home</Link>
          )}
          {isOnCreateEmployee && (
            <Link to='/Employees' className={styles.header__link}>Current employees</Link>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Header