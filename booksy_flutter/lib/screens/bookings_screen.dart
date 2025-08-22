import 'package:booksy_flutter/services/providers.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:intl/intl.dart';

class BookingsScreen extends ConsumerWidget {
  const BookingsScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final bookings = ref.watch(bookingsListProvider);
    final dateFmt = DateFormat('EEE, MMM d · h:mm a');
    return Scaffold(
      appBar: AppBar(title: const Text('My Bookings')),
      body: ListView.separated(
        itemCount: bookings.length,
        separatorBuilder: (_, __) => const Divider(height: 1),
        itemBuilder: (context, index) {
          final b = bookings[index];
          return ListTile(
            leading: const Icon(Icons.event_available),
            title: Text(b.serviceName),
            subtitle: Text('${b.providerName} · ${dateFmt.format(b.dateTime)}'),
            trailing: const Icon(Icons.chevron_right),
          );
        },
      ),
    );
  }
}