import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { Button, Card } from '@/components/ui';
import { Ionicons } from '@expo/vector-icons';

const businessData = {
  '1': {
    name: 'Bella Beauty Salon',
    category: 'Hair & Beauty',
    rating: 4.8,
    reviews: 124,
    distance: '0.5 km',
    address: '123 Main Street, Downtown',
    phone: '+1 (555) 123-4567',
    hours: 'Mon-Sat: 9:00 AM - 7:00 PM',
    image: '💇‍♀️',
    description: 'Professional hair and beauty services with experienced stylists. We offer cutting-edge techniques and premium products to help you look and feel your best.',
    services: [
      { id: '1', name: 'Haircut & Style', price: '$85', duration: '1h 30min' },
      { id: '2', name: 'Hair Color', price: '$120', duration: '2h 30min' },
      { id: '3', name: 'Highlights', price: '$150', duration: '3h' },
      { id: '4', name: 'Blowout', price: '$45', duration: '45min' },
    ],
    reviews: [
      {
        id: '1',
        name: 'Emma Wilson',
        rating: 5,
        date: '2 days ago',
        comment: 'Amazing service! The stylist really understood what I wanted.',
      },
      {
        id: '2',
        name: 'Michael Chen',
        rating: 4,
        date: '1 week ago',
        comment: 'Great haircut, very professional staff.',
      },
    ],
  },
};

