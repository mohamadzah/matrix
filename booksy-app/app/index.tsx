import { useEffect } from 'react';
import { router } from 'expo-router';

export default function Index() {
  useEffect(() => {
    // Redirect to onboarding screen on app start
    router.replace('/(auth)/onboarding');
  }, []);

  return null;
}