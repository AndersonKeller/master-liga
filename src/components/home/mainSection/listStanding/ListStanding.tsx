import { StyledContainer, StyledListStanding } from "./styles";

export function ListStanding() {
  return (
    <StyledContainer>
      <StyledListStanding>
        <h3>Classificação</h3>
        <li>
          <p>1 Liverpoll</p>
          <span>111</span>
        </li>
        <li>
          <p>2 Liverpoll</p>
          <span>111</span>
        </li>
        <li>
          <p> 3 Liverpoll</p>
          <span>111</span>
        </li>
      </StyledListStanding>
      <StyledListStanding>
        <h3>Goleadores</h3>
        <li>
          <p>1 Salah</p>
          <span>10</span>
        </li>
        <li>
          <p>1 Salah</p>
          <span>10</span>
        </li>
        <li>
          <p>1 Salah</p>
          <span>10</span>
        </li>
      </StyledListStanding>
    </StyledContainer>
  );
}
