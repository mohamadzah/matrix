import 'package:booksy_flutter/screens/bookings_screen.dart';
import 'package:booksy_flutter/screens/discover_screen.dart';
import 'package:booksy_flutter/screens/profile_screen.dart';
import 'package:booksy_flutter/screens/provider_detail_screen.dart';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

GoRouter createRouter() {
  return GoRouter(
    initialLocation: '/discover',
    routes: [
      StatefulShellRoute.indexedStack(
        builder: (context, state, navigationShell) {
          return Scaffold(
            body: navigationShell,
            bottomNavigationBar: NavigationBar(
              selectedIndex: navigationShell.currentIndex,
              onDestinationSelected: navigationShell.goBranch,
              destinations: const [
                NavigationDestination(icon: Icon(Icons.search), label: 'Discover'),
                NavigationDestination(icon: Icon(Icons.calendar_today), label: 'Bookings'),
                NavigationDestination(icon: Icon(Icons.person), label: 'Profile'),
              ],
            ),
          );
        },
        branches: [
          StatefulShellBranch(routes: [
            GoRoute(
              path: '/discover',
              name: 'discover',
              pageBuilder: (context, state) => const NoTransitionPage(child: DiscoverScreen()),
            ),
          ]),
          StatefulShellBranch(routes: [
            GoRoute(
              path: '/bookings',
              name: 'bookings',
              pageBuilder: (context, state) => const NoTransitionPage(child: BookingsScreen()),
            ),
          ]),
          StatefulShellBranch(routes: [
            GoRoute(
              path: '/profile',
              name: 'profile',
              pageBuilder: (context, state) => const NoTransitionPage(child: ProfileScreen()),
            ),
          ]),
        ],
      ),
      GoRoute(
        path: '/provider/:id',
        name: 'provider',
        builder: (context, state) => ProviderDetailScreen(providerId: state.pathParameters['id']!),
      ),
    ],
  );
}