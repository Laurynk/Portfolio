import styles from './navbar.module.css'
import Image from 'next/image'

import Logo from '../../../public/logo.svg'

export default function Navbar() {
    return (
        <div className={styles.container}>
            <div className={styles.navbar}>
                <Image src={Logo} width={75} height={75} alt='logo'/>
                <h1 className={styles.name}>Lauryn Kung</h1>
            </div>
        </div>
    )
}