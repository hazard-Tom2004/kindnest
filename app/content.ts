import SupportedLiving from "./supported-living/page";

export const images = {
  hero: "https://res.cloudinary.com/duhpmbxst/image/upload/v1788010462/nathan-anderson-FHiJWoBodrs-unsplash_ykvnhb.jpg", 
  family: "https://res.cloudinary.com/duhpmbxst/image/upload/v1788008789/pexels-shkrabaanthony-7345465_jpes2h.jpg", 
  hands: "https://res.cloudinary.com/duhpmbxst/image/upload/v1788008777/rewired-digital-4UFIg9htJgE-unsplash_it5heh.jpg", 
  kitchen: "https://res.cloudinary.com/duhpmbxst/image/upload/v1788008800/supported-living-kitchen_twtcje.jpg", 
  SupportedLiving1: "https://res.cloudinary.com/duhpmbxst/image/upload/v1788013888/Medicaid_Cuts_In_Wisconsin_Would_Undermine_wxhlxp.jpg",
  garden: "https://res.cloudinary.com/duhpmbxst/image/upload/v1788008801/children-garden_ff8o9c.jpg", 
  professionals: "https://res.cloudinary.com/duhpmbxst/image/upload/v1788008784/pexels-jsme-mila-523821574-18459198_navyhw.jpg", 
  reading: "https://res.cloudinary.com/duhpmbxst/image/upload/v1788008806/professionals2_dlenoy.jpg", 
  walk: "https://res.cloudinary.com/duhpmbxst/image/upload/v1788008800/walk-support_pvnt2m.jpg",
  logo: "/images/logo.png",
  children1: "https://res.cloudinary.com/duhpmbxst/image/upload/v1788008785/hands-drawing_dr3brh.jpg",
  professionals2: "https://res.cloudinary.com/duhpmbxst/image/upload/v1788010963/pexels-gustavo-fring-7447263_cybfxy.jpg",
  whatWeDo: "https://res.cloudinary.com/duhpmbxst/image/upload/v1788008800/what-we-do_dojzsk.jpg",
  whatWeDo1: "https://res.cloudinary.com/duhpmbxst/image/upload/v1788008777/rewired-digital-4UFIg9htJgE-unsplash_it5heh.jpg",
  whatWeDo2: "https://res.cloudinary.com/duhpmbxst/image/upload/v1788008795/hands-drawing-11_si5hqs.jpg",
  supportedLiving: "https://res.cloudinary.com/duhpmbxst/image/upload/v1788008787/supported-living_nlci77.jpg",
  supportedliving2: "https://res.cloudinary.com/duhpmbxst/image/upload/v1788013889/Library_Time__A_Modified_Storytime_for_Adults_with_Intellectual_Disabilities_imqyrl.jpg",
  supportedCare: "https://res.cloudinary.com/duhpmbxst/image/upload/v1788013889/Caregiving_for_People_with_Intellectual_Disabilities_c4khhz.jpg",
  child: "https://res.cloudinary.com/duhpmbxst/image/upload/v1788008784/pexels-pavel-danilyuk-8422262_bnti7c.jpg",
  childCare: "https://res.cloudinary.com/duhpmbxst/image/upload/v1788008781/pexels-pnw-prod-7328543_dynuqi.jpg",
  childCare2: "https://res.cloudinary.com/duhpmbxst/image/upload/v1788008779/pexels-keira-burton-6624421_e843vp.jpg",
  childCare3: "https://res.cloudinary.com/duhpmbxst/image/upload/v1788008775/pexels-alex-green-5692640_eyhx5u.jpg",
  contact1: "https://res.cloudinary.com/duhpmbxst/image/upload/v1788055374/manager-writing-notes-phone-call_brvpr2.jpg",
  contact2: "https://res.cloudinary.com/duhpmbxst/image/upload/v1788055553/cheerful-woman-using-laptop-smartphone_1_retps0.jpg",
  contact3: "https://res.cloudinary.com/duhpmbxst/image/upload/v1788055373/contact-us-communication-support-service-assistance-concept_fyuiba.jpg",
  gallery1: "https://res.cloudinary.com/duhpmbxst/image/upload/v1788008805/IMG-20260826-WA0037_uncdnh.jpg",
  gallery2: "https://res.cloudinary.com/duhpmbxst/image/upload/v1788008805/IMG-20260826-WA0036_vnlf6h.jpg",
  gallery3: "https://res.cloudinary.com/duhpmbxst/image/upload/v1788008804/IMG-20260826-WA0033_gxx1cz.jpg",
  gallery4: "https://res.cloudinary.com/duhpmbxst/image/upload/v1788008804/IMG-20260826-WA0035_wihqbi.jpg",
  gallery5: "https://res.cloudinary.com/duhpmbxst/image/upload/v1788008803/IMG-20260826-WA0030_t6dvdt.jpg",
  gallery6: "https://res.cloudinary.com/duhpmbxst/image/upload/v1788008803/IMG-20260826-WA0034_iqhv1i.jpg",
  gallery7: "https://res.cloudinary.com/duhpmbxst/image/upload/v1788008803/IMG-20260826-WA0032_io44fk.jpg",
  gallery8: "https://res.cloudinary.com/duhpmbxst/image/upload/v1788008803/IMG-20260826-WA0031_jukkl3.jpg",
  accreditation1: "https://res.cloudinary.com/duhpmbxst/image/upload/v1788093677/8_syhiox.avif",
  accreditation2: "https://res.cloudinary.com/duhpmbxst/image/upload/v1788093676/3_jn4gzi.avif",
  accreditation3: "https://res.cloudinary.com/duhpmbxst/image/upload/v1788093674/6_ufgcaj.avif",
  accreditation4: "https://res.cloudinary.com/duhpmbxst/image/upload/v1788093674/7_mqllbl.avif",
  accreditation5: "https://res.cloudinary.com/duhpmbxst/image/upload/v1788093674/2_owhzzg.avif",
  accreditation6: "https://res.cloudinary.com/duhpmbxst/image/upload/v1788093674/5_nzg5aa.avif",
};

