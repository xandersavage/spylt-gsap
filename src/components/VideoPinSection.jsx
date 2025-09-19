import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

const VideoPinSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  // Don't render anything on mobile
  if (isMobile) {
    return null;
  }

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".vd-pin-section",
        start: "-15% top",
        end: "200% top",
        scrub: 1.5,
        pin: true,
      },
    });

    tl.to(".video-box", {
      clipPath: "circle(100% at 50% 50%)",
      ease: "power1.inOut",
    });
  });

  return (
    <section className="vd-pin-section">
      <div
        style={{
          clipPath: "circle(8% at 50% 50%)",
        }}
        className="size-full video-box"
      >
        <video
          src="/videos/pin-video.mp4"
          playsInline
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
          onError={(e) => {
            console.log("Video failed to load:", e);
          }}
          onLoadStart={() => {
            console.log("Video started loading");
          }}
        />

        <div className="abs-center">
          <img
            src="/images/circle-text.svg"
            alt="circle-text"
            className="spin-circle"
          />
          <div className="play-btn">
            <img
              src="/images/play.svg"
              alt=""
              className="size-[3vw] ml-[.5vw]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default VideoPinSection;
