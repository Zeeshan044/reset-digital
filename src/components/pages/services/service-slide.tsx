import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  title: string;
  description: string;
  number: string;
  image: string;
  reversed: boolean;
};

export default function ServiceSectionSlide({
  title,
  description,
  number,
  image,
  reversed,
}: Props) {
  return (
    <div className="grid md:grid-cols-2 gap-x-20 gap-y-8">
      <motion.div
        initial={{ opacity: 0, x: reversed ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-20 pt-16"
      >
        <h2 className="text-5xl font-bold mb-4">{title}</h2>
        <div className="flex flex-col gap-4 leading-relaxed text-lg">
          <p>{description}</p>
        </div>
        <div className="absolute top-0 left-0 text-9xl leading-none font-bold text-white/30 -z-10">
          {number}
        </div>
      </motion.div>
      <div
        className={`flex items-start ${
          reversed && "md:col-start-1 md:row-start-1"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, x: reversed ? -50 : 50, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-20 mx-6"
        >
          <div className="aspect-video overflow-hidden">
            <img src={image} alt="" className="object-cover h-full w-full" />
          </div>
          <motion.div
            initial={{ opacity: 0, x: reversed ? -50 : 50 }}
            whileInView={{ opacity: 1, x: reversed ? -24 : 24 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className={`h-full w-full absolute top-6 bg-primary -z-10`}
          />
        </motion.div>
      </div>
    </div>
  );
}
