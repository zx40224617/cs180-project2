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
          <p className={styles.imageText}>X Derivative: </p>
          <Image
            src="/images/CameraMan blurred x derivative.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.CameraMan}
          />
        </div>
        <div>
          <p className={styles.imageText}>Y Derivative: </p>
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
          <p className={styles.imageText}>Gradient Magnitude: </p>
          <Image
            src="/images/CameraMan blurred gradient magnitude.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.CameraMan}
          />
        </div>
        <div>
          <p className={styles.imageText}>Edge Image (threshold: 0.35): </p>
          <Image
            src="/images/CameraMan blurred edge image.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.CameraMan}
          />
        </div>
      </div>
      <p className={styles.text}>
        Alternatively, since we know that the convolution is commutative and
        associative, we can also covolve Gaussian with Dx, Dy first, and we will
        get the DoG (Derivative of Gaussian) filter. Which we then convolve the
        image with DoG filter and repeat the process for gradient magnitude and
        edge image. Note that it will look the same as what we just did by
        blurring the image first. Here is my process:
      </p>
      <div>
        <p className={styles.imageText}>Original Gaussian Filter: </p>
        <Image
          src="/images/original Gaussian.jpg"
          width={500}
          height={500}
          alt="Cameraman Picture"
          className={styles.CameraMan}
        />
      </div>
      <div className={styles.imageWrapper}>
        <div>
          <p className={styles.imageText}>Derivative x of Gaussian: </p>
          <Image
            src="/images/DoG filter x.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.CameraMan}
          />
        </div>
        <div>
          <p className={styles.imageText}>Derivative y of Gaussian: </p>
          <Image
            src="/images/DoG filter y.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.CameraMan}
          />
        </div>
      </div>
      <p className={styles.text}>
        Note that the filter you see here is a lot smoother the filter printed
        out in the cell which look like the following (screenshot):
      </p>
      <div>
        <p className={styles.imageText}>Original Gaussian Filter: </p>
        <Image
          src="/images/original Gaussian cell.png"
          width={500}
          height={500}
          alt="Cameraman Picture"
          className={styles.CameraMan}
        />
      </div>
      <div className={styles.imageWrapper}>
        <div>
          <p className={styles.imageText}>Derivative x of Gaussian: </p>
          <Image
            src="/images/DoG filter x cell.png"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.CameraMan}
          />
        </div>
        <div>
          <p className={styles.imageText}>Derivative y of Gaussian: </p>
          <Image
            src="/images/DoG filter y cell.png"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.CameraMan}
          />
        </div>
      </div>
      <p className={styles.text}>
        This is probally because I saved the image as .jpg file which is a lossy
        image format. Which will tend to smooth out the details and reduce high
        frequency noise.
      </p>
      <div className={styles.imageWrapper}>
        <div>
          <p className={styles.imageText}>X Derivative: </p>
          <Image
            src="/images/CameraMan DoG x derivative.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.CameraMan}
          />
        </div>
        <div>
          <p className={styles.imageText}>Y Derivative: </p>
          <Image
            src="/images/CameraMan DoG y derivative.jpg"
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
            src="/images/CameraMan DoG gradient magnitude.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.CameraMan}
          />
        </div>
        <div>
          <p className={styles.imageText}>Edge Image (threshold: 0.35): </p>
          <Image
            src="/images/CameraMan DoG edge image.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.CameraMan}
          />
        </div>
      </div>
      <p className={styles.sectionTitle}>
        Summary and Notes (Answer to Questions):
      </p>
      <div className={styles.summary}>
        <ul className={styles.text}>
          <li>
            When you call the method convolve2d(), remember to set the parameter
            &quot;boundary&quot; to &quot;symm&quot;. In general, just put
            &quot;symm&quot; for every call of the method in this peoject.
          </li>
          <li>
            We can see that by blurring the image first, the gradient magnitude
            and edge image are smoother (than part 1.1).
          </li>
          <li>
            Note that no matter you blur the image first and take x, y
            derivative on it to get result, or concolve the Gaussian filter with
            x, y dervative first and then convolve the DoG on the image to get
            the result. The final image will look the same. This is because
            convolution is commutative and associative.
          </li>
        </ul>
      </div>
    </div>
  );
}
