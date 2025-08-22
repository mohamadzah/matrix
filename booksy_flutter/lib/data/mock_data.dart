import 'package:booksy_flutter/models/provider.dart';

final mockProviders = <ProviderModel>[
  ProviderModel(
    id: 'demo-1',
    name: 'Fade Factory',
    category: 'Barbershop',
    rating: 4.8,
    numReviews: 312,
    imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop',
    address: '123 Main St',
    city: 'Lagos',
    description: 'Top-tier fades and grooming.',
    services: [
      ServiceModel(id: 's1', name: 'Haircut', durationMinutes: 30, priceCents: 5000),
      ServiceModel(id: 's2', name: 'Beard Trim', durationMinutes: 20, priceCents: 3000),
      ServiceModel(id: 's3', name: 'Haircut + Beard', durationMinutes: 45, priceCents: 7000),
    ],
  ),
  ProviderModel(
    id: 'demo-2',
    name: 'Glow Nails',
    category: 'Nail Salon',
    rating: 4.6,
    numReviews: 198,
    imageUrl: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=1200&auto=format&fit=crop',
    address: '22 Victoria Ave',
    city: 'Abuja',
    description: 'Manicure and pedicure specialists.',
    services: [
      ServiceModel(id: 's1', name: 'Manicure', durationMinutes: 40, priceCents: 4500),
      ServiceModel(id: 's2', name: 'Pedicure', durationMinutes: 50, priceCents: 6000),
    ],
  ),
];

final mockBookings = <BookingModel>[
  BookingModel(
    id: 'b1',
    providerId: 'demo-1',
    providerName: 'Fade Factory',
    serviceName: 'Haircut + Beard',
    dateTime: DateTime.now().add(const Duration(days: 2, hours: 3)),
    priceCents: 7000,
  ),
];