import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { router } from 'expo-router';
import { SearchBar, Card } from '@/components/ui';
import { Ionicons } from '@expo/vector-icons';

const filterCategories = [
  { id: 'all', name: 'All', active: true },
  { id: 'hair', name: 'Hair & Beauty', active: false },
  { id: 'massage', name: 'Massage', active: false },
  { id: 'nails', name: 'Nails', active: false },
  { id: 'fitness', name: 'Fitness', active: false },
  { id: 'wellness', name: 'Wellness', active: false },
];

const sortOptions = [
  { id: 'distance', name: 'Distance', active: true },
  { id: 'rating', name: 'Rating', active: false },
  { id: 'price', name: 'Price', active: false },
  { id: 'popularity', name: 'Popularity', active: false },
];

const allBusinesses = [
  {
    id: '1',
    name: 'Bella Beauty Salon',
    category: 'Hair & Beauty',
    rating: 4.8,
    reviews: 124,
    distance: '0.5 km',
    priceRange: '$$',
    image: '💇‍♀️',
    nextAvailable: 'Today 2:30 PM',
    featured: true,
  },
  {
    id: '2',
    name: 'Zen Massage Studio',
    category: 'Massage',
    rating: 4.9,
    reviews: 89,
    distance: '1.2 km',
    priceRange: '$$$',
    image: '💆‍♀️',
    nextAvailable: 'Tomorrow 10:00 AM',
    featured: false,
  },
  {
    id: '3',
    name: 'Perfect Nails',
    category: 'Nails',
    rating: 4.7,
    reviews: 156,
    distance: '0.8 km',
    priceRange: '$',
    image: '💅',
    nextAvailable: 'Today 4:00 PM',
    featured: true,
  },
  {
    id: '4',
    name: 'FitLife Gym',
    category: 'Fitness',
    rating: 4.6,
    reviews: 203,
    distance: '2.1 km',
    priceRange: '$$',
    image: '💪',
    nextAvailable: 'Today 6:00 PM',
    featured: false,
  },
  {
    id: '5',
    name: 'Harmony Wellness',
    category: 'Wellness',
    rating: 4.9,
    reviews: 67,
    distance: '1.5 km',
    priceRange: '$$$',
    image: '🧘‍♀️',
    nextAvailable: 'Tomorrow 9:00 AM',
    featured: true,
  },
  {
    id: '6',
    name: 'StyleCut Barber',
    category: 'Hair & Beauty',
    rating: 4.5,
    reviews: 98,
    distance: '1.8 km',
    priceRange: '$',
    image: '✂️',
    nextAvailable: 'Today 3:15 PM',
    featured: false,
  },
];

export default function ExploreScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const filteredBusinesses = allBusinesses.filter((business) => {
    const matchesSearch = business.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         business.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === 'all' || 
                         business.category.toLowerCase().includes(activeFilter);
    return matchesSearch && matchesFilter;
  });

  const renderBusiness = ({ item }: { item: typeof allBusinesses[0] }) => (
    <Card 
      className="mb-4 mx-4"
      onPress={() => router.push(`/business/${item.id}`)}
    >
      <View className="flex-row">
        {item.featured && (
          <View className="absolute top-0 right-0 bg-primary-500 px-2 py-1 rounded-bl-lg rounded-tr-xl">
            <Text className="text-white text-xs font-medium">Featured</Text>
          </View>
        )}
        
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
          
          <View className="flex-row items-center mb-2">
            <Text className="text-sm text-gray-600">
              {item.category} • {item.distance} • {item.priceRange}
            </Text>
          </View>
          
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

  const renderFilterChip = ({ item }: { item: typeof filterCategories[0] }) => (
    <TouchableOpacity
      className={`px-4 py-2 rounded-full mr-3 ${
        activeFilter === item.id ? 'bg-primary-500' : 'bg-white border border-gray-200'
      }`}
      onPress={() => setActiveFilter(item.id)}
    >
      <Text className={`font-medium ${
        activeFilter === item.id ? 'text-white' : 'text-gray-700'
      }`}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="px-4 pt-4 pb-2 bg-white border-b border-gray-200">
        <View className="flex-row items-center justify-between mb-4">
          <Text className="text-2xl font-bold text-gray-900">
            Explore
          </Text>
          <TouchableOpacity 
            className="w-10 h-10 bg-gray-100 rounded-full items-center justify-center"
            onPress={() => setShowFilters(!showFilters)}
          >
            <Ionicons name="options" size={20} color="#374151" />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <SearchBar
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Search businesses, services..."
          className="mb-4"
        />
      </View>

      {/* Filters */}
      <View className="py-4 bg-white border-b border-gray-200">
        <FlatList
          data={filterCategories}
          renderItem={renderFilterChip}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16 }}
        />
      </View>

      {/* Results Header */}
      <View className="flex-row items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
        <Text className="text-gray-600">
          {filteredBusinesses.length} businesses found
        </Text>
        <TouchableOpacity className="flex-row items-center">
          <Text className="text-primary-500 font-medium mr-1">Sort by Distance</Text>
          <Ionicons name="chevron-down" size={16} color="#0ea5e9" />
        </TouchableOpacity>
      </View>

      {/* Business List */}
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {filteredBusinesses.length > 0 ? (
          <FlatList
            data={filteredBusinesses}
            renderItem={renderBusiness}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
            contentContainerStyle={{ paddingVertical: 16 }}
          />
        ) : (
          <View className="flex-1 items-center justify-center py-12">
            <View className="w-20 h-20 bg-gray-100 rounded-full items-center justify-center mb-4">
              <Ionicons name="search-outline" size={32} color="#9CA3AF" />
            </View>
            <Text className="text-lg font-semibold text-gray-900 mb-2">
              No businesses found
            </Text>
            <Text className="text-gray-600 text-center px-8">
              Try adjusting your search or filters to find what you're looking for
            </Text>
          </View>
        )}
      </ScrollView>

      {/* Map Toggle */}
      <View className="absolute bottom-20 right-4">
        <TouchableOpacity className="bg-primary-500 w-14 h-14 rounded-full items-center justify-center shadow-lg">
          <Ionicons name="map" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
