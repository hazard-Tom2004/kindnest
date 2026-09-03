"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Carousel, Hero } from "../components";
import { heroImages, galleryImages } from "../content";

const CHILDRENS_CONTACT_CATEGORY = "childrens-contact-house";

export default function GalleryPage() {
    const reduceMotion = useReducedMotion();

    const contactHouseImages = galleryImages.filter(
        (img) => img.category === CHILDRENS_CONTACT_CATEGORY
    );
    const otherImages = galleryImages.filter(
        (img) => img.category !== CHILDRENS_CONTACT_CATEGORY
    );

    return <>
        <Hero eyebrow="Gallery" title="View our current space" text="" images={heroImages.gallery} />

        {contactHouseImages.length > 0 && (
            <section className="gallery-section">
                <div className="shell">
                    <div className="gallery-notice">
                        <span className="gallery-notice-tag">Children Contact Service</span>
                        <p>
                            The photos below show the premises used exclusively for our
                            <strong> Children Contact Service</strong>. They are not related
                            to our Supported Living service.
                        </p>
                    </div>
                    <div className="gallery-grid">
                        {contactHouseImages.map((image, index) => (
                            <motion.figure
                                key={image.src}
                                className={`gallery-card gallery-card-${index + 1}`}
                                initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                    duration: 0.55,
                                    delay: reduceMotion ? 0 : Math.min(index * 0.07, 0.35),
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                whileHover={reduceMotion ? {} : { y: -7 }}
                            >
                                <div className="gallery-card-badge">Children Contact Service</div>
                                <img src={image.src} alt={image.alt} />
                                <figcaption>{image.title}</figcaption>
                            </motion.figure>
                        ))}
                    </div>
                </div>
            </section>
        )}

        {otherImages.length > 0 && (
            <section className="gallery-section">
                <div className="shell gallery-grid">
                    {otherImages.map((image, index) => (
                        <motion.figure
                            key={image.src}
                            className={`gallery-card gallery-card-${index + 1}`}
                            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.55,
                                delay: reduceMotion ? 0 : Math.min(index * 0.07, 0.35),
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            whileHover={reduceMotion ? {} : { y: -7 }}
                        >
                            <img src={image.src} alt={image.alt} />
                            <figcaption>{image.title}</figcaption>
                        </motion.figure>
                    ))}
                </div>
            </section>
        )}
    </>;
}