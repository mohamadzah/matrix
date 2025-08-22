import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
	return (
		<View className="flex-1 items-center justify-center bg-white dark:bg-black">
			<Text className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
				Booksy Clone
			</Text>
			<Text className="text-zinc-600 dark:text-zinc-400 mt-2">
				NativeWind configured successfully
			</Text>
			<StatusBar style="auto" />
		</View>
	);
}
