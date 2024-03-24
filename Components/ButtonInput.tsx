import { styled, useColorScheme } from "nativewind";
import { Text, View } from "react-native";

const StyledText = styled(Text);
const StyledView = styled(View);

const Button = ({ type }: { type: string }) => {
  return (
    <StyledView
      className={`w-[80%] h-[80%] rounded-full flex justify-center items-center bg-slate-500`}
    >
      <StyledText className={` text-3xl text-white`}>{type}</StyledText>
    </StyledView>
  );
};

export default Button;
