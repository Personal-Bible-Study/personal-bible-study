import { Text, TouchableOpacity } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { supabase } from "../lib/supabase";
import styled from "styled-components/native";
import { router } from "expo-router";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default function Page() {
  async function signInWithKakao() {
    try {
      const { data } = await supabase.auth.signInWithOAuth({
        provider: "kakao",
      });
      if (data.url) {
        const response = await WebBrowser.openAuthSessionAsync(
          data.url,
          "com.daveg7lee.personalbiblestudy://"
        );

        if (response.type === "success") {
          const url = response.url;
          const params = url.split("#")[1];
          const accessToken = params.split("&")[0].split("=")[1];
          const refreshToken = params.split("&")[2].split("=")[1];

          const { data, error } = await supabase.auth.setSession({
            access_token: accessToken,
            refresh_token: refreshToken,
          });

          if (data.user) {
            router.replace("/");
          }
        }
      }
    } catch (error) {
      // handle error
    } finally {
      WebBrowser.maybeCompleteAuthSession();
    }
  }

  return (
    <Container>
      <TouchableOpacity onPress={signInWithKakao}>
        <Text>카카오로 로그인하기</Text>
      </TouchableOpacity>
    </Container>
  );
}
