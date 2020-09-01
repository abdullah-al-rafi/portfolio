import React from "react";
import { useWindowScroll } from "react-use";

import "./top.css";

function Top() {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisibility] = React.useState(false);

  React.useEffect(() => {
    if (pageYOffset > 400) {
      setVisibility(true);
    } else {
      setVisibility(false);
    }
  }, [pageYOffset]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!visible) {
    return false;
  }

  return (
    <React.Fragment>
      <div class="page-wrapper">
        <div class="circle-wrapper"></div>
      </div>
      <div className="scroll-to-top text-center" onClick={scrollToTop}>
        <i className="icon fa fa-chevron-up"></i>
      </div>
    </React.Fragment>
  );
}

export default Top;
