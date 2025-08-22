import { Image, Text, View } from 'react-native';

export function Avatar({ uri, name, size = 40 }: { uri?: string; name?: string; size?: number }) {
	const initials = name?.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase();
	if (uri) {
		return <Image source={{ uri }} style={{ width: size, height: size, borderRadius: size / 2 }} />;
	}
	return (
		<View style={{ width: size, height: size, borderRadius: size / 2 }} className="items-center justify-center bg-zinc-200 dark:bg-zinc-800">
			<Text className="text-zinc-900 dark:text-zinc-100 font-semibold">{initials}</Text>
		</View>
	);
}