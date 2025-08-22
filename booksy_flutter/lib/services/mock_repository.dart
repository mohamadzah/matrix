import 'package:booksy_flutter/data/mock_data.dart';
import 'package:booksy_flutter/models/provider.dart';

class MockRepository {
  List<ProviderModel> getProviders() => mockProviders;

  ProviderModel? getProviderById(String id) {
    for (final p in mockProviders) {
      if (p.id == id) return p;
    }
    return null;
  }

  List<BookingModel> getBookings() => mockBookings;
}