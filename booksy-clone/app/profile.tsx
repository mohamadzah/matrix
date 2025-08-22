import { Text, View, TouchableOpacity } from 'react-native';
import { useColorScheme } from 'nativewind';

export default function ProfileScreen() {
	const { colorScheme, setColorScheme } = useColorScheme();
	function toggleTheme() {
		setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');
	}
	return (
		<View className="flex-1 items-center justify-center bg-white dark:bg-black gap-4">
			<Text className="text-zinc-900 dark:text-zinc-100">Profile (placeholder)</Text>
			<TouchableOpacity onPress={toggleTheme} className="px-4 py-3 rounded-xl bg-zinc-100 dark:bg-zinc-900">
				<Text className="text-zinc-900 dark:text-zinc-100 font-semibold">Toggle theme</Text>
			</TouchableOpacity>
		</View>
	);
}