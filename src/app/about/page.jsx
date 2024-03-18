import styles from "./about.module.css";

export const metadata = {
  title: "ABC || About",
  description: "This is about page",
};

const AboutPage = () => {
  return (
    <div className={styles.heading}>
      <h2>This is about page</h2>
    </div>
  );
};

export default AboutPage;
