import { NavbarChat } from '@/app/client/chat/components/NavbarChat';

export const metadata = {
	title: 'Your App',
	description: 'Navbar example with Next.js + Tailwind',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body>
				<NavbarChat />
				<main>{children}</main>
			</body>
		</html>
	);
}
