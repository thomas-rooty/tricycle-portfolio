import styles from '../../styles/Navbar.module.css';
import Image from 'next/image';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.navbar__logo}>
                <Image src='/vercel.svg' alt="logo" width={100} height={100} />
            </div>
            <div className={styles.navbar__links}>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </div>
        </div>
    )
}

export default Navbar;