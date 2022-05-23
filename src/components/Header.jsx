import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <span>
          <span>Let's</span>
          Dolt
        </span>
        <div className={styles.profile}>
          <img
            src="https://avatars.githubusercontent.com/u/94586269?s=400&v=4"
            alt="Pedro Pacheco - Imagem de Perfil"
          />
          <div>
            <p className={styles.profile}>Pedro Pacheco</p>
            <p className={styles.welcomeMessage}>Bem-vindo(a) ao Let'sDoIt</p>
          </div>
        </div>
      </nav>
    </header>
  );
}
