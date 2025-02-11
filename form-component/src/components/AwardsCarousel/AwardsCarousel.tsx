import useEmblaCarousel from "embla-carousel-react";
import styles from "./Awards.module.css";
import AutoScroll from "embla-carousel-auto-scroll";

export default function AwardsCarousel({ data }: any) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({
      playOnInit: true,
      startDelay: 0,
    }),
  ]);

  const listAwards = data?.images.map((a: any) => (
    <img
      className={styles.awardsImage}
      key={a.id}
      src={a.src}
      alt="award"
      draggable="false"
    ></img>
  ));

  return (
    <div className={styles.slider} ref={emblaRef}>
      <div className={styles.awards}>{listAwards}</div>
    </div>
  );
}
