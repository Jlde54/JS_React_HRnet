import {Link} from 'react-router-dom'
import styles from '../styles/Error.module.scss'

/**
 * Error Component - Displays the errorpage
 *
 * @component
 * @returns {JSX.Element} - rendered Error component
 */

function Error() {

    return (
        <>
            <div className={styles.error}>
                <p className={styles.error__404}>404</p>
                <p className={styles.error__msg}>The requested page doesn't exist</p>
                <nav className={styles.error__nav}>
                    <Link 
                        className={styles.error__link} 
                        to={'/'}
                        >
                        Go back to Home page
                    </Link>
                </nav>
            </div>
        </>
    )
}

export default Error