import React from "react";
import { styled, useColorScheme } from "nativewind";
import { Text, View } from "react-native";
import { useStore } from "../store";

const StyledView = styled(View);
const StyledText = styled(Text);

const Display = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const { expression } = useStore();
  return (
    <StyledView className=" dark:bg-[#232D36] flex justify-center items-center  h-[28%] w-full">
      <StyledView className="w-[80%] h-[70%] flex justify-end items-end">
        <StyledText
          className={`${
            colorScheme === "light" ? "text-black" : "text-white"
          } text-5xl`}
        >
          {expression}
        </StyledText>
      </StyledView>
    </StyledView>
  );
};

export default Display;
