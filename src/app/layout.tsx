// app/layout.tsx - UPDATE
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import Providers from './providers'; // ← ADD THIS

const inter = Inter({
	variable: '--font-primary',
	subsets: ['latin'],
	display: 'swap',
});

const poppins = Poppins({
	variable: '--font-secondary',
	weight: ['400', '500', '600', '700'],
	subsets: ['latin'],
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Hustlink',
	description: 'Hustlink is the place to connect freelancers and clients',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={`${inter.variable} ${poppins.variable} antialiased`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