export default function BusinessDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<'services' | 'reviews' | 'info'>('services');
  
  const business = businessData[id as keyof typeof businessData];

  if (!business) {
    return (
      <SafeAreaView className="flex-1 bg-white items-center justify-center">
        <Text className="text-lg text-gray-600">Business not found</Text>
      </SafeAreaView>
    );
  }

  const renderService = ({ item }: { item: typeof business.services[0] }) => (
    <Card className="mb-3" onPress={() => router.push(`/booking/${id}?service=${item.id}`)}>
      <View className="flex-row items-center justify-between">
        <View className="flex-1">
          <Text className="text-lg font-semibold text-gray-900 mb-1">
            {item.name}
          </Text>
          <Text className="text-sm text-gray-600">
            {item.duration}
          </Text>
        </View>
        <View className="items-end">
          <Text className="text-lg font-bold text-primary-500 mb-1">
            {item.price}
          </Text>
          <TouchableOpacity 
            className="bg-primary-500 px-4 py-2 rounded-lg"
            onPress={() => router.push(`/booking/${id}?service=${item.id}`)}
          >
            <Text className="text-white text-sm font-medium">Book</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Card>
  );

  const renderReview = ({ item }: { item: typeof business.reviews[0] }) => (
    <Card className="mb-3">
      <View className="flex-row items-start justify-between mb-2">
        <View>
          <Text className="font-semibold text-gray-900">{item.name}</Text>
          <View className="flex-row items-center mt-1">
            {[...Array(5)].map((_, i) => (
              <Ionicons
                key={i}
                name="star"
                size={14}
                color={i < item.rating ? '#fbbf24' : '#e5e7eb'}
              />
            ))}
            <Text className="text-sm text-gray-500 ml-2">{item.date}</Text>
          </View>
        </View>
      </View>
      <Text className="text-gray-700 leading-5">{item.comment}</Text>
    </Card>
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center px-4 py-4 border-b border-gray-200">
        <TouchableOpacity onPress={() => router.back()} className="mr-4">
          <Ionicons name="arrow-back" size={24} color="#374151" />
        </TouchableOpacity>
        <View className="flex-1">
          <Text className="text-lg font-semibold text-gray-900">
            {business.name}
          </Text>
        </View>
        <TouchableOpacity className="ml-4">
          <Ionicons name="heart-outline" size={24} color="#374151" />
        </TouchableOpacity>
        <TouchableOpacity className="ml-4">
          <Ionicons name="share-outline" size={24} color="#374151" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1">
        {/* Business Info */}
        <View className="p-4 border-b border-gray-200">
          <View className="flex-row items-center mb-4">
            <View className="w-16 h-16 bg-gray-100 rounded-xl items-center justify-center mr-4">
              <Text className="text-2xl">{business.image}</Text>
            </View>
            <View className="flex-1">
              <Text className="text-xl font-bold text-gray-900 mb-1">
                {business.name}
              </Text>
              <Text className="text-gray-600 mb-2">
                {business.category} • {business.distance}
              </Text>
              <View className="flex-row items-center">
                <Ionicons name="star" size={16} color="#fbbf24" />
                <Text className="text-sm font-medium text-gray-700 ml-1">
                  {business.rating}
                </Text>
                <Text className="text-sm text-gray-500 ml-1">
                  ({business.reviews.length} reviews)
                </Text>
              </View>
            </View>
          </View>

          <Text className="text-gray-700 leading-6 mb-4">
            {business.description}
          </Text>

          {/* Quick Actions */}
          <View className="flex-row space-x-4">
            <TouchableOpacity className="flex-1 bg-primary-500 py-3 rounded-xl items-center">
              <Text className="text-white font-semibold">Book Now</Text>
            </TouchableOpacity>
            <TouchableOpacity className="border border-gray-300 px-4 py-3 rounded-xl">
              <Ionicons name="call" size={20} color="#374151" />
            </TouchableOpacity>
            <TouchableOpacity className="border border-gray-300 px-4 py-3 rounded-xl">
              <Ionicons name="navigate" size={20} color="#374151" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Tabs */}
        <View className="flex-row bg-gray-50 border-b border-gray-200">
          <TouchableOpacity
            className={`flex-1 py-4 ${activeTab === 'services' ? 'border-b-2 border-primary-500' : ''}`}
            onPress={() => setActiveTab('services')}
          >
            <Text className={`text-center font-medium ${
              activeTab === 'services' ? 'text-primary-500' : 'text-gray-600'
            }`}>
              Services
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className={`flex-1 py-4 ${activeTab === 'reviews' ? 'border-b-2 border-primary-500' : ''}`}
            onPress={() => setActiveTab('reviews')}
          >
            <Text className={`text-center font-medium ${
              activeTab === 'reviews' ? 'text-primary-500' : 'text-gray-600'
            }`}>
              Reviews
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className={`flex-1 py-4 ${activeTab === 'info' ? 'border-b-2 border-primary-500' : ''}`}
            onPress={() => setActiveTab('info')}
          >
            <Text className={`text-center font-medium ${
              activeTab === 'info' ? 'text-primary-500' : 'text-gray-600'
            }`}>
              Info
            </Text>
          </TouchableOpacity>
        </View>

        {/* Tab Content */}
        <View className="p-4">
          {activeTab === 'services' && (
            <FlatList
              data={business.services}
              renderItem={renderService}
              keyExtractor={(item) => item.id}
              scrollEnabled={false}
            />
          )}

          {activeTab === 'reviews' && (
            <FlatList
              data={business.reviews}
              renderItem={renderReview}
              keyExtractor={(item) => item.id}
              scrollEnabled={false}
            />
          )}

          {activeTab === 'info' && (
            <View>
              <Card className="mb-4">
                <View className="flex-row items-center mb-3">
                  <Ionicons name="location" size={20} color="#6b7280" />
                  <Text className="text-gray-900 font-medium ml-3">Address</Text>
                </View>
                <Text className="text-gray-700 ml-8">{business.address}</Text>
              </Card>

              <Card className="mb-4">
                <View className="flex-row items-center mb-3">
                  <Ionicons name="call" size={20} color="#6b7280" />
                  <Text className="text-gray-900 font-medium ml-3">Phone</Text>
                </View>
                <Text className="text-gray-700 ml-8">{business.phone}</Text>
              </Card>

              <Card className="mb-4">
                <View className="flex-row items-center mb-3">
                  <Ionicons name="time" size={20} color="#6b7280" />
                  <Text className="text-gray-900 font-medium ml-3">Hours</Text>
                </View>
                <Text className="text-gray-700 ml-8">{business.hours}</Text>
              </Card>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}