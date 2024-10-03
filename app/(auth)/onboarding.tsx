import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Onboarding = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-orange-400">
      <Text className="text-2xl">Welcome to Mentoons</Text>
    </SafeAreaView>
  );
};

export default Onboarding;
