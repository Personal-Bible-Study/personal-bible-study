import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
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

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <StyledContainer>
      <StyledCategoryHeader>
        <StyledCategoryText>
          {decodeURI(typeof bible === "string" ? bible : "")}
        </StyledCategoryText>
        <StyledCategoryText> - </StyledCategoryText>
        <StyledCategoryText>{noteData?.date}</StyledCategoryText>
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
