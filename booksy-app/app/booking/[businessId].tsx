import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { Button, Card } from '@/components/ui';
import { Ionicons } from '@expo/vector-icons';

const availableSlots = [
  { id: '1', time: '9:00 AM', available: true },
  { id: '2', time: '9:30 AM', available: false },
  { id: '3', time: '10:00 AM', available: true },
  { id: '4', time: '10:30 AM', available: true },
  { id: '5', time: '11:00 AM', available: false },
  { id: '6', time: '11:30 AM', available: true },
  { id: '7', time: '12:00 PM', available: true },
  { id: '8', time: '12:30 PM', available: true },
  { id: '9', time: '2:00 PM', available: true },
  { id: '10', time: '2:30 PM', available: true },
  { id: '11', time: '3:00 PM', available: false },
  { id: '12', time: '3:30 PM', available: true },
];

const dates = [
  { id: '1', date: 'Today', day: '18', month: 'Dec', available: true },
  { id: '2', date: 'Tomorrow', day: '19', month: 'Dec', available: true },
  { id: '3', date: 'Thu', day: '20', month: 'Dec', available: true },
  { id: '4', date: 'Fri', day: '21', month: 'Dec', available: false },
  { id: '5', date: 'Sat', day: '22', month: 'Dec', available: true },
];

