class FirebaseAuthServiceStub {
  Future<bool> signInWithGoogle() async {
    // TODO: Replace with real Firebase Auth impl
    await Future<void>.delayed(const Duration(milliseconds: 400));
    return true;
  }
}

class FirebaseDataServiceStub {
  Future<void> syncProviders() async {
    // TODO: Replace with Firestore read
    await Future<void>.delayed(const Duration(milliseconds: 300));
  }
}