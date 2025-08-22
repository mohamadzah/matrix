import React from 'react';
import { View, Text, Image, SafeAreaView } from 'react-native';
import { router } from 'expo-router';
import { Button } from '@/components/ui';

export default function OnboardingScreen() {
  return (
    <SafeAreaView className="flex-1 bg-gradient-to-br from-primary-50 to-secondary-50">
      <View className="flex-1 justify-center items-center px-6">
        {/* Logo/Icon placeholder */}
        <View className="w-32 h-32 bg-primary-500 rounded-full justify-center items-center mb-8">
          <Text className="text-white text-4xl font-bold">B</Text>
        </View>

        {/* Main heading */}
        <Text className="text-4xl font-bold text-gray-900 text-center mb-4">
          Book Your Perfect
        </Text>
        <Text className="text-4xl font-bold text-primary-500 text-center mb-6">
          Appointment
        </Text>

        {/* Subtitle */}
        <Text className="text-lg text-gray-600 text-center mb-12 leading-6">
          Discover and book appointments with top-rated professionals in your area
        </Text>

        {/* Features */}
        <View className="w-full mb-12">
          <View className="flex-row items-center mb-4">
            <View className="w-6 h-6 bg-primary-500 rounded-full mr-4" />
            <Text className="text-gray-700 text-base">Easy online booking</Text>
          </View>
          <View className="flex-row items-center mb-4">
            <View className="w-6 h-6 bg-primary-500 rounded-full mr-4" />
            <Text className="text-gray-700 text-base">Verified professionals</Text>
          </View>
          <View className="flex-row items-center">
            <View className="w-6 h-6 bg-primary-500 rounded-full mr-4" />
            <Text className="text-gray-700 text-base">Secure payments</Text>
          </View>
        </View>

        {/* Buttons */}
        <View className="w-full space-y-4">
          <Button
            title="Get Started"
            onPress={() => router.push('/(auth)/signup')}
            size="lg"
            className="w-full"
          />
          <Button
            title="I already have an account"
            onPress={() => router.push('/(auth)/login')}
            variant="ghost"
            size="lg"
            className="w-full"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}