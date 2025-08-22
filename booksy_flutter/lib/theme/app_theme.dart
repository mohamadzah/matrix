import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class AppTheme {
  AppTheme._();

  static ThemeData light() {
    return ThemeData(
      useMaterial3: true,
      colorScheme: ColorScheme.fromSeed(seedColor: const Color(0xFF6750A4)),
      textTheme: GoogleFonts.interTextTheme(),
      visualDensity: VisualDensity.adaptivePlatformDensity,
    );
  }
}