// Replace any path below with its Cloudinary delivery URL. Hero images use plain <img>
// elements, so Cloudinary URLs work immediately without additional Next.js setup.
export const heroImages = {
  home: [images.hero, images.family, images.hands],
  about: [images.professionals, images.professionals2, images.reading],
  whatWeDo: [images.whatWeDo, images.whatWeDo1, images.whatWeDo2],
  supportedLiving: [images.supportedLiving, images.SupportedLiving1, images.supportedliving2],
  childrenContact: [images.garden, images.children1, images.hands],
  contact: [images.contact1, images.contact2, images.contact3],
  gallery: [images.gallery7, images.gallery5, images.gallery4],

} as const;

// Paste your seven Cloudinary image URLs here when they are ready.
export const galleryImages = [
  { src: images.gallery1, alt: "Family walking together outdoors", title: "Outdoor" },
  { src: images.gallery2, alt: "Adult and child drawing together", title: "Compound" },
  { src: images.gallery3, alt: "Supported living kitchen activity", title: "Side View" },
  { src: images.gallery4, alt: "Children playing outside", title: "Front View" },
  { src: images.gallery5, alt: "Adult reading with a child", title: "Outdoor Space" },
  { src: images.gallery6, alt: "Support worker walking with an adult", title: "Living Room" },
  { src: images.gallery7, alt: "Professionals meeting together", title: "Kitchen" },
  { src: images.gallery8, alt: "Professionals meeting together", title: "Mini Garden" },
] as const;

export const accreditations = [
  { src: images.accreditation1, alt: "Family walking together outdoors", title: "Outdoor" },
  { src: images.accreditation2, alt: "Adult and child drawing together", title: "Compound" },
  { src: images.accreditation3, alt: "Supported living kitchen activity", title: "Side View" },
  { src: images.accreditation4, alt: "Children playing outside", title: "Front View" },
  { src: images.accreditation5, alt: "Adult reading with a child", title: "Outdoor Space" },
  { src: images.accreditation6, alt: "Support worker walking with an adult", title: "Living Room" },
] as const;
export const slides = [
  { src: images.family, title: "Families, supported through complexity", text: "Assessments, interventions and practical guidance that help families move towards safe, sustainable change." },
  { src: images.supportedCare, title: "Every child deserves to be heard", text: "Trauma-informed, child-centred practice that looks beyond the presenting issue to the whole picture." },
  { src: images.whatWeDo, title: "What we do", text: "Kindnest is built around two specialist services: person-centred Supported Living for adults, and a child-led Children Contact Service for families navigating separation or professional involvement." }
];
export const services = [
  ["01", "Children & Families Social Work", "Family and parenting assessments, relationship work, safeguarding and Section 7 reports."],
  ["02", "Safeguarding & Risk", "Early identification, safety planning and considered professional consultation."],
  ["03", "Parenting & Family Support", "Trauma-informed guidance, routines, boundaries and emotional regulation."],
  ["04", "Adult Social Work Services", "Assessments, advocacy, care planning and community-based interventions."],
  ["05", "Independent Social Work & Consultancy", "Independent assessments, audits, quality assurance and expert report writing."]
] as const;
