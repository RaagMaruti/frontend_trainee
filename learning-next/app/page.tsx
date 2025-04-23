"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Script from "next/script";

export default function Page() {
  const router = useRouter();
  return (
    <div>
      Welcome to Learning-Next Web App
      <button
        onClick={() => {
          router.push("/counter");
        }}
      >
        Go to counter
      </button>
      <br />
      <Image
        src="image.png"
        alt="image"
        // placeholder="empty" - not working as expected
        width={1365}
        height={868}
        priority
        quality={100}
        onLoad={() => console.log("YAYAYAYYYA")}
        onError={() => console.log("ERRRORRRR")}
      />
      <br />
      <video controls src="video.mp4">
        Video nathi chalto aa browser ma
      </video>
      <Script src="ticks.js" strategy="lazyOnload"></Script>
    </div>
  );
}
