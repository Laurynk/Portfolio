import styles from './services.module.css'

export default function Services() {
    return (
        <div className={styles.container}>
            <hr></hr>
            <div className={styles.list}>
                <p>UX/UI Design</p>
                <div className={styles.vl}></div>
                <p>Graphic Design</p>
                <div className={styles.vl}></div>
                <p>Product Design</p>
                <div className={styles.vl}></div>
                <p>Motion Graphics</p>
            </div>
            <hr></hr>
        </div>
    )
}