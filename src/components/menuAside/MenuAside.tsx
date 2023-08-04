import { StyledCardMenu, StyledMenuAside } from "./styles";
import { BsCalendar3, BsFillDatabaseFill } from "react-icons/bs";
import { MdStadium } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";
import { BiSolidInfoCircle } from "react-icons/bi";
// import {BsFillDatabaseFill} from "react-icons/"
import { IoIosOptions } from "react-icons/io";
export function MenuAside() {
  const menuItens = [
    { forwardTeam: "Agenda do time", icon: <BsCalendar3 /> },
    { teamManagement: "Gerenciamento do time", icon: <MdStadium /> },
    { myTeamInfo: "Informações do time", icon: <BiSolidInfoCircle /> },
    { managerOffice: "Escirtório do treinador", icon: <GrUserManager /> },
    { database: "Database", icon: <BsFillDatabaseFill /> },
    { system: "Sistema", icon: <IoIosOptions /> },
  ];
  return (
    <StyledMenuAside>
      {menuItens.map((item) => (
        <StyledCardMenu>
          {Object.values(item)[1]}
          <p>{Object.values(item)[0]}</p>
        </StyledCardMenu>
      ))}
    </StyledMenuAside>
  );
}
