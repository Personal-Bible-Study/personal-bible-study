import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link, router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, Pressable, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styled from "styled-components/native";
import { INote } from "../../../types";

const StyledContainer = styled.ScrollView`
  color: #1a1d21;
  background-color: white;
  padding-left: 5%;
  padding-right: 5%;
  flex: 1;
`;

const StyledHeader = styled.View`
  margin-bottom: 6%;
`;

const StyledTitle = styled.Text`
  font-size: 40px;
  font-weight: 600;
`;

const StyledCategoryHeader = styled.View`
  padding-top: 5%;
  padding-bottom: 5%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 2px;
`;

const StyledCategoryRow = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 2px;
`;

const StyledCategoryText = styled.Text`
  color: #737e7e;
  font-size: 16px;
`;

const StyledBody = styled.View`
  padding-bottom: 15%;
`;

export default function Page() {
  const { bible, id } = useLocalSearchParams();
  const [noteData, setNoteData] = useState<INote>();

  const getData = async () => {
    try {
      if (id && typeof id === "string") {
        const data = await AsyncStorage.getItem(decodeURI(id));
        const parsedData = data ? JSON.parse(data) : null;
        setNoteData(parsedData);
      }
    } catch (e) {
      // error reading value
    }
  };

  const onClickDelete = async () => {
    if (!noteData) return;

    const bibleData = await AsyncStorage.getItem(noteData?.bible || "");
    const parsedBibleData = bibleData ? JSON.parse(bibleData) : null;
    const fullyParsedArray = parsedBibleData.map((item: string) => {
      return JSON.parse(item);
    });
    const filteredData = fullyParsedArray.filter(
      (i: INote) => i.id !== noteData?.id
    );
    await AsyncStorage.removeItem(noteData?.id);
    if (filteredData.length >= 1) {
      await AsyncStorage.setItem(
        decodeURI(typeof bible === "string" ? bible : ""),
        JSON.stringify(
          filteredData.map((item: string) => {
            return JSON.stringify(item);
          })
        )
      );
    } else {
      await AsyncStorage.removeItem(noteData.bible);
      const data = await AsyncStorage.getItem("bibleCategories");
      const bibleCategoriesData = data ? JSON.parse(data) : [];
      const filteredCategoriesData = bibleCategoriesData.filter(
        (i: string) => i !== noteData.bible
      );
      await AsyncStorage.setItem(
        "bibleCategories",
        JSON.stringify(filteredCategoriesData)
      );
    }
    router.push("/");
  };

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <StyledContainer>
      <StyledCategoryHeader>
        <StyledCategoryRow>
          <StyledCategoryText>
            {decodeURI(typeof bible === "string" ? bible : "")}
          </StyledCategoryText>
          <StyledCategoryText> - </StyledCategoryText>
          <StyledCategoryText>{noteData?.date}</StyledCategoryText>
        </StyledCategoryRow>
        <StyledCategoryRow>
          <TouchableOpacity
            onPress={() =>
              Alert.alert(
                "정말로 삭제하시겠어요?",
                "한 번 삭제한 노트는 다시 되돌릴 수 없어요.",
                [
                  {
                    text: "아니요",
                    style: "cancel",
                  },
                  { text: "네", onPress: onClickDelete },
                ],
                { cancelable: false }
              )
            }
          >
            <AntDesign name="delete" size={24} color="black" />
          </TouchableOpacity>
        </StyledCategoryRow>
      </StyledCategoryHeader>
      <StyledHeader>
        <StyledTitle>{noteData?.verses}</StyledTitle>
      </StyledHeader>
      <StyledBody>
        <Text>{noteData?.content}</Text>
      </StyledBody>
    </StyledContainer>
  );
}
