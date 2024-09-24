import styles from "../css_modules/FiniteDifferenceOperator.module.css";
import Image from "next/image";

export default function FiniteDifferenceOperator() {
  return (
    <div className={styles.wrapper} id="finite-difference-operator">
      <h2 className={styles.title}>1.1 Finite Difference Operator</h2>
      <p className={styles.text}>
        We need to use the the following finite difference in the x, y
        directions:
      </p>
      <Image
        className={styles.formula}
        src="/images/finite_difference.png"
        width={500}
        height={500}
        alt="finie difference formula"
      />
      <p className={styles.text}>On the following Camera Man Image:</p>
      <Image
        src="/images/cameraman.png"
        width={500}
        height={500}
        alt="Cameraman Picture"
        className={styles.CameraMan}
      />
      <p className={styles.text}>
        Which what we are doing here is basically taking the partial derivative
        in x and y of the image by convolving the Camera man image here with the
        finite difference operators above. And we can use the convolv2d from
        scipy.signal library to achieve this. And we will now get a gradient
        mafnitude image. We can then turn the the image into an edge image by
        binarizing the gradient image. We need to try multiple times for this to
        get the threshold. Here is my process:
      </p>
      <div className={styles.imageWrapper}>
        <div>
          <p className={styles.imageText}>X Derivative: </p>
          <Image
            src="/images/CameraMan x derivative.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.CameraMan}
          />
        </div>
        <div>
          <p className={styles.imageText}>Y Derivative: </p>
          <Image
            src="/images/CameraMan y derivative.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.CameraMan}
          />
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <div>
          <p className={styles.imageText}>Gradient Magnitude: </p>
          <Image
            src="/images/CameraMan gradient magnitude.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.CameraMan}
          />
        </div>
        <div>
          <p className={styles.imageText}>Edge Image (threshold: 0.34): </p>
          <Image
            src="/images/CameraMan edge image.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.CameraMan}
          />
        </div>
      </div>
      <p className={styles.sectionTitle}>
        Summary and Notes (Asnswers to Questions):
      </p>
      <div className={styles.summary}>
        <ul className={styles.text}>
          <li>
            When we want to calculate the gradient magnitude, the only thing we
            need to do is to square every elements in x derivative and y
            derivative, add them (two 2D matrix) together, and take the square
            root. Which is similar like how you take the magnitude of a vector.
          </li>
          <li>
            You may need multiple tries to get the threshold for binarize. The
            general idea is that if a certain pixel value is greater than the
            threshold , then set it as the color white (1.0 or 255).
          </li>
          <li>
            There may be some negative pixel value after the convolution, so we
            need to deal with that. I simply just set it to color black (0) if
            it is negative.
          </li>
          <li>
            There is a liitle border in the original Cameraman image, so we can
            crop it to avoid the result getting influenced by the border
          </li>
        </ul>
      </div>
    </div>
  );
}
