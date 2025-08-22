import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { Card } from '@/components/ui';
import { Ionicons } from '@expo/vector-icons';

const upcomingBookings = [
  {
    id: '1',
    businessName: 'Bella Beauty Salon',
    service: 'Haircut & Style',
    date: 'Today',
    time: '2:30 PM',
    duration: '1h 30min',
    price: '$85',
    status: 'confirmed',
    image: '💇‍♀️',
  },
  {
    id: '2',
    businessName: 'Zen Massage Studio',
    service: 'Deep Tissue Massage',
    date: 'Tomorrow',
    time: '10:00 AM',
    duration: '1h',
    price: '$120',
    status: 'confirmed',
    image: '💆‍♀️',
  },
];

const pastBookings = [
  {
    id: '3',
    businessName: 'Perfect Nails',
    service: 'Gel Manicure',
    date: 'Dec 15, 2024',
    time: '4:00 PM',
    duration: '45min',
    price: '$45',
    status: 'completed',
    image: '💅',
  },
];

export default function BookingsScreen() {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

  const renderBooking = ({ item }: { item: typeof upcomingBookings[0] }) => (
    <Card className="mb-4">
      <View className="flex-row">
        <View className="w-16 h-16 bg-gray-100 rounded-xl items-center justify-center mr-4">
          <Text className="text-2xl">{item.image}</Text>
        </View>
        
        <View className="flex-1">
          <View className="flex-row items-center justify-between mb-1">
            <Text className="text-lg font-semibold text-gray-900">
              {item.businessName}
            </Text>
            <View className={`px-2 py-1 rounded-full ${
              item.status === 'confirmed' ? 'bg-green-100' : 'bg-gray-100'
            }`}>
              <Text className={`text-xs font-medium ${
                item.status === 'confirmed' ? 'text-green-600' : 'text-gray-600'
              }`}>
                {item.status}
              </Text>
            </View>
          </View>
          
          <Text className="text-sm text-gray-600 mb-2">
            {item.service}
          </Text>
          
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-sm font-medium text-gray-900">
                {item.date} • {item.time}
              </Text>
              <Text className="text-xs text-gray-500">
                {item.duration} • {item.price}
              </Text>
            </View>
            
            {item.status === 'confirmed' && (
              <View className="flex-row space-x-2">
                <TouchableOpacity className="border border-gray-300 px-3 py-1 rounded-lg">
                  <Text className="text-gray-700 text-sm font-medium">Reschedule</Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-primary-500 px-3 py-1 rounded-lg">
                  <Text className="text-white text-sm font-medium">Directions</Text>
                </TouchableOpacity>
              </View>
            )}
            
            {item.status === 'completed' && (
              <TouchableOpacity className="bg-primary-500 px-3 py-1 rounded-lg">
                <Text className="text-white text-sm font-medium">Book Again</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </Card>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="px-4 py-4 bg-white border-b border-gray-200">
        <Text className="text-2xl font-bold text-gray-900 mb-4">
          My Bookings
        </Text>
        
        {/* Tab Selector */}
        <View className="flex-row bg-gray-100 rounded-xl p-1">
          <TouchableOpacity
            className={`flex-1 py-2 rounded-lg ${
              activeTab === 'upcoming' ? 'bg-white shadow-sm' : ''
            }`}
            onPress={() => setActiveTab('upcoming')}
          >
            <Text className={`text-center font-medium ${
              activeTab === 'upcoming' ? 'text-gray-900' : 'text-gray-600'
            }`}>
              Upcoming
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className={`flex-1 py-2 rounded-lg ${
              activeTab === 'past' ? 'bg-white shadow-sm' : ''
            }`}
            onPress={() => setActiveTab('past')}
          >
            <Text className={`text-center font-medium ${
              activeTab === 'past' ? 'text-gray-900' : 'text-gray-600'
            }`}>
              Past
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1 px-4 py-4">
        {activeTab === 'upcoming' ? (
          upcomingBookings.length > 0 ? (
            <FlatList
              data={upcomingBookings}
              renderItem={renderBooking}
              keyExtractor={(item) => item.id}
              scrollEnabled={false}
            />
          ) : (
            <View className="flex-1 items-center justify-center py-12">
              <View className="w-20 h-20 bg-gray-100 rounded-full items-center justify-center mb-4">
                <Ionicons name="calendar-outline" size={32} color="#9CA3AF" />
              </View>
              <Text className="text-lg font-semibold text-gray-900 mb-2">
                No upcoming bookings
              </Text>
              <Text className="text-gray-600 text-center mb-6">
                Book your next appointment to see it here
              </Text>
              <TouchableOpacity className="bg-primary-500 px-6 py-3 rounded-xl">
                <Text className="text-white font-medium">Browse Services</Text>
              </TouchableOpacity>
            </View>
          )
        ) : (
          pastBookings.length > 0 ? (
            <FlatList
              data={pastBookings}
              renderItem={renderBooking}
              keyExtractor={(item) => item.id}
              scrollEnabled={false}
            />
          ) : (
            <View className="flex-1 items-center justify-center py-12">
              <View className="w-20 h-20 bg-gray-100 rounded-full items-center justify-center mb-4">
                <Ionicons name="time-outline" size={32} color="#9CA3AF" />
              </View>
              <Text className="text-lg font-semibold text-gray-900 mb-2">
                No past bookings
              </Text>
              <Text className="text-gray-600 text-center">
                Your booking history will appear here
              </Text>
            </View>
          )
        )}
      </ScrollView>
    </SafeAreaView>
  );
}