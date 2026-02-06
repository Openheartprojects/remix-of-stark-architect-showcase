import { useEffect, useMemo, useRef } from "react";

type Props = {
  src: string;
  className?: string;
  poster?: string;
  ariaLabel: string;
};

const canAutoplay = (video: HTMLVideoElement) => {
  video.muted = true;
  video.playsInline = true;
  video.loop = true;
  video.autoplay = true;
};

export default function LoopingViewportVideo({
  src,
  className,
  poster,
  ariaLabel,
}: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const observerOptions = useMemo<IntersectionObserverInit>(
    () => ({
      root: null,
      rootMargin: "0px",
      threshold: [0, 0.15, 0.35, 0.6],
    }),
    []
  );

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    canAutoplay(el);

    const play = async () => {
      try {
        await el.play();
      } catch {
        // Autoplay may be blocked; user interaction will be required.
      }
    };

    const pause = () => {
      try {
        el.pause();
      } catch {
        // ignore
      }
    };

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;

      if (entry.isIntersecting && entry.intersectionRatio >= 0.15) {
        void play();
      } else {
        pause();
      }
    }, observerOptions);

    observer.observe(el);

    void play();

    return () => {
      observer.disconnect();
      pause();
    };
  }, [observerOptions]);

  return (
    <video
      ref={videoRef}
      className={className}
      src={src}
      poster={poster}
      autoPlay
      muted
      playsInline
      loop
      controls={false}
      disablePictureInPicture
      disableRemotePlayback
      preload="metadata"
      aria-label={ariaLabel}
    />
  );
}
