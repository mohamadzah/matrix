import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import type { Booking } from '../types/models';

export type PendingBooking = Pick<Booking, 'providerId' | 'serviceId' | 'startIso' | 'endIso'> | null;

type BookingState = {
	bookings: Booking[];
	pending: PendingBooking;
	setPendingBooking: (pending: NonNullable<PendingBooking>) => void;
	clearPending: () => void;
	confirmPending: (customerName?: string) => void;
};

function generateId() {
	return String(Date.now());
}

export const useBookingStore = create<BookingState>()(
	persist(
		(set, get) => ({
			bookings: [],
			pending: null,
			setPendingBooking: (pending) => set({ pending }),
			clearPending: () => set({ pending: null }),
			confirmPending: (customerName = 'Guest') => {
				const p = get().pending;
				if (!p) return;
				const newBooking: Booking = {
					id: generateId(),
					providerId: p.providerId,
					serviceId: p.serviceId,
					startIso: p.startIso,
					endIso: p.endIso,
					customerName,
				};
				set({ bookings: [newBooking, ...get().bookings], pending: null });
			},
		}),
		{
			name: 'bookings-storage',
			storage: createJSONStorage(() => AsyncStorage),
		},
	),
);