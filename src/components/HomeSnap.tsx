"use client";

import { useEffect } from "react";

/** Enables section scroll-snapping on the homepage document scroller. */
export function HomeSnap() {
  useEffect(() => {
    document.documentElement.classList.add("home-snap");
    return () => document.documentElement.classList.remove("home-snap");
  }, []);

  return null;
}
