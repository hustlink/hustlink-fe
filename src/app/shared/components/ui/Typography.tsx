import * as React from 'react';

import clsxm from '@/lib/clsxm';

const TypographyVariant = [
	'j0',
	'j1',
	'j2',
	'j3',
	'h1',
	'h2',
	'h3',
	'h4',
	'h5',
	'h6',
	's1',
	's2',
	's3',
	's4',
	'b1',
	'b2',
	'b3',
	'c1',
	'c2',
	'l1',
	'l2',
] as const;

const TypographyColor = [
	'primary',
	'secondary',
	'tertiary',
	'main-blue',
	'danger',
	'white',
] as const;
const TypographyFont = ['secondary', 'primary', 'tertiary'] as const;

type TypographyProps<T extends React.ElementType> = {
	/** @default <p> tag */
	as?: T;
	className?: string;
	color?: (typeof TypographyColor)[number];
	/**
	 * Responsive Variant Size Mapping
	 *
	 * | Variant | Default (<640px) | sm ≥640px   | md ≥768px   | lg ≥1024px  | Font Weight |
	 * | :------ | :--------------- | :----------- | :----------- | :----------- | :---------- |
	 * | j0      | text-2xl (24px)  | text-3xl(30) | text-4xl(36) | text-5xl(48) | 700         |
	 * | j1      | text-xl (20px)   | text-2xl(24) | text-3xl(30) | text-4xl(36) | 700         |
	 * | j2      | text-lg (18px)   | text-xl(20)  | text-2xl(24) | text-3xl(30) | 700         |
	 * | j3      | text-lg (18px)   | text-xl(20)  | text-xl(20)  | text-2xl(24) | 700         |
	 * | h1      | text-lg (18px)   | text-xl(20)  | text-xl(20)  | text-2xl(24) | 600         |
	 * | h2      | text-base(16px)  | text-lg(18)  | text-lg(18)  | text-xl(20)  | 600         |
	 * | h3      | text-base(16px)  | text-base(16)| text-lg(18)  | text-lg(18)  | 600         |
	 * | h4      | text-sm (14px)   | text-base(16)| text-base(16)| text-base(16)| 700         |
	 * | h5      | text-sm (14px)   | text-base(16)| text-base(16)| text-base(16)| 600         |
	 * | h6      | text-xs (12px)   | text-sm (14) | text-sm (14) | text-sm (14) | 600         |
	 * | s1      | text-base(16px)  | text-lg(18)  | text-lg(18)  | text-lg(18)  | 500         |
	 * | s2      | text-sm (14px)   | text-base(16)| text-base(16)| text-base(16)| 500         |
	 * | s3      | text-xs (12px)   | text-sm (14) | text-sm (14) | text-sm (14) | 500         |
	 * | s4      | text-[11px]      | text-xs(12)  | text-xs(12)  | text-xs(12)  | 500         |
	 * | b1      | text-base(16px)  | text-lg(18)  | text-lg(18)  | text-lg(18)  | 400         |
	 * | b2      | text-sm (14px)   | text-base(16)| text-base(16)| text-base(16)| 400         |
	 * | b3      | text-xs (12px)   | text-sm (14) | text-sm (14) | text-sm (14) | 400         |
	 * | c1      | text-[11px]      | text-xs(12)  | text-xs(12)  | text-xs(12)  | 400         |
	 * | c2      | text-[10px]      | text-[11px]  | text-[11px]  | text-[11px]  | 400         |
	 */
	variant?: (typeof TypographyVariant)[number];
	font?: (typeof TypographyFont)[number];
} & React.ComponentPropsWithoutRef<T>;

/** @see https://www.benmvp.com/blog/forwarding-refs-polymorphic-react-component-typescript/ */
type TypographyComponent = <T extends React.ElementType = 'p'>(
	props: TypographyProps<T>,
) => React.ReactNode | null;

const Typography: TypographyComponent = React.forwardRef(function Typography<
	T extends React.ElementType,
>(
	{
		as,
		children,
		className,
		color = 'primary',
		variant = 'b2',
		font,
		...rest
	}: TypographyProps<T>,
	ref?: React.ComponentPropsWithRef<T>['ref'],
) {
	const Component = as || 'p';
	return (
		<Component
			ref={ref}
			className={clsxm(
				//#region  //*=========== Variants ===========
				[
					variant === 'j0' && [
						'text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold',
					],
					variant === 'j1' && [
						'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold',
					],
					variant === 'j2' && [
						'text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold',
					],
					variant === 'j3' && [
						'text-lg sm:text-xl md:text-xl lg:text-2xl font-bold',
					],
					variant === 'h1' && [
						'text-lg sm:text-xl md:text-xl lg:text-2xl font-semibold',
					],
					variant === 'h2' && [
						'text-base sm:text-lg md:text-lg lg:text-xl font-semibold',
					],
					variant === 'h3' && [
						'text-base sm:text-base md:text-lg lg:text-lg font-semibold',
					],
					variant === 'h4' && [
						'text-sm sm:text-base md:text-base lg:text-base font-bold',
					],
					variant === 'h5' && [
						'text-sm sm:text-base md:text-base lg:text-base font-semibold',
					],
					variant === 'h6' && [
						'text-xs sm:text-sm md:text-sm lg:text-sm font-semibold',
					],
					variant === 's1' && [
						'text-base sm:text-lg md:text-lg lg:text-lg font-medium',
					],
					variant === 's2' && [
						'text-sm sm:text-base md:text-base lg:text-base font-medium',
					],
					variant === 's3' && [
						'text-xs sm:text-sm md:text-sm lg:text-sm font-medium',
					],
					variant === 's4' && [
						'text-[11px] sm:text-xs md:text-xs lg:text-xs font-medium',
					],
					variant === 'b1' && ['text-base sm:text-lg md:text-lg lg:text-lg'],
					variant === 'b2' && [
						'text-sm sm:text-base md:text-base lg:text-base',
					],
					variant === 'b3' && [
						'text-xs sm:text-sm md:text-sm lg:text-sm font-normal',
					],
					variant === 'c1' && ['text-[11px] sm:text-xs md:text-xs lg:text-xs'],
					variant === 'c2' && [
						'text-[10px] sm:text-[11px] md:text-[11px] lg:text-[11px] leading-[14px]',
					],
				],
				//#endregion  //*======== Variants ===========
				//#region  //*=========== Color ===========
				[
					color === 'primary' && ['text-black'],
					color === 'secondary' && ['text-gray-700'],
					color === 'tertiary' && ['text-gray-500'],
					color === 'main-blue' && ['text-[#2563eb]'],
					color === 'danger' && ['text-red-500'],
					color === 'white' && ['text-white'],
				],
				//#endregion  //*======== Color ===========
				//#region  //*=========== Font ===========
				// [
				//   font === 'secondary' && ['font-secondary'],
				//   font === 'primary' && ['font-primary'],
				// ],
				//#endregion  //*======== Font ===========
				className,
			)}
			{...rest}
		>
			{children}
		</Component>
	);
});

export default Typography;
