import styles from "../css_modules/ImageSharpening.module.css";
import Image from "next/image";

export default function ImageSharpening() {
  return (
    <div className={styles.wrapper} id="sharpening">
      <h2 className={styles.title}>2.1 Image Sharpening</h2>
      <p className={styles.text}>
        Like what we saw in part 1, the high frequency signal of an image is the
        structure and fine details where the color and brightness change quickly
        and obviously. So what we can do is to sharpen the image we want, which
        means enhance the structure of the image by adding more high frequency
        of the image to the original image. The process is easy that we can use
        the Gaussian filter to get the low frequency of the image. And subtract
        the low frequency of the image from the original image to get the high
        frequency part. And then add the high frequency back to the original
        image. Here is my process:
      </p>
      <p className={styles.text}> Original Image:</p>
      <Image
        src="/images/taj.jpg"
        width={500}
        height={500}
        alt="Cameraman Picture"
        className={styles.CameraMan}
      />
      <div className={styles.imageWrapper}>
        <div>
          <p className={styles.imageText}>Low Frequency: </p>
          <Image
            src="/images/taj.jpg low_freq.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.CameraMan}
          />
        </div>
        <div>
          <p className={styles.imageText}>High Frequency: </p>
          <Image
            src="/images/taj.jpg high_freq.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.CameraMan}
          />
        </div>
      </div>

      <div className={styles.imageWrapper}>
        <div>
          <p className={styles.imageText}>sharppened with alpha = 0.1: </p>
          <Image
            src="/images/taj.jpg a = 0.1 sharpenned.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.CameraMan}
          />
        </div>
        <div>
          <p className={styles.imageText}>sharppened with alpha = 0.5 </p>
          <Image
            src="/images/taj.jpg a = 0.5 sharpenned.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.CameraMan}
          />
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <div>
          <p className={styles.imageText}>sharppened with alpha = 1 </p>
          <Image
            src="/images/taj.jpg a = 1 sharpenned.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.CameraMan}
          />
        </div>
        <div>
          <p className={styles.imageText}>sharppened with alpha = 2 </p>
          <Image
            src="/images/taj.jpg a = 2 sharpenned.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.CameraMan}
          />
        </div>
      </div>
      <p className={styles.text}>
        Maybe the effect is not that obvious, but if you look at the scaffold on
        the left, you can clearly see that it is becoming more and more clear.
        Also note that, instead of blurring and adding back the high frequency
        sapareatly, we are using the following the formula:
      </p>
      <Image
        src="/images/Unsharp formula.png"
        width={500}
        height={500}
        alt="Cameraman Picture"
        className={styles.formula}
      />
      <p className={styles.text}>Here are some other Sharpening results: </p>
      <p className={styles.text}>Original Image:</p>
      <Image
        src="/images/Ado2.webp"
        width={500}
        height={500}
        alt="Cameraman Picture"
        className={styles.CameraMan}
      />
      <div className={styles.imageWrapper}>
        <div>
          <p className={styles.imageText}>Low Frequency: </p>
          <Image
            src="/images/Ado2.webp low_freq.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.CameraMan}
          />
        </div>
        <div>
          <p className={styles.imageText}>High Frequency: </p>
          <Image
            src="/images/Ado2.webp high_freq.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.CameraMan}
          />
        </div>
      </div>

      <div className={styles.imageWrapper}>
        <div>
          <p className={styles.imageText}>sharppened with alpha = 0.1: </p>
          <Image
            src="/images/Ado2.webp a = 0.1 sharpenned.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.CameraMan}
          />
        </div>
        <div>
          <p className={styles.imageText}>sharppened with alpha = 0.5 </p>
          <Image
            src="/images/Ado2.webp a = 0.5 sharpenned.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.CameraMan}
          />
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <div>
          <p className={styles.imageText}>sharppened with alpha = 1 </p>
          <Image
            src="/images/Ado2.webp a = 1 sharpenned.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.CameraMan}
          />
        </div>
        <div>
          <p className={styles.imageText}>sharppened with alpha = 2 </p>
          <Image
            src="/images/Ado2.webp a = 2 sharpenned.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.CameraMan}
          />
        </div>
      </div>
      <p className={styles.text}>Original Image:</p>
      <Image
        src="/images/101.jpg"
        width={500}
        height={500}
        alt="Cameraman Picture"
        className={styles.CameraMan}
      />
      <div className={styles.imageWrapper}>
        <div>
          <p className={styles.imageText}>Low Frequency: </p>
          <Image
            src="/images/101.jpg low_freq.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.CameraMan}
          />
        </div>
        <div>
          <p className={styles.imageText}>High Frequency: </p>
          <Image
            src="/images/101.jpg high_freq.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.CameraMan}
          />
        </div>
      </div>

      <div className={styles.imageWrapper}>
        <div>
          <p className={styles.imageText}>sharppened with alpha = 0.1: </p>
          <Image
            src="/images/101.jpg a = 0.1 sharpenned.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.CameraMan}
          />
        </div>
        <div>
          <p className={styles.imageText}>sharppened with alpha = 0.5 </p>
          <Image
            src="/images/101.jpg a = 0.5 sharpenned.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.CameraMan}
          />
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <div>
          <p className={styles.imageText}>sharppened with alpha = 1 </p>
          <Image
            src="/images/101.jpg a = 1 sharpenned.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.CameraMan}
          />
        </div>
        <div>
          <p className={styles.imageText}>sharppened with alpha = 2 </p>
          <Image
            src="/images/101.jpg a = 2 sharpenned.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.CameraMan}
          />
        </div>
      </div>
      <p className={styles.text}>
        Let&apos;s see what will happen if I blur and sharp a image that is
        already sharp
      </p>
      <p className={styles.text}>Original Image:</p>
      <Image
        src="/images/sharp cat.jpg"
        width={500}
        height={500}
        alt="Cameraman Picture"
        className={styles.cat}
      />
      <div className={styles.imageWrapper}>
        <div>
          <p className={styles.imageText}>Blur Image: </p>
          <Image
            src="/images/blur cat.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.cat}
          />
        </div>
        <div>
          <p className={styles.imageText}>Sharpenned with alpha = 2: </p>
          <Image
            src="/images/blur cat.jpg a = 2 sharpenned.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.cat}
          />
        </div>
      </div>

      <p className={styles.text}>
        As we can see, after blurring, the sharpenning effect becomes very bad.
        The structure of the cat is still reall blurry even after sharpenning.
      </p>
    </div>
  );
}
