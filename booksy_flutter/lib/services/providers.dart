import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:booksy_flutter/models/provider.dart';
import 'package:booksy_flutter/services/mock_repository.dart';

final repositoryProvider = Provider<MockRepository>((ref) => MockRepository());

final providersListProvider = Provider<List<ProviderModel>>((ref) {
  return ref.watch(repositoryProvider).getProviders();
});

final bookingsListProvider = Provider<List<BookingModel>>((ref) {
  return ref.watch(repositoryProvider).getBookings();
});

final providerByIdProvider = Provider.family<ProviderModel?, String>((ref, id) {
  return ref.watch(repositoryProvider).getProviderById(id);
});