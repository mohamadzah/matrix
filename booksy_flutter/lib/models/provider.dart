class ServiceModel {
  ServiceModel({
    required this.id,
    required this.name,
    required this.durationMinutes,
    required this.priceCents,
  });

  final String id;
  final String name;
  final int durationMinutes;
  final int priceCents;
}

class ProviderModel {
  ProviderModel({
    required this.id,
    required this.name,
    required this.category,
    required this.rating,
    required this.numReviews,
    required this.imageUrl,
    required this.services,
    this.address,
    this.city,
    this.description,
  });

  final String id;
  final String name;
  final String category;
  final double rating;
  final int numReviews;
  final String imageUrl;
  final List<ServiceModel> services;
  final String? address;
  final String? city;
  final String? description;
}

class BookingModel {
  BookingModel({
    required this.id,
    required this.providerId,
    required this.providerName,
    required this.serviceName,
    required this.dateTime,
    required this.priceCents,
  });

  final String id;
  final String providerId;
  final String providerName;
  final String serviceName;
  final DateTime dateTime;
  final int priceCents;
}