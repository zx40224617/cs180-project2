import styles from "./css_modules/page.module.css";
import Background from "./project2_contents/Background";
import Sidebar from "./accessories/Sidebar";
import FiniteDifferenceOperator from "./project2_contents/FiniteDifferenceOperator";
import Separator from "./accessories/separator";
import DOGFilter from "./project2_contents/DOGFilter";
import ImageSharpening from "./project2_contents/ImageSharpening";
import HybridImage from "./project2_contents/HybridImage";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Background />
        <Separator color={"grey"} />
        <FiniteDifferenceOperator />
        <Separator color={"grey"} />
        <DOGFilter />
        <Separator color={"grey"} />
        <ImageSharpening />
        <Separator color={"grey"} />
        <HybridImage />
      </div>
    </div>
  );
}
