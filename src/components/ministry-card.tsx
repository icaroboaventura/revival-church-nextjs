"use client";

import { useState } from "react";
import { MinistryResponse } from "../../pocketbase-types";
import pb from "@/lib/pocketbase";

interface MinistryCardProps {
  props: MinistryResponse;
}

export const MinistryCard = ({ props }: MinistryCardProps) => {
  const [isActive, setIsActive] = useState(false);

  const image = pb.files.getURL(props, props.ministryImg);

  return (
    <div
      className="group rounded-box relative min-h-96 w-80 cursor-pointer overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
      onClick={() => setIsActive(!isActive)}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Base Gradient Overlay */}
      <div className="from-primary/90 via-primary/50 absolute inset-0 bg-gradient-to-t to-transparent" />

      {/* Default Content - Ministry Name */}
      <div
        className={`absolute right-0 bottom-0 left-0 p-6 transition-opacity duration-300 ${isActive ? "opacity-0" : "opacity-100"}`}
      >
        <h3 className="font-playfair text-base-100 text-3xl font-bold uppercase drop-shadow-xl">
          {props.ministryTitle}
        </h3>
        <div className="bg-base-100/60 mt-2 h-0.5 w-16" />
      </div>

      {/* Hover/Active Content - Description */}
      <div
        className={`bg-primary/95 absolute inset-0 flex items-center justify-center p-6 transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0 md:group-hover:opacity-100"}`}
      >
        <div className="text-center">
          <h3 className="font-playfair text-base-100 mb-4 text-2xl font-bold uppercase">
            {props.ministryTitle}
          </h3>
          <div className="bg-base-100/60 mx-auto mb-4 h-0.5 w-20" />
          <div
            className="text-base-100 text-sm leading-relaxed"
            dangerouslySetInnerHTML={{ __html: props.ministryDescription }}
          />
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="bg-secondary absolute right-0 bottom-0 left-0 h-1 scale-x-0 transform transition-transform duration-300 group-hover:scale-x-100" />
    </div>
  );
};
