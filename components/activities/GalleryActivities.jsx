"use client";

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import "yet-another-react-lightbox/styles.css";

export default function GalleryActivities({ openIndex, setOpenIndex, activities }) {
  const activeGallery =
    openIndex >= 0 && activities[0]?.gallery 
      ? activities[0].gallery.map((src) => ({ src })) 
      : [];
      
  return (
    <Lightbox
      open={openIndex >= 0}
      close={() => setOpenIndex(-1)}
      slides={activeGallery}
      plugins={[Zoom, Slideshow]}
    />
  );
}