import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { Card } from '@/components/ui';
import { Ionicons } from '@expo/vector-icons';

const menuItems = [
  {
    id: '1',
    title: 'Edit Profile',
    subtitle: 'Update your personal information',
    icon: 'person-outline',
    action: () => console.log('Edit Profile'),
  },
  {
    id: '2',
    title: 'Payment Methods',
    subtitle: 'Manage your cards and payment options',
    icon: 'card-outline',
    action: () => console.log('Payment Methods'),
  },
  {
    id: '3',
    title: 'Notifications',
    subtitle: 'Customize your notification preferences',
    icon: 'notifications-outline',
    action: () => console.log('Notifications'),
  },
  {
    id: '4',
    title: 'Favorites',
    subtitle: 'View your saved businesses',
    icon: 'heart-outline',
    action: () => console.log('Favorites'),
  },
  {
    id: '5',
    title: 'Reviews',
    subtitle: 'Your reviews and ratings',
    icon: 'star-outline',
    action: () => console.log('Reviews'),
  },
  {
    id: '6',
    title: 'Help & Support',
    subtitle: 'Get help or contact support',
    icon: 'help-circle-outline',
    action: () => console.log('Help & Support'),
  },
  {
    id: '7',
    title: 'Privacy Policy',
    subtitle: 'Read our privacy policy',
    icon: 'shield-outline',
    action: () => console.log('Privacy Policy'),
  },
  {
    id: '8',
    title: 'Sign Out',
    subtitle: 'Sign out of your account',
    icon: 'log-out-outline',
    action: () => router.replace('/(auth)/onboarding'),
    danger: true,
  },
];

export default function ProfileScreen() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="px-4 py-4 bg-white border-b border-gray-200">
        <Text className="text-2xl font-bold text-gray-900">
          Profile
        </Text>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* User Info */}
        <View className="px-4 py-6">
          <Card className="items-center py-8">
            <View className="w-20 h-20 bg-primary-500 rounded-full items-center justify-center mb-4">
              <Text className="text-white text-2xl font-bold">S</Text>
            </View>
            <Text className="text-xl font-bold text-gray-900 mb-1">
              Sarah Johnson
            </Text>
            <Text className="text-gray-600 mb-4">
              sarah.johnson@email.com
            </Text>
            <View className="flex-row items-center">
              <View className="flex-row items-center mr-6">
                <Ionicons name="star" size={16} color="#fbbf24" />
                <Text className="text-sm font-medium text-gray-700 ml-1">
                  4.9
                </Text>
              </View>
              <Text className="text-sm text-gray-600">
                Member since 2023
              </Text>
            </View>
          </Card>
        </View>

        {/* Stats */}
        <View className="px-4 mb-6">
          <View className="flex-row space-x-4">
            <Card className="flex-1 items-center py-4">
              <Text className="text-2xl font-bold text-primary-500 mb-1">
                12
              </Text>
              <Text className="text-sm text-gray-600">
                Appointments
              </Text>
            </Card>
            
            <Card className="flex-1 items-center py-4">
              <Text className="text-2xl font-bold text-secondary-500 mb-1">
                5
              </Text>
              <Text className="text-sm text-gray-600">
                Favorites
              </Text>
            </Card>
            
            <Card className="flex-1 items-center py-4">
              <Text className="text-2xl font-bold text-green-500 mb-1">
                8
              </Text>
              <Text className="text-sm text-gray-600">
                Reviews
              </Text>
            </Card>
          </View>
        </View>

        {/* Menu Items */}
        <View className="px-4 pb-6">
          {menuItems.map((item) => (
            <Card key={item.id} className="mb-3" onPress={item.action}>
              <View className="flex-row items-center">
                <View className={`w-10 h-10 rounded-full items-center justify-center mr-4 ${
                  item.danger ? 'bg-red-100' : 'bg-gray-100'
                }`}>
                  <Ionicons 
                    name={item.icon as any} 
                    size={20} 
                    color={item.danger ? '#ef4444' : '#6b7280'} 
                  />
                </View>
                
                <View className="flex-1">
                  <Text className={`font-medium mb-1 ${
                    item.danger ? 'text-red-600' : 'text-gray-900'
                  }`}>
                    {item.title}
                  </Text>
                  <Text className="text-sm text-gray-600">
                    {item.subtitle}
                  </Text>
                </View>
                
                <Ionicons 
                  name="chevron-forward" 
                  size={20} 
                  color="#9ca3af" 
                />
              </View>
            </Card>
          ))}
        </View>

        {/* App Version */}
        <View className="px-4 pb-8">
          <Text className="text-center text-gray-500 text-sm">
            Version 1.0.0
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}