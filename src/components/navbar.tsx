/** @jsxRuntime classic /
/**@jsx jsx */
import Link from "next/link";
import { useRouter } from "next/router";
import { jsx } from "theme-ui";

export default function Navbar() {
  const home = useRouter().pathname === "/";

  return (
    <div
      sx={{
        display: "Flex",
        justifyContent: "space-around",
        backgroundColor: "muted",
        p: 3,
      }}
    >
      <Link href="/">
        <a
          sx={{
            pt: "2",
            variant: "containers.link",
            fontWeight: home ? "bold" : "normal",
          }}
        >
          Home
        </a>
      </Link>
      <Link href="/notes">
        <a
          sx={{
            pt: "2",
            variant: "containers.link",
            fontWeight: !home ? "bold" : "normal",
          }}
        >
          Notes
        </a>
      </Link>
    </div>
  );
}
