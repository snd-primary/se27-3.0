import { ColorModeToggle, Header } from "@components";
import { ColorModeProvider } from "@context";
import { text } from "@styles/pages/top.css";
import type { NextPage } from "next";

const home: NextPage = () => {
  return (
    <ColorModeProvider>
      <Header home={true} />
      <p className={text}>
        このフf全角ffzzシックアンティークというやつで、GoogleFontsから取ってきました
      </p>
    </ColorModeProvider>
  );
};

export default home;
