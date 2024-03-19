"use client";

import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

function LenisSmoothScroll({children}: Readonly<{
  children: React.ReactNode;
}>) {
  // const lenis = useLenis(( scroll ) => {
  //   // called every scroll event
  // });

  return (
    <ReactLenis root>
      {children}
    </ReactLenis>
  )
}

export default LenisSmoothScroll