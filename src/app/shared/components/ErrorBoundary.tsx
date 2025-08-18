// components/ErrorBoundary.tsx - For handling auth errors
'use client';

import { Component, ReactNode } from 'react';

interface Props {
	children: ReactNode;
	fallback?: ReactNode;
}

interface State {
	hasError: boolean;
	error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error: Error): State {
		return { hasError: true, error };
	}

	componentDidCatch(error: Error, errorInfo: any) {
		console.error('Auth Error Boundary:', error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			return (
				this.props.fallback || (
					<div className='min-h-screen flex items-center justify-center bg-gray-50'>
						<div className='text-center'>
							<h2 className='text-xl font-semibold text-gray-900 mb-2'>
								Authentication Error
							</h2>
							<p className='text-gray-600 mb-4'>
								Something went wrong with authentication. Please try logging in
								again.
							</p>
							<button
								onClick={() => (window.location.href = '/login')}
								className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700'
							>
								Go to Login
							</button>
						</div>
					</div>
				)
			);
		}

		return this.props.children;
	}
}
