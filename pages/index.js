import Navbar from '../components/Navbar';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h1>Bienvenue sur mon portfolio</h1>
        <Image src="/images/profile.jpg" alt="Profile Picture" width={150} height={150} />
      </div>
    </div>
  );
}
