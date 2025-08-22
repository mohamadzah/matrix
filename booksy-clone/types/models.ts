export type Service = {
	id: string;
	title: string;
	description?: string;
	price: number; // in minor units, e.g., cents
	durationMinutes: number;
};

export type Provider = {
	id: string;
	name: string;
	avatarUrl?: string;
	address?: string;
	city?: string;
	rating?: number; // 0..5
	reviewsCount?: number;
	categories: string[];
	services: Service[];
};

export type Booking = {
	id: string;
	providerId: string;
	serviceId: string;
	startIso: string; // ISO timestamp
	endIso: string; // ISO timestamp
	customerName: string;
	customerPhone?: string;
	notes?: string;
};