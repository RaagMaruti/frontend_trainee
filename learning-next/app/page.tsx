import Image from "next/image";

export default function Page() {
  return (
    <div>
      Welcome to Learning-Next Web App
      <br />
      <Image
        src="/image.png"
        alt="image"
        // placeholder="empty" - not working as expected
        width={640}
        height={480}
        priority
        quality={100}
        onLoad={() => console.log("YAYAYAYYYA")}
        onError={() => console.log("ERRRORRRR")}
      />
      <br />
      <video controls src="/video.mp4" data-testid="video">
        Video nathi chalto tara browser ma
      </video>
    </div>
  );
}
