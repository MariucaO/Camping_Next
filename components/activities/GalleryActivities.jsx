"use client";

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import "yet-another-react-lightbox/styles.css";

export default function GalleryActivities({
  openIndex,
  setOpneIndex,
  activities,
}) {
  const activeGallery =
    openIndex >= 0 ? activities[openIndex].gallery.map((src) => ({ src })) : [];
  return (
    <Lightbox
      open={openIndex >= 0}
      close={() => setOpneIndex(-1)}
      slides={activeGallery}
      plugins={[Zoom, Slideshow]}
      animation={{ fade: 300 }}
      carousel={{ infinite: false }}
      zoom={{ maxZoomPixelRatio: 3 }}
    />
  );
}
