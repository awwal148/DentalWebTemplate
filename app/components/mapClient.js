// components/MapClient.js
"use client";

import dynamic from "next/dynamic";

// Dynamically import Map.js with SSR disabled
const DynamicMap = dynamic(() => import("./map"), {
  ssr: false,
});

export default function MapClient() {
  return <DynamicMap />;
}