export default function BookingScreen() {
  const { businessId } = useLocalSearchParams<{ businessId: string }>();
  const [selectedDate, setSelectedDate] = useState(dates[0]);
  const [selectedTime, setSelectedTime] = useState<typeof availableSlots[0] | null>(null);
  const [step, setStep] = useState<'datetime' | 'confirmation'>('datetime');

  const businessName = 'Bella Beauty Salon';
  const serviceName = 'Haircut & Style';
  const servicePrice = '$85';
  const serviceDuration = '1h 30min';

  const renderDate = ({ item }: { item: typeof dates[0] }) => (
    <TouchableOpacity
      className={`items-center p-4 rounded-xl mr-3 min-w-[80px] ${
        selectedDate.id === item.id
          ? 'bg-primary-500'
          : item.available
          ? 'bg-white border border-gray-200'
          : 'bg-gray-100'
      }`}
      onPress={() => item.available && setSelectedDate(item)}
      disabled={!item.available}
    >
      <Text className={`text-xs font-medium mb-1 ${
        selectedDate.id === item.id
          ? 'text-white'
          : item.available
          ? 'text-gray-600'
          : 'text-gray-400'
      }`}>
        {item.date}
      </Text>
      <Text className={`text-lg font-bold mb-1 ${
        selectedDate.id === item.id
          ? 'text-white'
          : item.available
          ? 'text-gray-900'
          : 'text-gray-400'
      }`}>
        {item.day}
      </Text>
      <Text className={`text-xs ${
        selectedDate.id === item.id
          ? 'text-white'
          : item.available
          ? 'text-gray-600'
          : 'text-gray-400'
      }`}>
        {item.month}
      </Text>
    </TouchableOpacity>
  );

  const renderTimeSlot = ({ item }: { item: typeof availableSlots[0] }) => (
    <TouchableOpacity
      className={`p-3 rounded-lg mr-3 mb-3 min-w-[100px] ${
        selectedTime?.id === item.id
          ? 'bg-primary-500'
          : item.available
          ? 'bg-white border border-gray-200'
          : 'bg-gray-100'
      }`}
      onPress={() => item.available && setSelectedTime(item)}
      disabled={!item.available}
    >
      <Text className={`text-center font-medium ${
        selectedTime?.id === item.id
          ? 'text-white'
          : item.available
          ? 'text-gray-900'
          : 'text-gray-400'
      }`}>
        {item.time}
      </Text>
    </TouchableOpacity>
  );

  const handleBooking = () => {
    // Simulate booking process
    setStep('confirmation');
    setTimeout(() => {
      router.replace('/(tabs)/bookings');
    }, 2000);
  };

  if (step === 'confirmation') {
    return (
      <SafeAreaView className="flex-1 bg-white items-center justify-center">
        <View className="items-center px-6">
          <View className="w-20 h-20 bg-green-100 rounded-full items-center justify-center mb-6">
            <Ionicons name="checkmark" size={40} color="#10b981" />
          </View>
          <Text className="text-2xl font-bold text-gray-900 mb-2">
            Booking Confirmed!
          </Text>
          <Text className="text-gray-600 text-center mb-8">
            Your appointment has been successfully booked. You'll receive a confirmation email shortly.
          </Text>
          
          <Card className="w-full p-6 mb-6">
            <Text className="text-lg font-semibold text-gray-900 mb-4">
              Appointment Details
            </Text>
            <View className="space-y-3">
              <View className="flex-row justify-between">
                <Text className="text-gray-600">Business</Text>
                <Text className="font-medium text-gray-900">{businessName}</Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="text-gray-600">Service</Text>
                <Text className="font-medium text-gray-900">{serviceName}</Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="text-gray-600">Date</Text>
                <Text className="font-medium text-gray-900">{selectedDate.date}</Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="text-gray-600">Time</Text>
                <Text className="font-medium text-gray-900">{selectedTime?.time}</Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="text-gray-600">Duration</Text>
                <Text className="font-medium text-gray-900">{serviceDuration}</Text>
              </View>
              <View className="flex-row justify-between border-t border-gray-200 pt-3">
                <Text className="font-semibold text-gray-900">Total</Text>
                <Text className="font-bold text-primary-500 text-lg">{servicePrice}</Text>
              </View>
            </View>
          </Card>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      {/* Header */}
      <View className="flex-row items-center px-4 py-4 bg-white border-b border-gray-200">
        <TouchableOpacity onPress={() => router.back()} className="mr-4">
          <Ionicons name="arrow-back" size={24} color="#374151" />
        </TouchableOpacity>
        <View className="flex-1">
          <Text className="text-lg font-semibold text-gray-900">
            Book Appointment
          </Text>
        </View>
      </View>

      <ScrollView className="flex-1">
        {/* Service Info */}
        <View className="p-4 bg-white border-b border-gray-200">
          <View className="flex-row items-center">
            <View className="w-12 h-12 bg-gray-100 rounded-xl items-center justify-center mr-4">
              <Text className="text-xl">💇‍♀️</Text>
            </View>
            <View className="flex-1">
              <Text className="text-lg font-semibold text-gray-900">
                {serviceName}
              </Text>
              <Text className="text-gray-600">
                {businessName} • {serviceDuration}
              </Text>
            </View>
            <Text className="text-lg font-bold text-primary-500">
              {servicePrice}
            </Text>
          </View>
        </View>

        {/* Date Selection */}
        <View className="p-4">
          <Text className="text-lg font-semibold text-gray-900 mb-4">
            Select Date
          </Text>
          <FlatList
            data={dates}
            renderItem={renderDate}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/* Time Selection */}
        <View className="p-4">
          <Text className="text-lg font-semibold text-gray-900 mb-4">
            Available Times
          </Text>
          <View className="flex-row flex-wrap">
            {availableSlots.map((slot) => (
              <TouchableOpacity
                key={slot.id}
                className={`p-3 rounded-lg mr-3 mb-3 min-w-[100px] ${
                  selectedTime?.id === slot.id
                    ? 'bg-primary-500'
                    : slot.available
                    ? 'bg-white border border-gray-200'
                    : 'bg-gray-100'
                }`}
                onPress={() => slot.available && setSelectedTime(slot)}
                disabled={!slot.available}
              >
                <Text className={`text-center font-medium ${
                  selectedTime?.id === slot.id
                    ? 'text-white'
                    : slot.available
                    ? 'text-gray-900'
                    : 'text-gray-400'
                }`}>
                  {slot.time}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Booking Summary */}
        {selectedTime && (
          <View className="p-4">
            <Card className="p-4">
              <Text className="text-lg font-semibold text-gray-900 mb-3">
                Booking Summary
              </Text>
              <View className="space-y-2">
                <View className="flex-row justify-between">
                  <Text className="text-gray-600">Service</Text>
                  <Text className="font-medium text-gray-900">{serviceName}</Text>
                </View>
                <View className="flex-row justify-between">
                  <Text className="text-gray-600">Date & Time</Text>
                  <Text className="font-medium text-gray-900">
                    {selectedDate.date} at {selectedTime.time}
                  </Text>
                </View>
                <View className="flex-row justify-between">
                  <Text className="text-gray-600">Duration</Text>
                  <Text className="font-medium text-gray-900">{serviceDuration}</Text>
                </View>
                <View className="flex-row justify-between border-t border-gray-200 pt-2">
                  <Text className="font-semibold text-gray-900">Total</Text>
                  <Text className="font-bold text-primary-500 text-lg">{servicePrice}</Text>
                </View>
              </View>
            </Card>
          </View>
        )}
      </ScrollView>

      {/* Book Button */}
      {selectedTime && (
        <View className="p-4 bg-white border-t border-gray-200">
          <Button
            title="Confirm Booking"
            onPress={handleBooking}
            size="lg"
            className="w-full"
          />
        </View>
      )}
    </SafeAreaView>
  );
}