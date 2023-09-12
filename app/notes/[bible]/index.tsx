import { router, useLocalSearchParams } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import styled from "styled-components/native";
import { FlatList } from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { INote } from "../../../types";

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

export default function Page() {
  const { bible } = useLocalSearchParams();
  const [notes, setNotes] = useState<INote[]>([]);

  const getData = async () => {
    try {
      if (bible && typeof bible === "string") {
        const data = await AsyncStorage.getItem(decodeURI(bible));
        const parsedData = data ? JSON.parse(data) : [];
        if (parsedData) {
          const fullyParsedArray = parsedData.map((item: string) => {
            return JSON.parse(item);
          });
          console.log(fullyParsedArray);
          setNotes(fullyParsedArray);
        } else {
        }
      }
    } catch (e) {
      console.log(e);
      // error reading value
    }
  };

  useEffect(() => {
    getData();
  }, [bible]);

  return (
    <StyledContainer>
      <StyledHeader>
        <StyledTitle>
          {bible && typeof bible === "string" ? decodeURI(bible) : ""}
        </StyledTitle>
      </StyledHeader>

      <FlatList
        data={notes}
        renderItem={({ item }) => (
          <StyledCard
            onPress={() =>
              router.push({
                pathname: "/notes/[bible]/[id]",
                params: {
                  bible: `${item.bible}`,
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
