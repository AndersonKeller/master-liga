import Image from "next/image";
import { StyledMainSection } from "./styles";
import banner from "@/assets/banner.jpeg";
import { ListStanding } from "./listStanding/ListStanding";
export function MainSection() {
  return (
    <StyledMainSection>
      <div className="divImg">
        <Image
          className="imgBanner"
          src={banner}
          width={500}
          height={400}
          alt="banner"
        />
      </div>

      <ListStanding />
    </StyledMainSection>
  );
}
