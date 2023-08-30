import { Link } from "expo-router";
import styled from "styled-components/native";

const StyledContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

export default function Page() {
  return (
    <StyledContainer>
      <Link replace href="home">
        Login page
      </Link>
    </StyledContainer>
  );
}
