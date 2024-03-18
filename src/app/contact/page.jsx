import styles from "./Contact.module.css";

export const metadata = {
  title: "ABC || Contact",
  description: "This is contact page",
};

const ContactPage = () => {
  return (
    <div className={styles.heading}>
      <h2>This is ContactPage</h2>
    </div>
  );
};

export default ContactPage;
