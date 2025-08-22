import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:booksy_flutter/router/app_router.dart';
import 'package:booksy_flutter/theme/app_theme.dart';

void main() {
  runApp(const ProviderScope(child: MyApp()));
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      title: 'Booksy Clone',
      theme: AppTheme.light(),
      routerConfig: createRouter(),
    );
  }
}
