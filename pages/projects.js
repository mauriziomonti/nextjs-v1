import styles from '../styles/Home.module.css'
import Image from 'next/image'

const Projects = () => {
    return (
        <>
        <div>
            Projects page.
        </div>
        <div className={styles.grid}>
          <a href="https://digitalvagor.com/" className={styles.card}>
            <h2>digitalvagor.com &rarr;</h2>
            <p>One page HTML and CSS site, my very first.</p>
            <Image src="/digitalvagor.svg" alt="" width={72} height={16} />
          </a>
          </div>
        </>
    );
}

export default Projects;