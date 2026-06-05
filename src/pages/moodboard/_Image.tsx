import { motion } from "motion/react";

interface Props {
  src: string;
  alt: string;
}

export default function Image({ src, alt }: Props) {
  return (
    <motion.div
      drag
      dragMomentum={false}
      className="cursor-grab active:cursor-grabbing select-none"
    >
      <img
        src={src}
        alt={alt}
        className="w-56 h-40 object-cover rounded-lg shadow-lg"
        draggable={false}
      />
    </motion.div>
  );
}
