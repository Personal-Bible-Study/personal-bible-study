import { Link } from "expo-router";
import { Text } from "react-native";
import styled from "styled-components/native";

const StyledContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default function Page() {
  return (
    <StyledContainer>
      <Link href="home">Add Page</Link>
    </StyledContainer>
  );
}
