import styles from './projects.module.css'
import Image from 'next/image'
import Link from 'next/link'

import InnerSight from '../../../public/InnerSight Thumbnail 1.png'
import GoremetCuisines from '../../../public/Goremet Cuisines Tumbnail 1.png'
import Plantifull from '../../../public/Plantiful Recipes Thumbnail 1.png'
import AphroditeTrials from '../../../public/Ahprodite trials tumbnail.png'

export default function Projects() {
    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Projects Done By Me</h1>
            <p className={styles.subtext}>Below are some recent projects I've collaborted in to create a great blend of graphic and UX/UI Case studies.</p>

            <div className={styles.cardContainer}>
                <div className={styles.cardRow}>
                    <div className={styles.card}>
                        <Image src={InnerSight} width={300} height={200} alt='innersight'/>
                        <h2>Innersight</h2>
                        <p>UX/UI Design</p>
                        <div className={styles.buttonFunction}>
                        <button className={styles.button}>
                            <span>
                                <Link href="https://www.laurynkung.ca/innersight-case-study" className={styles.viewProjects}>View Project</Link>
                            </span>
                        </button>
                    </div>
                    </div>

                    <div className={styles.card}>
                        <Image src={GoremetCuisines} width={300} height={200} alt='goremet-cuisines'/>
                        <h2>Goremet Cuisines</h2>
                        <p>UX/UI Design</p>
                        <div className={styles.buttonFunction}>
                            <button className={styles.button}>
                                <span>
                                    <Link href="https://www.laurynkung.ca/goremet-cuisines" className={styles.viewProjects}>View Project</Link>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={styles.cardRow}>
                    <div className={styles.card}>
                        <Image src={Plantifull} width={300} height={200} alt='plantifull-recipes'/>
                        <h2>Plantifull Recipes</h2>
                        <p>UX/UI Design</p>
                        <div className={styles.buttonFunction}>
                        <button className={styles.button}>
                            <span>
                                <Link href="https://www.laurynkung.ca/plantifull-recipes" className={styles.viewProjects}>View Project</Link>
                            </span>
                        </button>
                    </div>
                    </div>

                    <div className={styles.card}>
                        <Image src={AphroditeTrials} width={300} height={200} alt='aphrodite-trials'/>
                        <h2>Aphrodite Trials</h2>
                        <p>UX/UI Design</p>
                        <div className={styles.buttonFunction}>
                            <button className={styles.button}>
                                <span>
                                    <Link href="https://www.laurynkung.ca/Aphrodite-trials" className={styles.viewProjects}>View Project</Link>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                
               
            </div>
         
        </div>
    )
}