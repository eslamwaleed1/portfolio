import type { ReactNode } from "react";
import React from "react";
import ThumbnailImage from "../assets/pictures/thumbnail.png";

// Define a type for the glob result
type GlobResult = Record<string, { default: string }>;

// Import all images from the project_screenshots directory eagerly
const images = import.meta.glob('../assets/project_screenshots/**/*.{png,jpg,jpeg,svg,mp4}', {
  eager: true,
}) as GlobResult;

export interface GalleryImage {
  original: string;
  thumbnail: string;
  isVideo?: boolean;
  renderItem?: (item: GalleryImage) => ReactNode;
}

const renderVideo = (item: GalleryImage) => {
  return React.createElement(
    "div",
    { className: "image-gallery-image" },
    React.createElement(
      "video",
      {
        controls: true,
        className: "w-full h-full object-contain max-h-[80vh]",
        src: item.original,
      },
      "Your browser does not support the video tag."
    )
  );
};

export function getImagesForProject(projectPath: string): GalleryImage[] {
  const matchingImages = Object.keys(images).filter((key) => {
    return key.startsWith(projectPath);
  });

  return matchingImages.map((key) => {
    const isVideo = key.endsWith(".mp4");
    const url = images[key].default;
    
    return {
      original: url,
      thumbnail: isVideo ? ThumbnailImage : url,
      isVideo,
      renderItem: isVideo ? renderVideo : undefined,
    };
  });
}
