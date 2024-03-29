import styles from './foote.module.css'
import Image from 'next/image'

import Logo from '../../../public/logo.svg'
import email from '../../../public/mail icon.svg'
import phone from '../../../public/phone-svgrepo-com 1.svg'
import linkedin from '../../../public/linkedin-round-svgrepo-com 1.svg'

export default function Footer() {
    return (
        <div className={styles.container}>
            <Image src={Logo} className={styles.logo} width={80} height={80} alt='logo'/>

            <div className={styles.contacts}>
                <h2 className={styles.header}>Interested in collabing?</h2>
                <h4>Get in touch with me through here!</h4>
                <div className={styles.links}>
                    <div className={styles.contactLink}>
                        <Image src={email} width={20} height={20} alt='email'/>
                        <p>laurynakung@gmail.com</p>
                    </div>
                    <div className={styles.contactLink}>
                        <Image src={phone} width={20} height={20} alt='phone'/>
                        <p>604-710-4012</p>
                    </div>
                    <div className={styles.contactLink}>
                        <Image src={linkedin} width={20} height={20} alt='linkedin'/>
                        <p>Lauryn Kung</p>
                    </div>
                </div>
            </div>
        </div>
    )
}