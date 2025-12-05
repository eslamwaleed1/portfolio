import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { X } from "lucide-react";
import { useEffect } from "react";
import type { GalleryImage } from "../utils/imageLoader";

interface GalleryOverlayProps {
  images: GalleryImage[];
  onClose: () => void;
}

export function GalleryOverlay({ images, onClose }: GalleryOverlayProps) {
  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-60 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
        aria-label="Close gallery"
      >
        <X size={32} />
      </button>

      <div className="w-full max-w-5xl">
        <ImageGallery
          items={images}
          showPlayButton={false}
          showFullscreenButton={true}
          showThumbnails={true}
          showNav={true}
          autoPlay={false}
        />
      </div>
    </div>
  );
}
