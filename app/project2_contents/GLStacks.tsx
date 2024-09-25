import styles from "../css_modules/GLStacks.module.css";
import Image from "next/image";

export default function GLStacks() {
  return (
    <div className={styles.wrapper} id="glstacks">
      <h2 className={styles.title}>2.3 Gaussian and Laplacian Stacks</h2>
      <p className={styles.text}>
        This part of the assignment is aim to blend 2 images seamlessly using
        Gaussian and Laplacian Stacks (or Pyramid). We first need to create the
        Gaussian Stacks and Laplacian Stacks for both image including the mask
        and inverse mask. After we apply the masks to the image, we combine the
        both Laplacian plyramid and collapse to get the final result. Here is my
        process:
      </p>
      <div className={styles.imageWrapper}>
        <div>
          <p className={styles.imageText}>Apple: </p>
          <Image
            src="/images/apple.jpeg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.CameraMan}
          />
        </div>
        <div>
          <p className={styles.imageText}>Orange: </p>
          <Image
            src="/images/orange.jpeg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.CameraMan}
          />
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <div className={styles.appleStacks}>
          <p className={styles.imageText}>Apple Laplacian Stacks: </p>
          <p className={styles.imageText}>level 0</p>
          <Image
            src="/images/apple.jpeg 0 laplacian.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.laplace}
          />
          <p className={styles.imageText}>level 1 </p>
          <Image
            src="/images/apple.jpeg 1 laplacian.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.laplace}
          />
          <p className={styles.imageText}>level 2 </p>
          <Image
            src="/images/apple.jpeg 2 laplacian.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.laplace}
          />
          <p className={styles.imageText}>level 3 </p>
          <Image
            src="/images/apple.jpeg 3 laplacian.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.laplace}
          />
          <p className={styles.imageText}> level 4 </p>
          <Image
            src="/images/apple.jpeg 4 laplacian.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.laplace}
          />
          <p className={styles.imageText}>level 5</p>
          <Image
            src="/images/apple.jpeg 5 laplacian.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.laplace}
          />
          <p className={styles.imageText}>level 6 </p>
          <Image
            src="/images/apple.jpeg 6 laplacian.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.laplace}
          />
          <p className={styles.imageText}>level 7 </p>
          <Image
            src="/images/apple.jpeg 7 laplacian.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.laplace}
          />
        </div>
        <div className={styles.orangeStacks}>
          <p className={styles.imageText}>Orange Laplacian Stacks: </p>
          <p className={styles.imageText}>level 0</p>
          <Image
            src="/images/orange.jpeg 0 laplacian.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.laplace}
          />
          <p className={styles.imageText}>level 1 </p>
          <Image
            src="/images/orange.jpeg 1 laplacian.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.laplace}
          />
          <p className={styles.imageText}>level 2 </p>
          <Image
            src="/images/orange.jpeg 2 laplacian.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.laplace}
          />
          <p className={styles.imageText}>level 3 </p>
          <Image
            src="/images/orange.jpeg 3 laplacian.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.laplace}
          />
          <p className={styles.imageText}> level 4 </p>
          <Image
            src="/images/orange.jpeg 4 laplacian.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.laplace}
          />
          <p className={styles.imageText}>level 5</p>
          <Image
            src="/images/orange.jpeg 5 laplacian.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.laplace}
          />
          <p className={styles.imageText}>level 6 </p>
          <Image
            src="/images/orange.jpeg 6 laplacian.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.laplace}
          />
          <p className={styles.imageText}>level 7 </p>
          <Image
            src="/images/orange.jpeg 7 laplacian.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.laplace}
          />
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <div className={styles.appleStacks}>
          <p className={styles.imageText}>
            Apple Laplacian Stacks after masking:
          </p>
          <p className={styles.imageText}>level 0</p>
          <Image
            src="/images/apple.jpeg 0 left laplacian.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.laplace}
          />
          <p className={styles.imageText}>level 1 </p>
          <Image
            src="/images/apple.jpeg 1 left laplacian.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.laplace}
          />
          <p className={styles.imageText}>level 2 </p>
          <Image
            src="/images/apple.jpeg 2 left laplacian.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.laplace}
          />
          <p className={styles.imageText}>level 3 </p>
          <Image
            src="/images/apple.jpeg 3 left laplacian.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.laplace}
          />
          <p className={styles.imageText}> level 4 </p>
          <Image
            src="/images/apple.jpeg 4 left laplacian.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.laplace}
          />
          <p className={styles.imageText}>level 5</p>
          <Image
            src="/images/apple.jpeg 5 left laplacian.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.laplace}
          />
          <p className={styles.imageText}>level 6 </p>
          <Image
            src="/images/apple.jpeg 6 left laplacian.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.laplace}
          />
          <p className={styles.imageText}>level 7 </p>
          <Image
            src="/images/apple.jpeg 7 left laplacian.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.laplace}
          />
        </div>
        <div className={styles.orangeStacks}>
          <p className={styles.imageText}>
            Orange Laplacian Stacks after masking:{" "}
          </p>
          <p className={styles.imageText}>level 0</p>
          <Image
            src="/images/orange.jpeg 0 right laplacian.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.laplace}
          />
          <p className={styles.imageText}>level 1 </p>
          <Image
            src="/images/orange.jpeg 1 right laplacian.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.laplace}
          />
          <p className={styles.imageText}>level 2 </p>
          <Image
            src="/images/orange.jpeg 2 right laplacian.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.laplace}
          />
          <p className={styles.imageText}>level 3 </p>
          <Image
            src="/images/orange.jpeg 3 right laplacian.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.laplace}
          />
          <p className={styles.imageText}> level 4 </p>
          <Image
            src="/images/orange.jpeg 4 right laplacian.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.laplace}
          />
          <p className={styles.imageText}>level 5</p>
          <Image
            src="/images/orange.jpeg 5 right laplacian.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.laplace}
          />
          <p className={styles.imageText}>level 6 </p>
          <Image
            src="/images/orange.jpeg 6 right laplacian.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.laplace}
          />
          <p className={styles.imageText}>level 7 </p>
          <Image
            src="/images/orange.jpeg 7 right laplacian.jpg"
            width={500}
            height={500}
            alt="Cameraman Picture"
            className={styles.laplace}
          />
        </div>
      </div>
      <p className={styles.text}>
        Final result after combine the 2 masking Laplacian ,and collapsing into
        1 image:
      </p>
      <Image
        src="/images/Blend of Apple and Orange n = 8.jpg"
        width={500}
        height={500}
        alt="Cameraman Picture"
        className={styles.CameraMan}
      />
    </div>
  );
}
