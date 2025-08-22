import 'package:booksy_flutter/services/providers.dart';
import 'package:cached_network_image/cached_network_image.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

class ProviderDetailScreen extends ConsumerWidget {
  const ProviderDetailScreen({super.key, required this.providerId});
  final String providerId;

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final provider = ref.watch(providerByIdProvider(providerId));
    if (provider == null) {
      return const Scaffold(body: Center(child: Text('Not found')));
    }
    return Scaffold(
      body: CustomScrollView(
        slivers: [
          SliverAppBar(
            pinned: true,
            expandedHeight: 220,
            flexibleSpace: FlexibleSpaceBar(
              title: Text(provider.name),
              background: CachedNetworkImage(
                imageUrl: provider.imageUrl,
                fit: BoxFit.cover,
              ),
            ),
          ),
          SliverPadding(
            padding: const EdgeInsets.all(16),
            sliver: SliverList.list(
              children: [
                Row(
                  children: [
                    const Icon(Icons.star_rounded, color: Colors.amber),
                    const SizedBox(width: 4),
                    Text('${provider.rating.toStringAsFixed(1)} (${provider.numReviews})'),
                  ],
                ),
                const SizedBox(height: 12),
                if (provider.description != null) Text(provider.description!),
                const SizedBox(height: 16),
                Text('Services', style: Theme.of(context).textTheme.titleLarge),
                const SizedBox(height: 8),
                ...provider.services.map((s) => Card(
                      child: ListTile(
                        title: Text(s.name),
                        subtitle: Text('${s.durationMinutes} min'),
                        trailing: FilledButton(
                          onPressed: () => _bookService(context, provider.name, s.name),
                          child: const Text('Book'),
                        ),
                      ),
                    )),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Future<void> _bookService(BuildContext context, String providerName, String serviceName) async {
    final time = await showModalBottomSheet<TimeOfDay>(
      context: context,
      showDragHandle: true,
      builder: (context) {
        return Padding(
          padding: const EdgeInsets.all(16),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text('Select time', style: Theme.of(context).textTheme.titleMedium),
              const SizedBox(height: 12),
              Row(
                children: [
                  Expanded(
                    child: FilledButton.tonal(
                      onPressed: () async {
                        final now = TimeOfDay.now();
                        final picked = await showTimePicker(context: context, initialTime: now);
                        if (picked != null && context.mounted) {
                          Navigator.of(context).pop(picked);
                        }
                      },
                      child: const Text('Pick time'),
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 8),
              Text('We\'ll use today\'s date for demo.'),
            ],
          ),
        );
      },
    );
    if (time != null && context.mounted) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Booked $serviceName at ${time.format(context)} with $providerName')),
      );
    }
  }
}