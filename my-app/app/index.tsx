import { Text, View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center bg-cyan-500">
      <View className="flex-row items-center bg-slate-100 px-4 py-2 w-[90%] rounded-full shadow-sm">
        <Ionicons
          name="search-outline"
          size={24}
          color="#94a3b8"
          className="mr-2"
        />
        <TextInput
          className="flex-1 text-xl font-medium  placeholder:text-slate-400"
          placeholder="Busque sua cidade"
          placeholderTextColor="#94a3b8"
        />
      </View>

      <View></View>
    </View>
  );
}
