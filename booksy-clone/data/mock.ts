import { Provider } from '../types/models';

export const providers: Provider[] = [
	{
		id: '1',
		name: 'Downtown Barbers',
		avatarUrl: undefined,
		address: '123 Main St',
		city: 'Metropolis',
		rating: 4.8,
		reviewsCount: 312,
		categories: ['Barbershop', 'Men'],
		services: [
			{ id: 'cut', title: 'Classic Haircut', price: 3000, durationMinutes: 30 },
			{ id: 'fade', title: 'Skin Fade', price: 3500, durationMinutes: 40 },
			{ id: 'beard', title: 'Beard Trim', price: 2000, durationMinutes: 20 },
		],
	},
	{
		id: '2',
		name: 'Glow Beauty Studio',
		address: '42 Sunset Blvd',
		city: 'Metropolis',
		rating: 4.6,
		reviewsCount: 198,
		categories: ['Salon', 'Spa'],
		services: [
			{ id: 'mani', title: 'Manicure', price: 2500, durationMinutes: 45 },
			{ id: 'pedi', title: 'Pedicure', price: 3000, durationMinutes: 60 },
			{ id: 'facial', title: 'Facial', price: 5000, durationMinutes: 60 },
		],
	},
];