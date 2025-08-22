import { useLocalSearchParams, router } from 'expo-router';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import { providers } from '../data/mock';
import { useBookingStore } from '../store/bookings';
import React from 'react';

function getNextDays(count: number): Date[] {
	const days: Date[] = [];
	const start = new Date();
	start.setHours(0, 0, 0, 0);
	for (let i = 0; i < count; i++) {
		const d = new Date(start);
		d.setDate(start.getDate() + i);
		days.push(d);
	}
	return days;
}

function getTimeSlotsForDay(startHour = 9, endHour = 17, intervalMinutes = 30): string[] {
	const slots: string[] = [];
	for (let h = startHour; h <= endHour; h++) {
		for (let m = 0; m < 60; m += intervalMinutes) {
			slots.push(`${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`);
		}
	}
	return slots;
}

export default function BookingScreen() {
	const { id, serviceId } = useLocalSearchParams<{ id: string; serviceId?: string }>();
	const provider = providers.find((p) => p.id === id);
	const service = provider?.services.find((s) => s.id === serviceId) ?? provider?.services[0];
	const { setPendingBooking } = useBookingStore();
	const days = getNextDays(7);
	const slots = getTimeSlotsForDay();
	const [selectedDayIndex, setSelectedDayIndex] = React.useState(0);

	if (!provider || !service) {
		return (
			<View className="flex-1 items-center justify-center bg-white dark:bg-black">
				<Text className="text-zinc-900 dark:text-zinc-100">Missing provider/service</Text>
			</View>
		);
	}

	function handleSelectSlot(time: string) {
		const day = days[selectedDayIndex];
		const [hourStr, minuteStr] = time.split(':');
		const start = new Date(day);
		start.setHours(Number(hourStr), Number(minuteStr), 0, 0);
		const end = new Date(start);
		end.setMinutes(start.getMinutes() + service!.durationMinutes);
		setPendingBooking({
			providerId: provider!.id,
			serviceId: service!.id,
			startIso: start.toISOString(),
			endIso: end.toISOString(),
		});
		router.push('/checkout');
	}

	return (
		<View className="flex-1 bg-white dark:bg-black">
			<View className="px-5 pt-16 pb-4">
				<Text className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">Booking</Text>
				<Text className="text-zinc-600 dark:text-zinc-400 mt-1">{provider!.name} · {service!.title}</Text>
			</View>
			<View className="px-5">
				<FlatList
					horizontal
					showsHorizontalScrollIndicator={false}
					data={days}
					keyExtractor={(d) => d.toISOString()}
					contentContainerStyle={{ gap: 8, paddingVertical: 8 }}
					renderItem={({ item, index }) => {
						const isSelected = index === selectedDayIndex;
						const label = index === 0 ? 'Today' : index === 1 ? 'Tomorrow' : item.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });
						return (
							<TouchableOpacity onPress={() => setSelectedDayIndex(index)} className={`px-3 py-2 rounded-xl ${isSelected ? 'bg-zinc-900 dark:bg-zinc-100' : 'bg-zinc-100 dark:bg-zinc-900'}`}>
								<Text className={isSelected ? 'text-white dark:text-black font-medium' : 'text-zinc-900 dark:text-zinc-100 font-medium'}>{label}</Text>
							</TouchableOpacity>
						);
					}}
				/>
			</View>
			<FlatList
				contentContainerStyle={{ padding: 20, gap: 8 }}
				data={slots}
				keyExtractor={(t) => t}
				numColumns={3}
				renderItem={({ item }) => (
					<TouchableOpacity onPress={() => handleSelectSlot(item)} className="flex-1 m-1 rounded-xl bg-zinc-100 dark:bg-zinc-900 px-3 py-4 items-center">
						<Text className="text-zinc-900 dark:text-zinc-100 font-medium">{item}</Text>
					</TouchableOpacity>
				)}
			/>
		</View>
	);
}