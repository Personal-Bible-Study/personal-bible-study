import { router, useFocusEffect } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import styled from "styled-components/native";
import { FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";

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
  background-color: #d8dede;
  border-radius: 20px;
  justify-content: space-between;
  padding: 24px 18px;
  margin-bottom: 3%;
`;

const StyledCardBigTitle = styled.Text`
  font-size: 28px;
  font-weight: 700;
`;

const StyledCardCol = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const AddBtn = styled.TouchableOpacity`
  width: 100px;
  height: 100px;
  border-radius: 20px;
  background-color: #cc4f4f;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 3%;
  right: 10%;
`;

export default function Page() {
  const [bibleCategories, setBibleCategories] = useState([]);

  const getData = async () => {
    try {
      const data = await AsyncStorage.getItem("bibleCategories");
      setBibleCategories(data ? JSON.parse(data) : []);
    } catch (e) {
      // error reading value
    }
  };

  useFocusEffect(() => {
    getData();
    // AsyncStorage.getAllKeys().then(AsyncStorage.multiRemove);
  });

  return (
    <StyledContainer>
      <StyledHeader>
        <StyledTitle>목록</StyledTitle>
      </StyledHeader>

      <FlatList
        data={bibleCategories}
        renderItem={({ item }) => (
          <StyledCard
            onPress={() =>
              router.push({
                pathname: "/notes/[bible]",
                params: { bible: `${item}` },
              })
            }
          >
            <StyledCardCol>
              <StyledCardBigTitle>{item}</StyledCardBigTitle>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={34}
                color="black"
              />
            </StyledCardCol>
          </StyledCard>
        )}
      />

      <AddBtn
        onPress={() => {
          router.push("add");
        }}
      >
        <AntDesign name="plus" size={24} color="white" />
      </AddBtn>
    </StyledContainer>
  );
}
