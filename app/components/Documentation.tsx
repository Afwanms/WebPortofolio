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
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  if (images.length === 0) return null;

  // Clone terakhir + semua image + clone pertama
  const carouselImages = [
    images[images.length - 1],
    ...images,
    images[0],
  ];

  const nextImage = () => {
    if (isAnimating || images.length <= 1) return;

    setIsAnimating(true);
    setTransitionEnabled(true);

    setCurrentIndex((prev) => prev + 1);
  };

  const previousImage = () => {
    if (isAnimating || images.length <= 1) return;

    setIsAnimating(true);
    setTransitionEnabled(true);

    setCurrentIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    // 04 → clone 01
    if (currentIndex === images.length + 1) {
      setTransitionEnabled(false);
      setCurrentIndex(1);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransitionEnabled(true);
          setIsAnimating(false);
        });
      });

      return;
    }

    // 01 → clone 04
    if (currentIndex === 0) {
      setTransitionEnabled(false);
      setCurrentIndex(images.length);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransitionEnabled(true);
          setIsAnimating(false);
        });
      });

      return;
    }

    setIsAnimating(false);
  };

  const actualIndex =
    (currentIndex - 1 + images.length) %
    images.length;

  const goToImage = (index: number) => {
    if (isAnimating) return;

    setTransitionEnabled(true);
    setIsAnimating(true);
    setCurrentIndex(index + 1);
  };

  return (
    <section className="documentation">

      {/* HEADER */}
      <div className="documentationHeader">
        <h2 className="documentationTitle">
          DOCUMENTATION
        </h2>
      </div>


      {/* CAROUSEL */}
      <div className="documentationViewport">
        <div
          className="documentationTrack"
          style={{
            transform: `translateX(
              calc(
                -${currentIndex} *
                (
                  var(--documentation-slide-width) +
                  var(--documentation-gap)
                )
              )
            )`,

            transition: transitionEnabled
              ? "transform 0.75s cubic-bezier(0.16, 1, 0.3, 1)"
              : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {carouselImages.map((image, index) => (
            <div
              className={`documentationImage ${
                index === currentIndex
                  ? "active"
                  : ""
              }`}
              key={`${image}-${index}`}
            >
              <Image
                src={image}
                alt={`${title} documentation ${
                  index + 1
                }`}
                fill
                sizes="70vw"
              />
            </div>
          ))}
        </div>
      </div>


      {/* CONTROLS */}
      <div className="documentationControls">

        <button
          className="documentationArrow"
          onClick={previousImage}
          disabled={isAnimating}
          aria-label="Previous image"
        >
          ←
        </button>


        <div className="documentationDots">
          {images.map((_, index) => (
            <button
              key={index}
              className={
                index === actualIndex
                  ? "active"
                  : ""
              }
              onClick={() => goToImage(index)}
              disabled={isAnimating}
              aria-label={`Go to image ${
                index + 1
              }`}
            />
          ))}
        </div>


        <button
          className="documentationArrow"
          onClick={nextImage}
          disabled={isAnimating}
          aria-label="Next image"
        >
          →
        </button>

      </div>

    </section>
  );
}