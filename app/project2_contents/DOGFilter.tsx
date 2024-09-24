import styles from "../css_modules/DogFilter.module.css";
import Image from "next/image";

export default function DOGFilter() {
  return (
    <div className={styles.wrapper} id="dog-filter">
      <h2 className={styles.title}>1.2 Derivative of Gaussian (DoG) Filter</h2>
      <p className={styles.text}>
        The edge image that we got from the previous part was not good enough!
        What we can can do is first vlur the image by convolving with a Gaussian
        filter, and simply repeat what we did in the last part. We can use the
        getGaussianKernel() method from the cv2 library to create a 1D Gaussian.
        And we can use np.outer() with its own to get a 2D Gaussian Filter. Here
        is my blurred image of the camera man:
      </p>
      <Image
        src="/images/CameraMan blurred.jpg"
        width={500}
        height={500}
        alt="Cameraman Picture"
        className={styles.CameraMan}
      />
      <p className={styles.text}>
        And now we get the blurred image, we can now repeat the same process
        using the blurred image to get the edge image
      </p>
      <div className={styles.imageWrapper}>
        <div>
          <p className={styles.text}>X Derivative: </p>
          <Image
            src="/images/CameraMan blurred x derivative.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.CameraMan}
          />
        </div>
        <div>
          <p className={styles.text}>Y Derivative: </p>
          <Image
            src="/images/CameraMan blurred y derivative.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.CameraMan}
          />
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <div>
          <p className={styles.text}>Gradient Magnitude: </p>
          <Image
            src="/images/CameraMan blurred gradient magnitude.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.CameraMan}
          />
        </div>
        <div>
          <p className={styles.text}>Edge Image (threshold: 0.1): </p>
          <Image
            src="/images/CameraMan blurred edge image.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.CameraMan}
          />
        </div>
      </div>
    </div>
  );
}
