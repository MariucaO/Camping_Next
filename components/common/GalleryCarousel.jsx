// components/GalleryCarousel.jsx

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

export default function GalleryCarousel({ index, setIndex, images }) {
  return (
    <Lightbox
      open={index >= 0}
      close={() => setIndex(-1)}
      index={index}
      slides={images.map((src) => ({ src }))}
      plugins={[Zoom]}
      animation={{ swipe: 300 }}
      carousel={{ finite: false }}
      zoom={{ maxZoomPixelRatio: 3 }}
    />
  );
}
