import { router } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import styled from "styled-components/native";
import { FlatList } from "react-native";

const StyledContainer = styled.View`
  color: #1a1d21;
  background-color: white;
  padding-left: 5%;
  padding-right: 5%;
  flex: 1;
`;

const StyledHeader = styled.View`
  padding-top: 10%;
  margin-bottom: 6%;
`;

const StyledTitle = styled.Text`
  font-size: 40px;
  font-weight: 600;
`;

const StyledCard = styled.TouchableOpacity`
  width: 100%;
  height: 170px;
  background-color: #d8dede;
  border-radius: 20px;
  justify-content: space-between;
  padding: 18px;
  margin-bottom: 2%;
`;

const StyledCardSmallTitle = styled.Text`
  color: #899493;
`;

const StyledCardCol = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledCardBigTitle = styled.Text`
  font-size: 42px;
  font-weight: 900;
`;

const notesData = [
  { id: 1, date: "2023-08-28", category: "요한복음", verses: "1:1-10" },
  { id: 2, date: "2023-08-28", category: "요한복음", verses: "1:10-20" },
  { id: 3, date: "2023-08-28", category: "요한복음", verses: "1:10-20" },
  { id: 4, date: "2023-08-28", category: "요한복음", verses: "1:10-20" },
  { id: 5, date: "2023-08-28", category: "요한복음", verses: "1:10-20" },
  { id: 6, date: "2023-08-28", category: "요한복음", verses: "1:10-20" },
  { id: 7, date: "2023-08-28", category: "요한복음", verses: "1:10-20" },
  { id: 8, date: "2023-08-28", category: "요한복음", verses: "1:10-20" },
  { id: 9, date: "2023-08-28", category: "요한복음", verses: "1:10-20" },
];

export default function Page() {
  return (
    <StyledContainer>
      <StyledHeader>
        <StyledTitle>요한복음</StyledTitle>
      </StyledHeader>

      <FlatList
        data={notesData}
        renderItem={({ item }) => (
          <StyledCard
            onPress={() =>
              router.push({
                pathname: "/notes/[bible]/[id]",
                params: {
                  bible: `${item.category}`,
                  id: `${item.id}`,
                },
              })
            }
          >
            <StyledCardCol>
              <StyledCardSmallTitle>{item.date}</StyledCardSmallTitle>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={34}
                color="black"
              />
            </StyledCardCol>
            <StyledCardCol>
              <StyledCardBigTitle>{item.verses}</StyledCardBigTitle>
            </StyledCardCol>
          </StyledCard>
        )}
      />
    </StyledContainer>
  );
}
