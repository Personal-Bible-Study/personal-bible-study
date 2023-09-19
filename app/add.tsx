import { useState } from "react";
import Picker from "@ouroboros/react-native-picker";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import styled from "styled-components/native";
import * as Crypto from "expo-crypto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

const bibles = [
  {
    text: "창세기",
    value: "창세기",
  },
  {
    text: "출애굽기",
    value: "출애굽기",
  },
  {
    text: "레위기",
    value: "레위기",
  },
  {
    text: "민수기",
    value: "민수기",
  },
  {
    text: "신명기",
    value: "신명기",
  },
  {
    text: "여호수아",
    value: "여호수아",
  },
  {
    text: "사사기",
    value: "사사기",
  },
  {
    text: "룻기",
    value: "룻기",
  },
  {
    text: "사무엘상",
    value: "사무엘상",
  },
  {
    text: "사무엘하",
    value: "사무엘하",
  },
  {
    text: "열왕기상",
    value: "열왕기상",
  },
  {
    text: "열왕기하",
    value: "열왕기하",
  },
  {
    text: "역대상",
    value: "역대상",
  },
  {
    text: "역대하",
    value: "역대하",
  },
  {
    text: "에스라",
    value: "에스라",
  },
  {
    text: "느헤미야",
    value: "느헤미야",
  },
  {
    text: "에스더",
    value: "에스더",
  },
  {
    text: "욥기",
    value: "욥기",
  },
  {
    text: "시편",
    value: "시편",
  },
  {
    text: "잠언",
    value: "잠언",
  },
  {
    text: "전도서",
    value: "전도서",
  },
  {
    text: "아가",
    value: "아가",
  },
  {
    text: "이사야",
    value: "이사야",
  },
  {
    text: "예레미야",
    value: "예레미야",
  },
  {
    text: "예레미야애가",
    value: "예레미야애가",
  },
  {
    text: "에스겔",
    value: "에스겔",
  },
  {
    text: "다니엘",
    value: "다니엘",
  },
  {
    text: "호세아",
    value: "호세아",
  },
  {
    text: "요엘",
    value: "요엘",
  },
  {
    text: "아모스",
    value: "아모스",
  },
  {
    text: "오바댜",
    value: "오바댜",
  },
  {
    text: "요나",
    value: "요나",
  },
  {
    text: "미가",
    value: "미가",
  },
  {
    text: "나훔",
    value: "나훔",
  },
  {
    text: "하박국",
    value: "하박국",
  },
  {
    text: "스바냐",
    value: "스바냐",
  },
  {
    text: "학개",
    value: "학개",
  },
  {
    text: "스가랴",
    value: "스가랴",
  },
  {
    text: "말라기",
    value: "말라기",
  },
  {
    text: "마태복음",
    value: "마태복음",
  },
  {
    text: "마가복음",
    value: "마가복음",
  },
  {
    text: "누가복음",
    value: "누가복음",
  },
  {
    text: "요한복음",
    value: "요한복음",
  },
  {
    text: "사도행전",
    value: "사도행전",
  },
  {
    text: "로마서",
    value: "로마서",
  },
  {
    text: "고린도전서",
    value: "고린도전서",
  },
  {
    text: "고린도후서",
    value: "고린도후서",
  },
  {
    text: "갈라디아서",
    value: "갈라디아서",
  },
  {
    text: "에베소서",
    value: "에베소서",
  },
  {
    text: "빌립보서",
    value: "빌립보서",
  },
  {
    text: "골로새서",
    value: "골로새서",
  },
  {
    text: "데살로니가전서",
    value: "데살로니가전서",
  },
  {
    text: "데살로니가후서",
    value: "데살로니가후서",
  },
  {
    text: "디모데전서",
    value: "디모데전서",
  },
  {
    text: "디모데후서",
    value: "디모데후서",
  },
  {
    text: "디도서",
    value: "디도서",
  },
  {
    text: "빌레몬서",
    value: "빌레몬서",
  },
  {
    text: "히브리서",
    value: "히브리서",
  },
  {
    text: "야고보서",
    value: "야고보서",
  },
  {
    text: "베드로전서",
    value: "베드로전서",
  },
  {
    text: "베드로후서",
    value: "베드로후서",
  },
  {
    text: "요한일서",
    value: "요한일서",
  },
  {
    text: "요한이서",
    value: "요한이서",
  },
  {
    text: "요한삼서",
    value: "요한삼서",
  },
  {
    text: "유다서",
    value: "유다서",
  },
  {
    text: "요한계시록",
    value: "요한계시록",
  },
];

const StyledContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding-left: 5%;
  padding-right: 5%;
`;

const StyledInput = styled.TextInput`
  height: 45px;
  min-width: 100%;
  border-width: 1px;
  border-radius: 4px;
  padding: 12px;
  font-size: 18px;
  margin-bottom: 14px;
  border-color: #c0c5c5;
`;

const StyledTextarea = styled.TextInput`
  height: 210px;
  min-width: 100%;
  border-width: 1px;
  border-radius: 4px;
  padding: 12px;
  font-size: 18px;
  margin-bottom: 14px;
  border-color: #c0c5c5;
`;

const StyledLabel = styled.Text`
  width: 100%;
  margin-bottom: 5px;
  font-size: 15px;
`;

const StyledSubmitBtn = styled.TouchableOpacity`
  width: 100%;
  padding: 16px;
  justify-content: center;
  align-items: center;
  background-color: #cc4f4f;
  border-radius: 4px;
  margin-top: 10px;
`;

export default function Page() {
  const [bible, setBible] = useState("창세기");
  const [verses, onChangeVerses] = useState("");
  const [content, onChangeContent] = useState("");

  const onSubmit = async () => {
    try {
      const id = Crypto.randomUUID();
      const res = await AsyncStorage.getItem("bibleCategories");
      const bibleCategoriesData = res ? JSON.parse(res) : "";
      let newBibleCategoriesData = bibleCategoriesData;

      if (bibleCategoriesData && !bibleCategoriesData.includes(bible)) {
        newBibleCategoriesData = [...bibleCategoriesData, bible];
      } else if (!bibleCategoriesData) {
        newBibleCategoriesData = [bible];
      }

      await AsyncStorage.setItem(
        "bibleCategories",
        JSON.stringify(newBibleCategoriesData)
      );

      const bibleNotes = await AsyncStorage.getItem(bible);
      const parsedBibleNotes = bibleNotes ? JSON.parse(bibleNotes) : "";

      const data = {
        id,
        bible,
        verses,
        content,
        date: new Date().toISOString().split("T")[0],
      };
      const jsonValue = JSON.stringify(data);
      const newBibleNotes = [...parsedBibleNotes, jsonValue];
      await AsyncStorage.setItem(id, jsonValue);
      await AsyncStorage.setItem(bible, JSON.stringify(newBibleNotes));

      router.push("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <StyledContainer>
          <StyledLabel>성경</StyledLabel>
          <Picker
            onChanged={setBible}
            options={bibles}
            value={bible}
            style={{
              height: 45,
              minWidth: "100%",
              borderWidth: 1,
              borderRadius: 4,
              padding: 12,
              fontSize: 18,
              marginBottom: 14,
              borderColor: "#c0c5c5",
            }}
          />

          <StyledLabel>말씀 주소</StyledLabel>
          <StyledInput onChangeText={onChangeVerses} value={verses} />

          <StyledLabel>내용</StyledLabel>
          <StyledTextarea
            onChangeText={onChangeContent}
            value={content}
            multiline={true}
            numberOfLines={5}
          />
          <StyledSubmitBtn onPress={onSubmit}>
            <Text style={{ color: "white" }}>업로드</Text>
          </StyledSubmitBtn>
        </StyledContainer>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
