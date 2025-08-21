"use client";

import { useState } from "react";
import { IconCalendar, IconMapPin, IconClock } from "@tabler/icons-react";
import pb from "@/lib/pocketbase";
import { EventsResponse } from "../../pocketbase-types";

interface EventCardProps {
  props: EventsResponse;
}

export const EventCard = ({ props }: EventCardProps) => {
  const [isActive, setIsActive] = useState(false);

  const imageUrl = pb.files.getURL(props, props.eventImg);

  return (
    <div
      className="group rounded-box relative h-96 w-80 cursor-pointer overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
      onClick={() => setIsActive(!isActive)}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      {/* Base Gradient Overlay */}
      <div className="from-primary/90 via-primary/50 absolute inset-0 bg-gradient-to-t to-transparent" />

      {/* Default Content - Event Info */}
      <div
        className={`absolute right-0 bottom-0 left-0 p-6 transition-opacity duration-300 ${isActive ? "opacity-0" : "opacity-100"}`}
      >
        <div className="text-base-100/80 mb-3 flex items-center gap-2">
          <IconCalendar className="size-4" />
          <span className="text-sm font-medium">{props.eventDate}</span>
        </div>

        <h3 className="font-playfair text-base-100 mb-2 text-2xl font-bold uppercase drop-shadow-xl">
          {props.eventTitle}
        </h3>

        <div className="text-base-100/70 flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1">
            <IconClock className="size-4" />
            <span>{props.eventTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <IconMapPin className="size-4" />
            <span>{props.eventLocation}</span>
          </div>
        </div>

        <div className="bg-base-100/60 mt-3 h-0.5 w-16" />
      </div>

      {/* Hover/Active Content - Description */}
      <div
        className={`bg-primary/95 absolute inset-0 flex items-center justify-center p-6 transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0 md:group-hover:opacity-100"}`}
      >
        <div className="text-center">
          <div className="text-base-100/80 mb-2 flex items-center justify-center gap-2">
            <IconCalendar className="size-4" />
            <span className="text-sm font-medium">{props.eventDate}</span>
          </div>

          <h3 className="font-playfair text-base-100 mb-3 text-xl font-bold uppercase">
            {props.eventTitle}
          </h3>

          <div className="bg-base-100/60 mx-auto mb-4 h-0.5 w-20" />

          <div
            className="text-base-100 mb-4 text-sm leading-relaxed"
            dangerouslySetInnerHTML={{ __html: props.eventText }}
          />

          <div className="text-base-100/80 flex items-center justify-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <IconClock className="size-4" />
              <span>{props.eventTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <IconMapPin className="size-4" />
              <span>{props.eventLocation}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="bg-secondary absolute right-0 bottom-0 left-0 h-1 scale-x-0 transform transition-transform duration-300 group-hover:scale-x-100" />
    </div>
  );
};
