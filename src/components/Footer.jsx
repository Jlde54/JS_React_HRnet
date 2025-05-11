import styles from '../styles/Footer.module.scss'

/**
 * Component displaying the footer.
 *
 * @component
 * @returns {JSX.Element}
 */
function Footer () {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer__text}>© 2025 HRnet. All rights reserved.</p>
    </footer>
  )
}

export default Footer