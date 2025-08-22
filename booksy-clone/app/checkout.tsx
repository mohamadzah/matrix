import { router } from 'expo-router';
import { Text, View, TouchableOpacity } from 'react-native';
import { useBookingStore } from '../store/bookings';
import { providers } from '../data/mock';

export default function CheckoutScreen() {
	const { pending, confirmPending } = useBookingStore();
	if (!pending) {
		return (
			<View className="flex-1 items-center justify-center bg-white dark:bg-black">
				<Text className="text-zinc-900 dark:text-zinc-100">No pending booking</Text>
			</View>
		);
	}
	const provider = providers.find((p) => p.id === pending.providerId);
	const service = provider?.services.find((s) => s.id === pending.serviceId);
	const start = new Date(pending.startIso);
	const timeLabel = start.toLocaleString(undefined, { weekday: 'short', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
	return (
		<View className="flex-1 bg-white dark:bg-black">
			<View className="px-5 pt-16 pb-4">
				<Text className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Checkout</Text>
				<Text className="text-zinc-600 dark:text-zinc-400 mt-1">Review your booking</Text>
			</View>
			<View className="px-5 gap-3">
				<Text className="text-zinc-900 dark:text-zinc-100">Provider: {provider?.name}</Text>
				<Text className="text-zinc-900 dark:text-zinc-100">Service: {service?.title}</Text>
				<Text className="text-zinc-900 dark:text-zinc-100">When: {timeLabel}</Text>
				<TouchableOpacity
					onPress={() => {
						confirmPending('Guest');
						router.replace('/bookings');
					}}
					className="bg-green-600 rounded-xl px-4 py-3"
				>
					<Text className="text-white text-center font-semibold">Confirm booking</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}