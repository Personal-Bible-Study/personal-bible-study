import { useState } from "react";
import RNPickerSelect from "react-native-picker-select";
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
    label: "창세기",
    value: "창세기",
  },
  {
    label: "출애굽기",
    value: "출애굽기",
  },
  {
    label: "레위기",
    value: "레위기",
  },
  {
    label: "민수기",
    value: "민수기",
  },
  {
    label: "신명기",
    value: "신명기",
  },
  {
    label: "여호수아",
    value: "여호수아",
  },
  {
    label: "사사기",
    value: "사사기",
  },
  {
    label: "룻기",
    value: "룻기",
  },
  {
    label: "사무엘상",
    value: "사무엘상",
  },
  {
    label: "사무엘하",
    value: "사무엘하",
  },
  {
    label: "열왕기상",
    value: "열왕기상",
  },
  {
    label: "열왕기하",
    value: "열왕기하",
  },
  {
    label: "역대상",
    value: "역대상",
  },
  {
    label: "역대하",
    value: "역대하",
  },
  {
    label: "에스라",
    value: "에스라",
  },
  {
    label: "느헤미야",
    value: "느헤미야",
  },
  {
    label: "에스더",
    value: "에스더",
  },
  {
    label: "욥기",
    value: "욥기",
  },
  {
    label: "시편",
    value: "시편",
  },
  {
    label: "잠언",
    value: "잠언",
  },
  {
    label: "전도서",
    value: "전도서",
  },
  {
    label: "아가",
    value: "아가",
  },
  {
    label: "이사야",
    value: "이사야",
  },
  {
    label: "예레미야",
    value: "예레미야",
  },
  {
    label: "예레미야애가",
    value: "예레미야애가",
  },
  {
    label: "에스겔",
    value: "에스겔",
  },
  {
    label: "다니엘",
    value: "다니엘",
  },
  {
    label: "호세아",
    value: "호세아",
  },
  {
    label: "요엘",
    value: "요엘",
  },
  {
    label: "아모스",
    value: "아모스",
  },
  {
    label: "오바댜",
    value: "오바댜",
  },
  {
    label: "요나",
    value: "요나",
  },
  {
    label: "미가",
    value: "미가",
  },
  {
    label: "나훔",
    value: "나훔",
  },
  {
    label: "하박국",
    value: "하박국",
  },
  {
    label: "스바냐",
    value: "스바냐",
  },
  {
    label: "학개",
    value: "학개",
  },
  {
    label: "스가랴",
    value: "스가랴",
  },
  {
    label: "말라기",
    value: "말라기",
  },
  {
    label: "마태복음",
    value: "마태복음",
  },
  {
    label: "마가복음",
    value: "마가복음",
  },
  {
    label: "누가복음",
    value: "누가복음",
  },
  {
    label: "요한복음",
    value: "요한복음",
  },
  {
    label: "사도행전",
    value: "사도행전",
  },
  {
    label: "로마서",
    value: "로마서",
  },
  {
    label: "고린도전서",
    value: "고린도전서",
  },
  {
    label: "고린도후서",
    value: "고린도후서",
  },
  {
    label: "갈라디아서",
    value: "갈라디아서",
  },
  {
    label: "에베소서",
    value: "에베소서",
  },
  {
    label: "빌립보서",
    value: "빌립보서",
  },
  {
    label: "골로새서",
    value: "골로새서",
  },
  {
    label: "데살로니가전서",
    value: "데살로니가전서",
  },
  {
    label: "데살로니가후서",
    value: "데살로니가후서",
  },
  {
    label: "디모데전서",
    value: "디모데전서",
  },
  {
    label: "디모데후서",
    value: "디모데후서",
  },
  {
    label: "디도서",
    value: "디도서",
  },
  {
    label: "빌레몬서",
    value: "빌레몬서",
  },
  {
    label: "히브리서",
    value: "히브리서",
  },
  {
    label: "야고보서",
    value: "야고보서",
  },
  {
    label: "베드로전서",
    value: "베드로전서",
  },
  {
    label: "베드로후서",
    value: "베드로후서",
  },
  {
    label: "요한일서",
    value: "요한일서",
  },
  {
    label: "요한이서",
    value: "요한이서",
  },
  {
    label: "요한삼서",
    value: "요한삼서",
  },
  {
    label: "유다서",
    value: "유다서",
  },
  {
    label: "요한계시록",
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
  const [bible, setBible] = useState("");
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
          <RNPickerSelect
            items={bibles}
            fixAndroidTouchableBug
            value={bible}
            onValueChange={(value: string) => setBible(value)}
            style={{
              inputIOS: {
                height: 40,
                width: "100%",
                borderWidth: 1,
                borderRadius: 4,
                padding: 12,
                fontSize: 18,
                marginBottom: 14,
                borderColor: "#C0C5C5",
              },
              inputAndroid: {
                height: 40,
                width: "100%",
                borderWidth: 1,
                borderRadius: 4,
                padding: 12,
                fontSize: 18,
                marginBottom: 14,
                borderColor: "#C0C5C5",
              },
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
