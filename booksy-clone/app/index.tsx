import { Link } from 'expo-router';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { providers } from '../data/mock';
import { Avatar } from '../components/ui/Avatar';
import { Rating } from '../components/ui/Rating';
import { Card } from '../components/ui/Card';

export default function HomeScreen() {
	return (
		<View className="flex-1 bg-white dark:bg-black">
			<View className="px-5 pt-16 pb-4">
				<Text className="text-3xl font-extrabold text-zinc-900 dark:text-zinc-100">Discover</Text>
				<Text className="text-zinc-600 dark:text-zinc-400 mt-1">Find barbers, salons, and spa services near you</Text>
			</View>
			<FlatList
				contentContainerStyle={{ padding: 20, gap: 12 }}
				data={providers}
				keyExtractor={(p) => p.id}
				renderItem={({ item }) => (
					<Link asChild href={`/provider/${item.id}`}>
						<TouchableOpacity>
							<Card>
								<View className="p-4 flex-row items-center gap-3">
									<Avatar name={item.name} uri={item.avatarUrl} size={48} />
									<View className="flex-1">
										<Text className="text-base font-semibold text-zinc-900 dark:text-zinc-100">{item.name}</Text>
										<View className="flex-row items-center gap-2 mt-1">
											<Rating value={item.rating ?? 0} />
											<Text className="text-xs text-zinc-500">({item.reviewsCount})</Text>
										</View>
										<Text className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">{item.categories.join(' · ')}</Text>
									</View>
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