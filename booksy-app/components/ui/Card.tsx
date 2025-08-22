import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onPress?: () => void;
  shadow?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className,
  onPress,
  shadow = true,
}) => {
  const baseClasses = 'bg-white rounded-xl p-4';
  const shadowClasses = shadow ? 'shadow-md shadow-gray-200' : '';

  if (onPress) {
    return (
      <TouchableOpacity
        onPress={onPress}
        className={cn(baseClasses, shadowClasses, className)}
        activeOpacity={0.7}
      >
        {children}
      </TouchableOpacity>
    );
  }

  return (
    <View className={cn(baseClasses, shadowClasses, className)}>
      {children}
    </View>
  );
};

export default Card;