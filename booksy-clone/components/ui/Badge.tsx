import { PropsWithChildren } from 'react';
import { Text, View } from 'react-native';

export function Badge({ children }: PropsWithChildren) {
	return (
		<View className="px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900">
			<Text className="text-xs text-zinc-700 dark:text-zinc-300">{children}</Text>
		</View>
	);
}