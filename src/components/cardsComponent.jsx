import styles from "../styles/CardsComponent.module.css"

export default function CardsComponent() {
  return (
    <section className={styles.inspiration}>
      <h2>Para inspirar</h2>
      <div className={styles.inspirationCards}>
        <div className={styles.card}>
          <p>
            "The tragedy in life doesn’t lie in not reaching your goal. The
            tragedy lies in having no goal to reach."
          </p>
          <p>
            <strong>Benjamin E. Mays</strong>, American civil rights leader
          </p>
        </div>
        <div className={styles.card}>
          <p>"Until we can manage time, we can manage nothing else."</p>
          <p>
            <strong>Peter Drucker</strong>, management consultant
          </p>
        </div>
      </div>
    </section>
  );
}
