import styles from "./styles/sideBar.module.css";

const Sidebar = () => {
  return (
    <nav className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <img src="/assets/Tech-logo.png" alt="Logo" />
      </div>
      <ul className={styles.navLinks}>
        <li>
          <img src="/assets/Home.png" alt="Home" />
        </li>
        <li>
          <img src="/assets/Messages.png" alt="Messages" />
        </li>
        <li>
          <img src="/assets/Bookmark.png" alt="Bookmark" />
        </li>
        <li>
          <img src="/assets/Meeting.png" alt="Meeting" />
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
