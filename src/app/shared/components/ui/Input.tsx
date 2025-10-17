import clsx from 'clsx';
import { InputHTMLAttributes, ReactNode } from 'react';

type InputVariant = 'small' | 'medium' | 'large';

interface InputProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
	variant?: InputVariant;
	iconLeft?: ReactNode;
	iconRight?: ReactNode;
}

/**
 * Responsive Variant Size Mapping for Input
 *
 * Tailwind Breakpoints:
 * - Default (mobile): < 640px
 * - sm: ≥ 640px
 * - md: ≥ 768px
 * - lg: ≥ 1024px
 * - xl: ≥ 1280px
 *
 * | Variant | Default (<640px)      | sm ≥640px         | md ≥768px         | lg ≥1024px         | xl ≥1280px     |
 * | :------ | :-------------------- | :---------------- | :---------------- | :----------------- | :------------- |
 * | small   | text-[8px]            | h-6 text-[10px]   | h-8 text-xs       | w-72 h-8 text-sm   | text-base      |
 * | medium  | text-[10px]           | h-7 text-xs       | h-9 text-sm       | w-80 h-10 text-base| text-lg        |
 * | large   | text-sm               | h-8 text-sm       | h-10 text-base    | w-96 h-12 text-lg  | text-xl        |
 */
const variantClasses: Record<InputVariant, string> = {
	small:
		'text-[8px] sm:h-6 sm:text-[10px] md:h-8 md:text-xs lg:max-w-72 lg:h-8 lg:text-sm xl:text-base',
	medium:
		'text-[10px] sm:h-7 sm:text-xs md:h-9 md:text-sm lg:max-w-80 lg:h-10 lg:text-base xl:text-lg',
	large:
		'text-xs h-8 sm:h-8 sm:text-sm md:h-10 md:text-base lg:max-w-96 lg:h-12 lg:text-lg xl:text-xl',
};

// Responsif padding dan gap berdasarkan variant
const spacingClasses: Record<InputVariant, string> = {
	small: 'gap-1 px-2 sm:gap-1.5 sm:px-2.5 md:gap-2 md:px-3',
	medium: 'gap-1.5 px-2.5 sm:gap-2 sm:px-3 md:gap-2.5 md:px-3.5',
	large: 'gap-2 px-3 sm:gap-2.5 sm:px-3.5 md:gap-3 md:px-4',
};

// Responsif icon size berdasarkan variant
const iconSizeClasses: Record<InputVariant, string> = {
	small:
		'[&>span>*]:w-3 [&>span>*]:h-3 sm:[&>span>*]:w-3.5 sm:[&>span>*]:h-3.5 md:[&>span>*]:w-4 md:[&>span>*]:h-4',
	medium:
		'[&>span>*]:w-3.5 [&>span>*]:h-3.5 sm:[&>span>*]:w-4 sm:[&>span>*]:h-4 md:[&>span>*]:w-4.5 md:[&>span>*]:h-4.5',
	large:
		'[&>span>*]:w-4 [&>span>*]:h-4 sm:[&>span>*]:w-4.5 sm:[&>span>*]:h-4.5 md:[&>span>*]:w-5 md:[&>span>*]:h-5',
};

export default function Input({
	variant = 'medium',
	className,
	iconLeft,
	iconRight,
	...props
}: InputProps) {
	return (
		<div
			className={clsx(
				'flex items-center w-full rounded-lg border-2 border-gray-500 bg-white focus-within:ring-2 focus-within:ring-blue-500 transition-all duration-200',
				variantClasses[variant],
				spacingClasses[variant],
				iconSizeClasses[variant],
				className,
			)}
		>
			{iconLeft && (
				<span className='flex items-center justify-center text-black shrink-0'>
					{iconLeft}
				</span>
			)}
			<input
				className='flex-1 bg-transparent focus:outline-none placeholder-gray-400 min-w-0'
				{...props}
			/>
			{iconRight && (
				<span className='flex items-center justify-center text-black shrink-0'>
					{iconRight}
				</span>
			)}
		</div>
	);
}
