import { Link } from 'expo-router';
import { Text, View, FlatList } from 'react-native';
import { useBookingStore } from '../store/bookings';
import { providers } from '../data/mock';

export default function BookingsScreen() {
	const { bookings } = useBookingStore();
	return (
		<View className="flex-1 bg-white dark:bg-black">
			<View className="px-5 pt-16 pb-4">
				<Text className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Your bookings</Text>
				<Text className="text-zinc-600 dark:text-zinc-400 mt-1">{bookings.length} upcoming</Text>
			</View>
			<FlatList
				contentContainerStyle={{ padding: 20, gap: 12 }}
				data={bookings}
				keyExtractor={(b) => b.id}
				renderItem={({ item }) => {
					const provider = providers.find((p) => p.id === item.providerId);
					const service = provider?.services.find((s) => s.id === item.serviceId);
					const start = new Date(item.startIso);
					const timeLabel = start.toLocaleString(undefined, { weekday: 'short', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
					return (
						<View className="rounded-2xl border border-zinc-200/60 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-4">
							<Text className="text-zinc-900 dark:text-zinc-100 font-semibold">{provider?.name}</Text>
							<Text className="text-zinc-600 dark:text-zinc-400">{service?.title}</Text>
							<Text className="text-zinc-600 dark:text-zinc-400">{timeLabel}</Text>
						</View>
					);
				}}
				ListEmptyComponent={<Text className="text-zinc-600 dark:text-zinc-400 px-5">No bookings yet</Text>}
			/>
			<View className="px-5 py-3">
				<Link href="/" className="bg-zinc-100 dark:bg-zinc-900 rounded-xl px-4 py-3">
					<Text className="text-zinc-900 dark:text-zinc-100 text-center font-medium">Back to home</Text>
				</Link>
			</View>
		</View>
	);
}