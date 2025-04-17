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
            <Header />
            <div className={styles.error}>
                <p className={styles.error__404}>404</p>
                <p className={styles.error__msg}>La page que vous demandez n&apos;existe pas</p>
                <nav className={styles.error__nav}>
                    <Link 
                        className={styles.error__link} 
                        to={'/'}
                        >
                        Retourner sur la page d&apos;accueil
                    </Link>
                </nav>
            </div>
        </>
    )
}

export default Error