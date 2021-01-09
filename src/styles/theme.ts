import { funk } from "@theme-ui/presets";
import { Theme } from "theme-ui";
const theme: Theme = {
  ...funk,
  styles: {
    ...funk.styles,
    root: {
      ...funk.styles.root,
      "::-webkit-scrollbar": {
        width: "0px",
        background: "transparent",
      },
      m: 1,
      mt: 0,
      overflow: "scroll",
      scrollBehavior: "smooth",
      scrollbarWidth: "none",
      scrollbarColor: "violet",
    },
  },

  containers: {
    link: {
      cursor: "pointer",
      textDecoration: "none",
    },
  },
  cards: {
    primary: {
      borderRadius: 3,
      border: "2px dotted",
      padding: 4,
      maxWidth: 500,
      position: "initial",
    },
  },
};

export default theme;
