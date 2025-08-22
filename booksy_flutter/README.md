# Booksy Clone (Flutter)

A Flutter front-end for a booking marketplace (Booksy-like). Uses Material 3, go_router, Riverpod, and mock data. Firebase integration stubs included for future work.

## Prerequisites
- Flutter SDK (this repo includes a local install under `/workspace/flutter` if running in this environment)
- For Android builds: Android SDK configured; for iOS builds: Xcode/macOS

## Getting Started

```bash
# If needed, add local Flutter to PATH
export PATH="/workspace/flutter/bin:$PATH"

cd /workspace/booksy_flutter
flutter pub get
flutter run -d chrome   # or any connected device / emulator
```

To build web:
```bash
flutter build web
```

## Project Structure
- `lib/main.dart`: App entry, ProviderScope, router, theme
- `lib/router/`: go_router configuration with bottom navigation shell
- `lib/screens/`: Discover, Provider Detail, Bookings, Profile
- `lib/models/`: Core models (`ProviderModel`, `ServiceModel`, `BookingModel`)
- `lib/data/`: Mock data used by a simple repository
- `lib/services/`: Mock repository, Riverpod providers, Firebase stubs
- `lib/theme/`: App theme (Material 3 + Google Fonts)

## Packages
- `go_router`: Navigation and shell-based bottom navigation
- `flutter_riverpod`: State management
- `cached_network_image`: Image caching
- `intl`: Formatting dates
- `google_fonts`: Typography

## Firebase (Next Steps)
1. Add packages:
   ```bash
   flutter pub add firebase_core firebase_auth cloud_firestore google_sign_in
   ```
2. Configure Firebase project and platforms using FlutterFire CLI:
   ```bash
   dart pub global activate flutterfire_cli
   flutterfire configure
   ```
3. Initialize in `main()` before `runApp`:
   ```dart
   WidgetsFlutterBinding.ensureInitialized();
   await Firebase.initializeApp();
   ```
4. Replace stubs in `lib/services/firebase_stubs.dart` with real implementations and wire into Riverpod providers.
5. Swap mock repository with Firestore-backed repository (feature-flag if needed).

## Notes
- Android build requires a local Android SDK. Web build works out of the box.
- This is a UI-first implementation using mock data to enable rapid iteration.
