import { Tabs } from 'expo-router';
import { useColorScheme } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
	const colorScheme = useColorScheme();
	return (
		<>
			<StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
			<Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: '#18181b' }}>
				<Tabs.Screen name="index" options={{ title: 'Home' }} />
				<Tabs.Screen name="search" options={{ title: 'Search' }} />
				<Tabs.Screen name="bookings" options={{ title: 'Bookings' }} />
				<Tabs.Screen name="profile" options={{ title: 'Profile' }} />
			</Tabs>
		</>
	);
}