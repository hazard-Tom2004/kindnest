"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Carousel, Hero } from "../components"; 
import { heroImages, galleryImages } from "../content";

export default function GalleryPage() {
  const reduceMotion = useReducedMotion();
  return <>
    {/* <section className="gallery-intro">
      <div className="shell">
        <p className="eyebrow">Gallery</p>
        <h1>View on our Space</h1>
        <p>A glimpse into the care, connection and everyday independence that guide Kindnest.</p>
      </div>
    </section> */}
      <Hero eyebrow="Gallery" title="View our current Space"  text="" images={heroImages.gallery}>
                
            </Hero>
    <section className="gallery-section">
      <div className="shell gallery-grid">
        {galleryImages.map((image, index) => <motion.figure key={image.src} className={`gallery-card gallery-card-${index + 1}`} initial={reduceMotion ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay: reduceMotion ? 0 : Math.min(index * 0.07, 0.35), ease: [0.22, 1, 0.36, 1] }} whileHover={reduceMotion ? {} : { y: -7 }}>
          <img src={image.src} alt={image.alt} />
          <figcaption>{image.title}</figcaption>
        </motion.figure>)}
      </div>
    </section>
  </>;
}
