import styles from "../css_modules/ImageSharpening.module.css";
import Image from "next/image";

export default function ImageSharpening() {
  return (
    <div className={styles.wrapper} id="sharpening">
      <h2 className={styles.title}>2.1 Image Sharpening</h2>
      <p className={styles.text}>
        The edge image that we got from the previous part was not good enough!
        What we can can do is first vlur the image by convolving with a Gaussian
        filter, and simply repeat what we did in the last part. We can use the
        getGaussianKernel() method from the cv2 library to create a 1D Gaussian.
        And we can use np.outer() with its own to get a 2D Gaussian Filter. Here
        is my blurred image of the camera man:
      </p>
    </div>
  );
}
