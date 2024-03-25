import { styled } from "nativewind";
import { Pressable, Text, View } from "react-native";
import { useStore } from "../store";

const StyledText = styled(Text);
const StyledView = styled(View);
const StyledPressable = styled(Pressable);

const Button = ({ type }: { type: string }) => {
  const { addExpression, resetExpression } = useStore();

  const handlePress = () => {
    if (type == "AC") {
      resetExpression();
      return;
    }
    addExpression(type);
  };

  return (
    <StyledView
      className={`w-[80%] h-[80%] rounded-full flex justify-center items-center bg-slate-500`}
    >
      <StyledPressable
        className="w-full h-full flex justify-center items-center"
        onPress={handlePress}
      >
        <StyledText className={` text-3xl text-white`}>{type}</StyledText>
      </StyledPressable>
    </StyledView>
  );
};

export default Button;
