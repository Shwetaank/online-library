"use client";

import { useEffect } from "react";

export function TawkScript() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/688831f22654bd1937ccbd96/1j1a067do";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    document.body.appendChild(script);
  }, []);

  return null;
}
