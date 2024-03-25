import { styled, useColorScheme } from "nativewind";
import { Text, View } from "react-native";

import {
  InputButtonTypes,
  SideButtonTypes,
  TopButtonTypes,
} from "../utils/data";
import Button from "./Button";
import ButtonInput from "./ButtonInput";
import ButtonSide from "./ButtonSide";

const StyledText = styled(Text);
const StyledView = styled(View);
const Main = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <StyledView
      className={` rounded-3xl flex p-2.5 pb-6 justify-center items-center ${
        colorScheme === "light" ? "bg-[#e7e7e7]" : "bg-[#25313D]"
      }  h-[60%] w-full`}
    >
      <StyledView className=" w-full h-full flex-row">
        <StyledView className="w-[75%]  h-full flex flex-col">
          <StyledView className="w-full h-[20%]">
            <StyledView className="w-full h-full flex flex-row">
              {TopButtonTypes.map((type, index) => (
                <StyledView
                  key={index}
                  className="h-full w-[33%]  flex justify-center items-center"
                >
                  <Button type={type} />
                </StyledView>
              ))}
            </StyledView>
          </StyledView>
          <StyledView className="w-full h-[60%] flex flex-wrap  flex-row">
            {InputButtonTypes.map((type, index) => (
              <StyledView
                key={index}
                className="h-[33%] w-[33%]  flex justify-center items-center"
              >
                <ButtonInput type={type} />
              </StyledView>
            ))}
          </StyledView>
          <StyledView className="w-full  h-[20%]"></StyledView>
        </StyledView>
        <StyledView className="w-[25%]  h-full flex flex-col">
          {SideButtonTypes.map((type, index) => (
            <StyledView
              key={index}
              className="w-full h-[20%]  flex justify-center items-center"
            >
              <ButtonSide type={type} />
            </StyledView>
          ))}
          <StyledView className="w-full h-[40%] flex justify-center items-center">
            <ButtonSide type="=" />
          </StyledView>
        </StyledView>
      </StyledView>
    </StyledView>
  );
};

export default Main;
