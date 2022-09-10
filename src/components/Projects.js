import React from "react";
import Mobile from "./Mobile";
import Desktop from "./Desktop";


export default function Projects() {

  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 620;
  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return width < breakpoint ? <Mobile /> : <Desktop />;

}
