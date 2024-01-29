import Sidebar from "@/components/SideBar";
import styles from "./page.module.css";
import FilterComponent from "@/components/FilterComponent";
import InfoBoxes from "@/components/InfoBoxes";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.main__left}>
        <Sidebar />
      </div>
      <div className={styles.main__right}>
        <span className={styles.product_name}>Teachmate Task Manager</span>
        <span className={styles.created__at_text}>
          Created On: June 14, 2022
        </span>

        <div className={styles.pages__infoboxes}>
          <InfoBoxes />
        </div>

        <div className={styles.filter__container}>
          <FilterComponent />
        </div>

        <div className={styles.tasks}>
          <span>Tasks</span>

          <div className={styles.tasks__container}></div>
        </div>
      </div>
    </main>
  );
}
