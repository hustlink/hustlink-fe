// types/entities/user.ts
export interface User {
	id?: string; // universal id dari BE (login response)
	clientId?: string; // khusus hasil query Prisma client
	freelancerId?: string; // khusus hasil query Prisma freelancer
	firstName?: string;
	lastName?: string;
	name?: string; // fallback kalau BE pakai single "name"
	email: string;
	phone?: string;
	address?: string;
	provider: string;
	dateOfBirth?: Date;
	country?: string;
	province?: string;
	city?: string;
	bio?: string;
	isCompleted: boolean;
	createdAt?: Date;
	updatedAt?: Date;
	userType?: 'client' | 'freelancer';
}
