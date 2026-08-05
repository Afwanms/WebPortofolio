"use client";

import { useState } from "react";
import Image from "next/image";

type WorkDocumentationProps = {
  images: string[];
  company: string;
};

export default function WorkDocumentation({
  images,
  company,
}: WorkDocumentationProps) {
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
      src: images[(currentImage + index) % images.length],
      originalIndex:
        (currentImage + index) % images.length,
    })
  );

  return (
    <section className="workDocumentation">
      <div className="workDocumentationHeader">
        <div>
          <p>DOCUMENTATION</p>
        </div>

        {images.length > 1 && (
          <div className="workDocumentationActions">
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

      <div className="workDocumentationGrid">
        {visibleImages.map((image, index) => (
          <div
            className="workDocumentationImage"
            key={`${image.src}-${index}`}
          >
            <Image
              src={image.src}
              alt={`${company} documentation ${
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