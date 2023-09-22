import styles from "./Home.module.css";

function Home({ children }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.container}>{children}</div>;
    </div>
  );
}

export default Home;
