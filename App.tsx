import { StatusBar } from "expo-status-bar";
import { styled, useColorScheme } from "nativewind";
import { Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import Display from "./Components/Display";

import Main from "./Components/Main";

const StyledText = styled(Text);
const StyledView = styled(View);

export default function App() {
  const { colorScheme, toggleColorScheme } = useColorScheme();

  return (
    <StyledView
      className={`items-center justify-center flex flex-col w-full h-full  ${
        colorScheme === "light" ? "bg-[#F7F8FB]" : "bg-[#232D36]"
      }`}
    >
      <StyledView className=" h-[12%] w-full flex justify-end items-start dark:bg-[#232D36] ">
        <StyledText onPress={toggleColorScheme}>
          <StyledView className="pb-3 pl-4">
            {colorScheme === "dark" ? (
              <FontAwesome name="moon-o" size={22} color="white" />
            ) : (
              <Feather name="sun" size={24} color="black" />
            )}
          </StyledView>
        </StyledText>
      </StyledView>
      <Display />
      <Main />
      <StatusBar style={colorScheme === "light" ? "dark" : "light"} />
    </StyledView>
  );
}
