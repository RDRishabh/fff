import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const videos = [
  {
    src: "/public/videos/vid1.mp4", // Replace with your actual video path
  },
  {
    src: "/public/videos/vid2.mp4",
  },
  {
    src: "/public/videos/vid3.mp4",
  },
];

const HorizontalScroll = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[500vh] bg-white">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-12">
          {videos.map((video, idx) => {
            return <VideoCard video={video} key={idx} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const VideoCard = ({ video }) => {
  return (
    <div
      key={video.src}
      className="group relative h-[80vh] w-[90vw] max-w-7xl overflow-hidden bg-black rounded-2xl shadow-xl"
    >
      <video
        src={video.src}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      />
    </div>
  );
};

export default HorizontalScroll;
