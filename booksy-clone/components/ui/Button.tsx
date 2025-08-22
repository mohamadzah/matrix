import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';
import { cn } from '../../lib/utils';

type ButtonProps = TouchableOpacityProps & {
	variant?: 'primary' | 'secondary' | 'ghost';
	size?: 'sm' | 'md' | 'lg';
	title: string;
};

export function Button({ variant = 'primary', size = 'md', title, className, ...props }: ButtonProps) {
	const base = 'rounded-xl items-center justify-center';
	const variants: Record<string, string> = {
		primary: 'bg-zinc-900 dark:bg-zinc-100',
		secondary: 'bg-zinc-100 dark:bg-zinc-900',
		ghost: 'bg-transparent',
	};
	const sizes: Record<string, string> = {
		sm: 'px-3 py-2',
		md: 'px-4 py-3',
		lg: 'px-5 py-4',
	};
	return (
		<TouchableOpacity {...props} className={cn(base, variants[variant], sizes[size], className)}>
			<Text className={cn('font-semibold', variant === 'primary' ? 'text-white dark:text-black' : 'text-zinc-900 dark:text-zinc-100')}>{title}</Text>
		</TouchableOpacity>
	);
}