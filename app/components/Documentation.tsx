"use client";

import { useState } from "react";
import Image from "next/image";

type DocumentationProps = {
  images: string[];
  title: string;
};

export default function Documentation({
  images,
  title,
}: DocumentationProps) {
  const [currentImage, setCurrentImage] = useState(0);

  if (images.length === 0) return null;

  const nextImage = () => {
    setCurrentImage(
      (prev) => (prev + 1) % images.length
    );
  };

  const previousImage = () => {
    setCurrentImage(
      (prev) =>
        (prev - 1 + images.length) % images.length
    );
  };

  const visibleImages = Array.from(
    { length: Math.min(3, images.length) },
    (_, index) => ({
      src:
        images[
          (currentImage + index) % images.length
        ],
      originalIndex:
        (currentImage + index) % images.length,
    })
  );

  return (
    <section className="documentation">
      <div className="documentationHeader">
        <p className="documentationTitle">DOCUMENTATION</p>

        {images.length > 1 && (
          <div className="documentationActions">
            <button
              onClick={previousImage}
              aria-label="Previous image"
            >
              ←
            </button>

            <button
              onClick={nextImage}
              aria-label="Next image"
            >
              →
            </button>
          </div>
        )}
      </div>

      <div className="documentationGrid">
        {visibleImages.map((image, index) => (
          <div
            className="documentationImage"
            key={`${image.src}-${index}`}
          >
            <Image
              src={image.src}
              alt={`${title} documentation ${
                image.originalIndex + 1
              }`}
              fill
              sizes="(max-width: 700px) 100vw, 33vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}