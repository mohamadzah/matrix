import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { cn } from '@/lib/utils';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  onFilterPress?: () => void;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChangeText,
  placeholder = "Search services, businesses...",
  onFilterPress,
  className,
}) => {
  return (
    <View className={cn('flex-row items-center bg-white rounded-full px-4 py-3 shadow-sm', className)}>
      <Ionicons name="search" size={20} color="#9CA3AF" className="mr-3" />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        className="flex-1 text-base text-gray-700"
        placeholderTextColor="#9CA3AF"
      />
      {onFilterPress && (
        <TouchableOpacity onPress={onFilterPress} className="ml-3">
          <Ionicons name="options" size={20} color="#0ea5e9" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchBar;