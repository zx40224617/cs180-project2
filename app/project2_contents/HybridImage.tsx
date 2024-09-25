import styles from "../css_modules/HybridImage.module.css";
import Image from "next/image";

export default function HybridImage() {
  return (
    <div className={styles.wrapper} id="hybrid-image">
      <h2 className={styles.title}>2.2 Hybrid Image</h2>
      <p className={styles.text}>
        The eyes of human can't see high frequency signal from far away. Which
        means we can combine the high frequncy signal of a picture and add it to
        the low frequency signal of another picture to create an image where it
        looks differently from close and far. We call such an image as Hybrid
        Image. Here is my process:
      </p>
      <div className={styles.imageWrapper}>
        <div>
          <p className={styles.imageText}>High Freq Image (sigma = 12): </p>
          <Image
            src="/images/nutmeg.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.CameraMan}
          />
        </div>
        <div>
          <p className={styles.imageText}>Low Freq Image (sigma = 20): </p>
          <Image
            src="/images/DerekPicture.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.CameraMan}
          />
        </div>
      </div>
      <p className={styles.imageText}>Hybrid Image: </p>
      <Image
        src="/images/hyrid of NutMeg and Derek s1 = 12 s2 = 20.jpg"
        width={500}
        height={500}
        alt="Cameraman Picture"
        className={styles.CameraMan}
      />
      <p className={styles.text}>
        If you look from close enough, the image is a cat, and if you look from
        far enough, it will become a man. Here are some other results:
      </p>
      <div className={styles.imageWrapper}>
        <div>
          <p className={styles.imageText}>High Freq (sigma = 2): </p>
          <Image
            src="/images/Ado.jpeg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.CameraMan}
          />
        </div>
        <div>
          <p className={styles.imageText}>Low Freq (sigma = 5): </p>
          <Image
            src="/images/Suisei2.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.CameraMan}
          />
        </div>
      </div>
      <p className={styles.imageText}>Hybrid Image of Ado and Suisei: </p>
      <Image
        src="/images/hyrid of Ado and Suisei s1 = 2 s2 = 5.jpg"
        width={500}
        height={500}
        alt="Cameraman Picture"
        className={styles.CameraMan}
      />
      <div className={styles.imageWrapper}>
        <div>
          <p className={styles.imageText}>High Freq (sigma = 2): </p>
          <Image
            src="/images/miko.jpeg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.CameraMan}
          />
        </div>
        <div>
          <p className={styles.imageText}>Low Freq (sigma = 5): </p>
          <Image
            src="/images/suisei.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.CameraMan}
          />
        </div>
      </div>
      <p className={styles.imageText}>Hybrid Image of Suisei and Miko: </p>
      <Image
        src="/images/hyrid of Suisei and Miko s1 = 2 s2 = 5.jpg"
        width={500}
        height={500}
        alt="Cameraman Picture"
        className={styles.CameraMan}
      />
      <p className={styles.text}>
        My favorite result is definitely the hybrid image of Ado and Suisei,
        here is the frequency analysis of the result:
      </p>
      <div className={styles.imageWrapper}>
        <div>
          <p className={styles.imageText}>Original fft of Ado: </p>
          <Image
            src="/images/Ado.jpeg orig fft.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.fft}
          />
        </div>
        <div>
          <p className={styles.imageText}>Low Freq fft of Ado: </p>
          <Image
            src="/images/Ado.jpeg low fft.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.fft}
          />
        </div>
        <div>
          <p className={styles.imageText}>High Freq fft of Ado: </p>
          <Image
            src="/images/Ado.jpeg high fft.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.fft}
          />
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <div>
          <p className={styles.imageText}>Original fft of Suisei: </p>
          <Image
            src="/images/Suisei2.jpg orig fft.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.fft}
          />
        </div>
        <div>
          <p className={styles.imageText}>Low Freq fft of Suisei: </p>
          <Image
            src="/images/Suisei2.jpg low fft.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.fft}
          />
        </div>
        <div>
          <p className={styles.imageText}>High Freq fft of Suisei: </p>
          <Image
            src="/images/Suisei2.jpg high fft.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.fft}
          />
        </div>
      </div>
      <p className={styles.imageText}>Hybrid fft of Ado and Suisei: </p>
      <Image
        src="/images/hyrid of Ado and Suisei s1 = 2 s2 = 5.jpg fft.jpg"
        width={500}
        height={500}
        alt="Cameraman Picture"
        className={styles.fft}
      />
      <p className={styles.text}>
        Here is a failure that I tried at first for Ado and Suisei (using the
        same image as above). I set both of the sigma too high (s1 = 12, s2 =
        20) that the high frequency of Ado is too strong and the low frequency
        of Suisei is too weak:
      </p>
      <Image
        src="/images/hyrid of Ado and Suisei s1 = 12 s2 = 20.jpg"
        width={500}
        height={500}
        alt="Cameraman Picture"
        className={styles.fft}
      />
    </div>
  );
}
