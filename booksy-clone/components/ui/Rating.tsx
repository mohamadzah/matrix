import { Text, View } from 'react-native';

export function Rating({ value }: { value: number }) {
	return (
		<View className="flex-row items-center gap-1">
			<Text className="text-yellow-500">★</Text>
			<Text className="text-zinc-600 dark:text-zinc-400">{value.toFixed(1)}</Text>
		</View>
	);
}