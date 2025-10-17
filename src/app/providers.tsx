// app/providers.tsx
'use client';

import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

interface ProvidersProps {
	children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
	return (
		<SessionProvider
			basePath='/api/auth'
			refetchInterval={5 * 60} // Refetch every 5 minutes
			refetchOnWindowFocus={true}
			refetchWhenOffline={false}
		>
			{children}
		</SessionProvider>
	);
}
