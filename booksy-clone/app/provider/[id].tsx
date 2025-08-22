import { Link, useLocalSearchParams } from 'expo-router';
import { FlatList, Text, View, TouchableOpacity } from 'react-native';
import { providers } from '../../data/mock';
import { Avatar } from '../../components/ui/Avatar';
import { Rating } from '../../components/ui/Rating';
import { Card } from '../../components/ui/Card';

export default function ProviderDetailScreen() {
	const { id } = useLocalSearchParams<{ id: string }>();
	const provider = providers.find((p) => p.id === id);
	if (!provider) {
		return (
			<View className="flex-1 items-center justify-center bg-white dark:bg-black">
				<Text className="text-zinc-900 dark:text-zinc-100">Provider not found</Text>
			</View>
		);
	}
	return (
		<View className="flex-1 bg-white dark:bg-black">
			<View className="px-5 pt-16 pb-4 gap-3">
				<View className="flex-row items-center gap-3">
					<Avatar name={provider.name} uri={provider.avatarUrl} size={56} />
					<View className="flex-1">
						<Text className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">{provider.name}</Text>
						<View className="flex-row items-center gap-2 mt-1">
							<Rating value={provider.rating ?? 0} />
							<Text className="text-xs text-zinc-500">({provider.reviewsCount})</Text>
						</View>
					</View>
				</View>
				<Text className="text-zinc-600 dark:text-zinc-400">{provider.address} · {provider.city}</Text>
			</View>
			<FlatList
				contentContainerStyle={{ padding: 20, gap: 12 }}
				data={provider.services}
				keyExtractor={(s) => s.id}
				renderItem={({ item }) => (
					<Link asChild href={{ pathname: '/booking', params: { id: provider.id, serviceId: item.id } }}>
						<TouchableOpacity>
							<Card>
								<View className="p-4 gap-1">
									<Text className="text-base font-semibold text-zinc-900 dark:text-zinc-100">{item.title}</Text>
									<Text className="text-xs text-zinc-600 dark:text-zinc-400">{Math.round(item.durationMinutes)} min · ${(item.price / 100).toFixed(2)}</Text>
								</View>
							</Card>
						</TouchableOpacity>
					</Link>
				)}
				ListFooterComponent={<View className="h-8" />} 
			/>
		</View>
	);
}