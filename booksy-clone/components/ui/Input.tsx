import { TextInput, TextInputProps } from 'react-native';
import { cn } from '../../lib/utils';

export function Input({ className, ...props }: TextInputProps & { className?: string }) {
	return (
		<TextInput
			placeholderTextColor="#a1a1aa"
			className={cn(
				'px-4 py-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100',
				className,
			)}
			{...props}
		/>
	);
}