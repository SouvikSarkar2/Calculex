import { StatusBar } from "expo-status-bar";
import { styled, useColorScheme } from "nativewind";
import { Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Button from "./Components/Button";
import ButtonInput from "./Components/ButtonInput";
import ButtonSide from "./Components/ButtonSide";

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
      <StyledView className=" dark:bg-[#232D36]  h-[28%] w-full"></StyledView>
      <StyledView
        className={` rounded-3xl flex p-2.5 pb-6 justify-center items-center ${
          colorScheme === "light" ? "bg-[#e7e7e7]" : "bg-[#25313D]"
        }  h-[60%] w-full`}
      >
        <StyledView className=" w-full h-full flex-row">
          <StyledView className="w-[75%]  h-full flex flex-col">
            <StyledView className="w-full h-[20%]">
              <StyledView className="w-full h-full flex flex-row">
                <StyledView className="h-full w-[33%]  flex justify-center items-center">
                  <Button type="%" />
                </StyledView>
                <StyledView className="h-full w-[33%]  flex justify-center items-center">
                  <Button type="X" />
                </StyledView>
                <StyledView className="h-full w-[33%]  flex justify-center items-center">
                  <Button type="/" />
                </StyledView>
              </StyledView>
            </StyledView>
            <StyledView className="w-full h-[60%] flex flex-wrap  flex-row">
              <StyledView className="h-[33%] w-[33%]  flex justify-center items-center">
                <ButtonInput type="7" />
              </StyledView>
              <StyledView className="h-[33%] w-[33%]  flex justify-center items-center">
                <ButtonInput type="8" />
              </StyledView>
              <StyledView className="h-[33%] w-[33%]  flex justify-center items-center">
                <ButtonInput type="9" />
              </StyledView>
              <StyledView className="h-[33%] w-[33%]  flex justify-center items-center">
                <ButtonInput type="4" />
              </StyledView>
              <StyledView className="h-[33%] w-[33%]  flex justify-center items-center">
                <ButtonInput type="5" />
              </StyledView>
              <StyledView className="h-[33%] w-[33%]  flex justify-center items-center">
                <ButtonInput type="6" />
              </StyledView>
              <StyledView className="h-[33%] w-[33%]  flex justify-center items-center">
                <ButtonInput type="1" />
              </StyledView>
              <StyledView className="h-[33%] w-[33%]  flex justify-center items-center">
                <ButtonInput type="2" />
              </StyledView>
              <StyledView className="h-[33%] w-[33%]  flex justify-center items-center">
                <ButtonInput type="3" />
              </StyledView>
              <StyledView className="h-[33%] w-[33%]  flex justify-center items-center">
                <ButtonInput type="AC" />
              </StyledView>
              <StyledView className="h-[33%] w-[33%]  flex justify-center items-center">
                <ButtonInput type="0" />
              </StyledView>
              <StyledView className="h-[33%] w-[33%]  flex justify-center items-center">
                <ButtonInput type="." />
              </StyledView>
            </StyledView>
            <StyledView className="w-full  h-[20%]"></StyledView>
          </StyledView>
          <StyledView className="w-[25%]  h-full flex flex-col">
            <StyledView className="w-full h-[20%]  flex justify-center items-center">
              <ButtonSide type="E" />
            </StyledView>
            <StyledView className="w-full h-[20%]  flex justify-center items-center">
              <ButtonSide type="-" />
            </StyledView>
            <StyledView className="w-full h-[20%]  flex justify-center items-center">
              <ButtonSide type="+" />
            </StyledView>
            <StyledView className="w-full h-[40%] flex justify-center items-center">
              <ButtonSide type="=" />
            </StyledView>
          </StyledView>
        </StyledView>
      </StyledView>

      <StatusBar style={colorScheme === "light" ? "dark" : "light"} />
    </StyledView>
  );
}
