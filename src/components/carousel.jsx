import React, { useEffect, useState, useCallback, useContext, createContext } from "react";
import { Button } from "react-bootstrap";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "./styles/carousel.css"; 

const CarouselContext = createContext(null);

// Hook to access carousel context
function useCarousel() {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}

// Main Carousel component
function Carousel({
  orientation = "horizontal",
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}) {
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    // Placeholder for scrollPrev logic
  }, []);

  const scrollNext = useCallback(() => {
    // Placeholder for scrollNext logic
  }, []);

  const handleKeyDown = useCallback((event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollPrev();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollNext();
    }
  }, [scrollPrev, scrollNext]);

  return (
    <CarouselContext.Provider
      value={{
        orientation,
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div
        onKeyDownCapture={handleKeyDown}
        className={`carousel-wrapper ${className}`}
        role="region"
        aria-roledescription="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

// CarouselContent component
function CarouselContent({ className, ...props }) {
  const { orientation } = useCarousel();
  return (
    <div className="carousel-content">
      <div
        className={`carousel-inner ${orientation === "horizontal" ? "horizontal" : "vertical"} ${className}`}
        {...props}
      />
    </div>
  );
}

// CarouselItem component
function CarouselItem({ className, ...props }) {
  const { orientation } = useCarousel();
  return (
    <div
      role="group"
      aria-roledescription="slide"
      className={`carousel-item ${orientation === "horizontal" ? "horizontal" : "vertical"} ${className}`}
      {...props}
    />
  );
}

// CarouselPrevious button
function CarouselPrevious({ className, ...props }) {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();
  return (
    <Button
      className={`carousel-prev ${orientation === "horizontal" ? "horizontal" : "vertical"} ${className}`}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft />
      <span className="visually-hidden">Previous slide</span>
    </Button>
  );
}

// CarouselNext button
function CarouselNext({ className, ...props }) {
  const { orientation, scrollNext, canScrollNext } = useCarousel();
  return (
    <Button
      className={`carousel-next ${orientation === "horizontal" ? "horizontal" : "vertical"} ${className}`}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight />
      <span className="visually-hidden">Next slide</span>
    </Button>
  );
}

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
};
