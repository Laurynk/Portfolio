import styles from './header.module.css'

import Image from 'next/image'
import Link from 'next/link'
import Arrow from '../../../public/Arrow.svg'
import Portrait from '../../../public/self-image.webp'

export default function Header() {

    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.callToAction}>
                    <h1 className={styles.tagline}>Hello, I'm a UX/UI & Graphic Designer</h1>
                    <h3 className={styles.subTag}>Passionate about making innovative and captivating design</h3>
                    <div className={styles.buttonFunction}>
                        <button className={styles.button}>
                            <span>
                                <Link href="https://www.laurynkung.ca/" className={styles.getStarted}>Get Started</Link>
                            </span>
                        </button>
                        <div className={styles.sideNote}>
                            <p>View my stuff here!</p>
                            <Image src={Arrow} width={40} height={40} alt='arrow' />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.image}>
                <Image src={Portrait} width={500} height={650} alt='portrait'/>
            </div>
        </div>
    )
}