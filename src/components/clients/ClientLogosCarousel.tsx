import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface Client {
  name: string;
  logo?: string;
}

interface ClientLogosCarouselProps {
  clients: Client[];
  className?: string;
}

const ClientLogosCarousel: React.FC<ClientLogosCarouselProps> = ({
  clients,
  className,
}) => {
  const autoplayOptions = {
    delay: 3000,
    rootNode: (emblaRoot: HTMLElement) => emblaRoot.parentElement,
  };

  return (
    <div className={cn("w-full py-0", className)}>
      <Carousel
        opts={{
          loop: true,
          align: "start",
          dragFree: true,
        }}
        plugins={[Autoplay(autoplayOptions)]}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {clients.map((client, index) => (
            <CarouselItem
              key={index}
              className="pl-4 md:basis-1/3 lg:basis-1/5"
            >
              <motion.div
                initial={{ opacity: 0.7 }}
                whileHover={{
                  opacity: 1,
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                className="flex flex-col items-center justify-center h-24 p-4 client-logo"
              >
                {client.logo ? (
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-16 max-w-full object-contain"
                  />
                ) : (
                  <div className="text-white font-medium text-lg">
                    {client.name}
                  </div>
                )}
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ClientLogosCarousel;
