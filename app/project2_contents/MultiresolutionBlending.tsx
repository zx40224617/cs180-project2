import styles from "../css_modules/Multiresolution.module.css";
import Image from "next/image";
import Separator from "../accessories/separator";

export default function MultiresolutionBlending() {
  return (
    <>
      <div className={styles.wrapper} id="blending">
        <h2 className={styles.title}>2.4 MultiResolution Blending</h2>
        <p className={styles.text}>
          Now we can implement what we learned in the last section to create our
          own blending image:
        </p>
        <div className={styles.imageWrapper}>
          <div>
            <p className={styles.imageText}>Image 1: </p>
            <Image
              src="/images/Ado5.jpg"
              width={500}
              height={500}
              alt="Cameraman Picture"
              className={styles.Ado}
            />
          </div>
          <div>
            <p className={styles.imageText}>Image 2: </p>
            <Image
              src="/images/Ado6.jpeg"
              width={500}
              height={500}
              alt="Cameraman Picture"
              className={styles.Ado}
            />
          </div>
        </div>
        <p className={styles.text}>
          Note that unlike the apple and ornage which has the same exact size,
          these 2 images are really different in size where I used the alignment
          code from previous part to get the correct size image. And this
          blending is using the same mask as above (I didn't use align for the
          apple and orange):
        </p>
        <div className={styles.imageWrapper}>
          <div>
            <p className={styles.imageText}>Mask : </p>
            <Image
              src="/images/Ado5.jpg Ado6.jpeg mask.jpg"
              width={500}
              height={500}
              alt="Cameraman Picture"
              className={styles.mask}
            />
          </div>
          <div>
            <p className={styles.imageText}>reverse Mask: </p>
            <Image
              src="/images/Ado5.jpg Ado6.jpeg reverse mask.jpg"
              width={500}
              height={500}
              alt="Cameraman Picture"
              className={styles.mask}
            />
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <div className={styles.appleStacks}>
            <p className={styles.imageText}>Ado5 Laplacian Stacks: </p>
            <p className={styles.imageText}>level 0</p>
            <Image
              src="/images/Ado5.jpg 0 laplacian.jpg"
              width={500}
              height={500}
              alt="Cameraman Picture"
              className={styles.laplace}
            />
            <p className={styles.imageText}>level 1 </p>
            <Image
              src="/images/Ado5.jpg 1 laplacian.jpg"
              width={500}
              height={500}
              alt="Cameraman Picture"
              className={styles.laplace}
            />
            <p className={styles.imageText}>level 2 </p>
            <Image
              src="/images/Ado5.jpg 2 laplacian.jpg"
              width={500}
              height={500}
              alt="Cameraman Picture"
              className={styles.laplace}
            />
            <p className={styles.imageText}>level 3 </p>
            <Image
              src="/images/Ado5.jpg 3 laplacian.jpg"
              width={500}
              height={500}
              alt="Cameraman Picture"
              className={styles.laplace}
            />
            <p className={styles.imageText}> level 4 </p>
            <Image
              src="/images/Ado5.jpg 4 laplacian.jpg"
              width={500}
              height={500}
              alt="Cameraman Picture"
              className={styles.laplace}
            />
            <p className={styles.imageText}>level 5</p>
            <Image
              src="/images/Ado5.jpg 5 laplacian.jpg"
              width={500}
              height={500}
              alt="Cameraman Picture"
              className={styles.laplace}
            />
            <p className={styles.imageText}>level 6 </p>
            <Image
              src="/images/Ado5.jpg 6 laplacian.jpg"
              width={500}
              height={500}
              alt="Cameraman Picture"
              className={styles.laplace}
            />
            <p className={styles.imageText}>level 7 </p>
            <Image
              src="/images/Ado5.jpg 7 laplacian.jpg"
              width={500}
              height={500}
              alt="Cameraman Picture"
              className={styles.laplace}
            />
          </div>
          <div className={styles.imageWrapper}>
            <div className={styles.appleStacks}>
              <p className={styles.imageText}>Ado6 Laplacian Stacks: </p>
              <p className={styles.imageText}>level 0</p>
              <Image
                src="/images/Ado6.jpeg 0 laplacian.jpg"
                width={500}
                height={500}
                alt="Cameraman Picture"
                className={styles.laplace}
              />
              <p className={styles.imageText}>level 1 </p>
              <Image
                src="/images/Ado6.jpeg 1 laplacian.jpg"
                width={500}
                height={500}
                alt="Cameraman Picture"
                className={styles.laplace}
              />
              <p className={styles.imageText}>level 2 </p>
              <Image
                src="/images/Ado6.jpeg 2 laplacian.jpg"
                width={500}
                height={500}
                alt="Cameraman Picture"
                className={styles.laplace}
              />
              <p className={styles.imageText}>level 3 </p>
              <Image
                src="/images/Ado6.jpeg 3 laplacian.jpg"
                width={500}
                height={500}
                alt="Cameraman Picture"
                className={styles.laplace}
              />
              <p className={styles.imageText}> level 4 </p>
              <Image
                src="/images/Ado6.jpeg 4 laplacian.jpg"
                width={500}
                height={500}
                alt="Cameraman Picture"
                className={styles.laplace}
              />
              <p className={styles.imageText}>level 5</p>
              <Image
                src="/images/Ado6.jpeg 5 laplacian.jpg"
                width={500}
                height={500}
                alt="Cameraman Picture"
                className={styles.laplace}
              />
              <p className={styles.imageText}>level 6 </p>
              <Image
                src="/images/Ado6.jpeg 6 laplacian.jpg"
                width={500}
                height={500}
                alt="Cameraman Picture"
                className={styles.laplace}
              />
              <p className={styles.imageText}>level 7 </p>
              <Image
                src="/images/Ado6.jpeg 7 laplacian.jpg"
                width={500}
                height={500}
                alt="Cameraman Picture"
                className={styles.laplace}
              />
            </div>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <div className={styles.appleStacks}>
            <p className={styles.imageText}>
              Ado5 Laplacian Stacks after masking:
            </p>
            <p className={styles.imageText}>level 0</p>
            <Image
              src="/images/Ado5.jpg 0 left laplacian.jpg"
              width={500}
              height={500}
              alt="Cameraman Picture"
              className={styles.laplace}
            />
            <p className={styles.imageText}>level 1 </p>
            <Image
              src="/images/Ado5.jpg 1 left laplacian.jpg"
              width={500}
              height={500}
              alt="Cameraman Picture"
              className={styles.laplace}
            />
            <p className={styles.imageText}>level 2 </p>
            <Image
              src="/images/Ado5.jpg 2 left laplacian.jpg"
              width={500}
              height={500}
              alt="Cameraman Picture"
              className={styles.laplace}
            />
            <p className={styles.imageText}>level 3 </p>
            <Image
              src="/images/Ado5.jpg 3 left laplacian.jpg"
              width={500}
              height={500}
              alt="Cameraman Picture"
              className={styles.laplace}
            />
            <p className={styles.imageText}> level 4 </p>
            <Image
              src="/images/Ado5.jpg 4 left laplacian.jpg"
              width={500}
              height={500}
              alt="Cameraman Picture"
              className={styles.laplace}
            />
            <p className={styles.imageText}>level 5</p>
            <Image
              src="/images/Ado5.jpg 5 left laplacian.jpg"
              width={500}
              height={500}
              alt="Cameraman Picture"
              className={styles.laplace}
            />
            <p className={styles.imageText}>level 6 </p>
            <Image
              src="/images/Ado5.jpg 6 left laplacian.jpg"
              width={500}
              height={500}
              alt="Cameraman Picture"
              className={styles.laplace}
            />
            <p className={styles.imageText}>level 7 </p>
            <Image
              src="/images/Ado5.jpg 7 left laplacian.jpg"
              width={500}
              height={500}
              alt="Cameraman Picture"
              className={styles.laplace}
            />
          </div>
          <div className={styles.imageWrapper}>
            <div className={styles.appleStacks}>
              <p className={styles.imageText}>
                Ado6 Laplacian Stacks after masking:
              </p>
              <p className={styles.imageText}>level 0</p>
              <Image
                src="/images/Ado6.jpeg 0 right laplacian.jpg"
                width={500}
                height={500}
                alt="Cameraman Picture"
                className={styles.laplace}
              />
              <p className={styles.imageText}>level 1 </p>
              <Image
                src="/images/Ado6.jpeg 1 right laplacian.jpg"
                width={500}
                height={500}
                alt="Cameraman Picture"
                className={styles.laplace}
              />
              <p className={styles.imageText}>level 2 </p>
              <Image
                src="/images/Ado6.jpeg 2 right laplacian.jpg"
                width={500}
                height={500}
                alt="Cameraman Picture"
                className={styles.laplace}
              />
              <p className={styles.imageText}>level 3 </p>
              <Image
                src="/images/Ado6.jpeg 3 right laplacian.jpg"
                width={500}
                height={500}
                alt="Cameraman Picture"
                className={styles.laplace}
              />
              <p className={styles.imageText}> level 4 </p>
              <Image
                src="/images/Ado6.jpeg 4 right laplacian.jpg"
                width={500}
                height={500}
                alt="Cameraman Picture"
                className={styles.laplace}
              />
              <p className={styles.imageText}>level 5</p>
              <Image
                src="/images/Ado6.jpeg 5 right laplacian.jpg"
                width={500}
                height={500}
                alt="Cameraman Picture"
                className={styles.laplace}
              />
              <p className={styles.imageText}>level 6 </p>
              <Image
                src="/images/Ado6.jpeg 6 right laplacian.jpg"
                width={500}
                height={500}
                alt="Cameraman Picture"
                className={styles.laplace}
              />
              <p className={styles.imageText}>level 7 </p>
              <Image
                src="/images/Ado6.jpeg 7 right laplacian.jpg"
                width={500}
                height={500}
                alt="Cameraman Picture"
                className={styles.laplace}
              />
            </div>
          </div>
        </div>
        <p className={styles.text}>
          Final result after combine the 2 masking Laplacian ,and collapsing
          into 1 image:
        </p>
        <Image
          src="/images/Blend of Ado5 and Ado6 n = 8.jpg"
          width={500}
          height={500}
          alt="Cameraman Picture"
          className={styles.CameraMan}
        />
        <p className={styles.text}>
          We can also try some irregular mask like the following:
        </p>
        <div className={styles.imageWrapper}>
          <div>
            <p className={styles.imageText}>Basketball : </p>
            <Image
              src="/images/basketball.jpg"
              width={500}
              height={500}
              alt="Cameraman Picture"
              className={styles.mask}
            />
          </div>
          <div>
            <p className={styles.imageText}>Soccer: </p>
            <Image
              src="/images/Soccer.jpg"
              width={500}
              height={500}
              alt="Cameraman Picture"
              className={styles.mask}
            />
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <div>
            <p className={styles.imageText}>Mask : </p>
            <Image
              src="/images/basketball.jpg soccer.jpg mask.jpg"
              width={500}
              height={500}
              alt="Cameraman Picture"
              className={styles.mask}
            />
          </div>
          <div>
            <p className={styles.imageText}>reverse Mask: </p>
            <Image
              src="/images/basketball.jpg soccer.jpg reverse mask.jpg"
              width={500}
              height={500}
              alt="Cameraman Picture"
              className={styles.mask}
            />
          </div>
        </div>
        <p className={styles.text}>
          Final result after combine the 2 masking Laplacian ,and collapsing
          into 1 image:
        </p>
        <Image
          src="/images/Blend of basketball and soccer n = 8.jpg"
          width={500}
          height={500}
          alt="Cameraman Picture"
          className={styles.CameraMan}
        />
        <p className={styles.text}>
          Note that I create the irregular mask using photoshop
        </p>
        <p className={styles.title}>Final reflection on this project:</p>
        <p className={styles.text}>
          This is really a fun project to me, I spent a lot of time tweaking and
          find the best clicking point to blend 2 faces toegther so that there
          won't be 2 noses and chins. But I feel really motivated since I can
          play with the art that I like using code instead of drawing (I'm so
          bad at art).
        </p>
      </div>
    </>
  );
}
