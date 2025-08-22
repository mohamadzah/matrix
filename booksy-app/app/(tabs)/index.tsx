import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { router } from 'expo-router';
import { SearchBar, Card } from '@/components/ui';
import { Ionicons } from '@expo/vector-icons';

const categories = [
  { id: '1', name: 'Hair & Beauty', icon: 'cut', color: 'bg-pink-100', iconColor: '#ec4899' },
  { id: '2', name: 'Massage', icon: 'body', color: 'bg-purple-100', iconColor: '#a855f7' },
  { id: '3', name: 'Nails', icon: 'hand-left', color: 'bg-blue-100', iconColor: '#3b82f6' },
  { id: '4', name: 'Fitness', icon: 'fitness', color: 'bg-green-100', iconColor: '#10b981' },
  { id: '5', name: 'Wellness', icon: 'leaf', color: 'bg-teal-100', iconColor: '#14b8a6' },
  { id: '6', name: 'Dental', icon: 'medical', color: 'bg-orange-100', iconColor: '#f97316' },
];

const featuredBusinesses = [
  {
    id: '1',
    name: 'Bella Beauty Salon',
    category: 'Hair & Beauty',
    rating: 4.8,
    reviews: 124,
    distance: '0.5 km',
    image: '💇‍♀️',
    nextAvailable: 'Today 2:30 PM',
  },
  {
    id: '2',
    name: 'Zen Massage Studio',
    category: 'Massage',
    rating: 4.9,
    reviews: 89,
    distance: '1.2 km',
    image: '💆‍♀️',
    nextAvailable: 'Tomorrow 10:00 AM',
  },
  {
    id: '3',
    name: 'Perfect Nails',
    category: 'Nails',
    rating: 4.7,
    reviews: 156,
    distance: '0.8 km',
    image: '💅',
    nextAvailable: 'Today 4:00 PM',
  },
];

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const renderCategory = ({ item }: { item: typeof categories[0] }) => (
    <TouchableOpacity 
      className="items-center mx-2 mb-4"
      onPress={() => console.log('Category:', item.name)}
    >
      <View className={`w-16 h-16 rounded-2xl ${item.color} items-center justify-center mb-2`}>
        <Ionicons name={item.icon as any} size={28} color={item.iconColor} />
      </View>
      <Text className="text-xs text-gray-700 text-center font-medium">
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  const renderBusiness = ({ item }: { item: typeof featuredBusinesses[0] }) => (
    <Card 
      className="mb-4 mx-4"
      onPress={() => router.push(`/business/${item.id}`)}
    >
      <View className="flex-row">
        <View className="w-16 h-16 bg-gray-100 rounded-xl items-center justify-center mr-4">
          <Text className="text-2xl">{item.image}</Text>
        </View>
        
        <View className="flex-1">
          <View className="flex-row items-center justify-between mb-1">
            <Text className="text-lg font-semibold text-gray-900">
              {item.name}
            </Text>
            <View className="flex-row items-center">
              <Ionicons name="star" size={16} color="#fbbf24" />
              <Text className="text-sm font-medium text-gray-700 ml-1">
                {item.rating}
              </Text>
              <Text className="text-sm text-gray-500 ml-1">
                ({item.reviews})
              </Text>
            </View>
          </View>
          
          <Text className="text-sm text-gray-600 mb-2">
            {item.category} • {item.distance}
          </Text>
          
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center">
              <View className="w-2 h-2 bg-green-500 rounded-full mr-2" />
              <Text className="text-sm text-green-600 font-medium">
                {item.nextAvailable}
              </Text>
            </View>
            <TouchableOpacity 
              className="bg-primary-500 px-4 py-2 rounded-lg"
              onPress={() => router.push(`/booking/${item.id}`)}
            >
              <Text className="text-white text-sm font-medium">Book Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Card>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="px-4 pt-4 pb-2">
        <View className="flex-row items-center justify-between mb-4">
          <View>
            <Text className="text-sm text-gray-600">Good morning,</Text>
            <Text className="text-xl font-bold text-gray-900">Sarah!</Text>
          </View>
          <TouchableOpacity className="w-10 h-10 bg-white rounded-full items-center justify-center shadow-sm">
            <Ionicons name="notifications-outline" size={22} color="#374151" />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <SearchBar
          value={searchQuery}
          onChangeText={setSearchQuery}
          onFilterPress={() => console.log('Filter pressed')}
          className="mb-4"
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Categories */}
        <View className="mb-6">
          <Text className="text-lg font-bold text-gray-900 px-4 mb-4">
            Categories
          </Text>
          <FlatList
            data={categories}
            renderItem={renderCategory}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 12 }}
          />
        </View>

        {/* Quick Actions */}
        <View className="px-4 mb-6">
          <View className="flex-row space-x-4">
            <Card className="flex-1 items-center py-6">
              <View className="w-12 h-12 bg-primary-100 rounded-full items-center justify-center mb-3">
                <Ionicons name="calendar" size={24} color="#0ea5e9" />
              </View>
              <Text className="text-sm font-medium text-gray-900">My Bookings</Text>
            </Card>
            
            <Card className="flex-1 items-center py-6">
              <View className="w-12 h-12 bg-secondary-100 rounded-full items-center justify-center mb-3">
                <Ionicons name="heart" size={24} color="#ec4899" />
              </View>
              <Text className="text-sm font-medium text-gray-900">Favorites</Text>
            </Card>
          </View>
        </View>

        {/* Featured Businesses */}
        <View className="mb-6">
          <View className="flex-row items-center justify-between px-4 mb-4">
            <Text className="text-lg font-bold text-gray-900">
              Near You
            </Text>
            <TouchableOpacity>
              <Text className="text-primary-500 font-medium">See All</Text>
            </TouchableOpacity>
          </View>
          
          <FlatList
            data={featuredBusinesses}
            renderItem={renderBusiness}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
          />
        </View>

        {/* Promotional Banner */}
        <View className="px-4 mb-6">
          <Card className="bg-gradient-to-r from-primary-500 to-secondary-500 p-6">
            <View className="flex-row items-center justify-between">
              <View className="flex-1">
                <Text className="text-white text-lg font-bold mb-2">
                  First booking discount!
                </Text>
                <Text className="text-white/90 text-sm mb-3">
                  Get 20% off your first appointment
                </Text>
                <TouchableOpacity className="bg-white px-4 py-2 rounded-lg self-start">
                  <Text className="text-primary-500 font-medium">Claim Now</Text>
                </TouchableOpacity>
              </View>
              <Text className="text-4xl">🎉</Text>
            </View>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
