import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import { cn } from '@/lib/utils';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  className,
}) => {
  const baseClasses = 'rounded-xl flex-row items-center justify-center';
  
  const variantClasses = {
    primary: 'bg-primary-500 shadow-sm',
    secondary: 'bg-secondary-500 shadow-sm',
    outline: 'border-2 border-primary-500 bg-transparent',
    ghost: 'bg-transparent',
  };

  const sizeClasses = {
    sm: 'px-3 py-2',
    md: 'px-4 py-3',
    lg: 'px-6 py-4',
  };

  const textVariantClasses = {
    primary: 'text-white font-semibold',
    secondary: 'text-white font-semibold',
    outline: 'text-primary-500 font-semibold',
    ghost: 'text-primary-500 font-semibold',
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };

  const disabledClasses = disabled ? 'opacity-50' : '';

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        disabledClasses,
        className
      )}
    >
      {loading && (
        <ActivityIndicator 
          size="small" 
          color={variant === 'outline' || variant === 'ghost' ? '#0ea5e9' : 'white'} 
          className="mr-2"
        />
      )}
      <Text className={cn(textVariantClasses[variant], textSizeClasses[size])}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;