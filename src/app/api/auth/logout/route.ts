// app/api/auth/logout/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../[...nextauth]/route';

export async function POST(request: NextRequest) {
	try {
		const session = await getServerSession(authOptions);

		if (!session?.backendToken) {
			return NextResponse.json(
				{ success: false, message: 'Not authenticated' },
				{ status: 401 },
			);
		}

		const backendResponse = await fetch(
			`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`,
			{
				method: 'POST',
				headers: {
					Authorization: `Bearer ${session.backendToken}`,
					'Content-Type': 'application/json',
				},
			},
		);

		const backendData = backendResponse.ok
			? await backendResponse.json()
			: null;

		return NextResponse.json({
			success: true,
			message: 'Logged out successfully',
			backend: backendData,
		});
	} catch (error) {
		return NextResponse.json({
			success: true,
			message: 'Logged out (backend unavailable)',
		});
	}
}
