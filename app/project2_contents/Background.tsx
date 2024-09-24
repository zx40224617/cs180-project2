import styles from "../css_modules/Background.module.css";

export default function Home() {
  return (
    <div className={styles.wrapper} id="background">
      <h1 className={styles.projectTitle}>
        Welcome to My CS180 Project 2 Portfolio!
      </h1>
      <h2 className={styles.title}>Background of the project:</h2>
      <p className={styles.introduction}>
        This projec is mainly about how can we do with different Filter and
        Frequencies include blurring, sharpening, creating hybrid image, and
        blending. This will require the students to understand how to deal with
        the high and low frequencies of the images and also how we can
        intergrate these different frequencies into the images we want.
      </p>
    </div>
  );
}
