import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function SearchScreen() {
	return (
		<View className="flex-1 bg-white dark:bg-black">
			<View className="px-5 pt-16 pb-4">
				<Text className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Search</Text>
				<Text className="text-zinc-600 dark:text-zinc-400 mt-1">Popular near you</Text>
			</View>
			<View className="px-5 py-3">
				<Link href="/provider/1" className="bg-zinc-100 dark:bg-zinc-900 rounded-xl px-4 py-3">
					<Text className="text-zinc-900 dark:text-zinc-100 font-medium">Go to provider</Text>
				</Link>
			</View>
		</View>
	);
}