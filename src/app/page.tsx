import { MenuAside } from "@/components/menuAside/MenuAside";
import { StyledHeader, StyledMain } from "./styles";
import { MainSection } from "@/components/home/mainSection/MainSection";
import { ListNextMatches } from "@/components/home/listNextMatches/ListNextMatches";

export default function Home() {
  return (
    <>
      {" "}
      <StyledHeader>
        <p>Home</p>
      </StyledHeader>
      <StyledMain>
        <MenuAside />
        <MainSection />
        <ListNextMatches />
      </StyledMain>
    </>
  );
}
