import { Navbar } from '@/app/shared/components/widgets/Navbar';
import type { FC } from 'react';

interface FreelancerProjectManagementProps {}

const ClientProjectManagement: FC<FreelancerProjectManagementProps> = () => {
    return (
        <div>
            <Navbar />

            <h1>Freelancer Project Management Page</h1>
        </div>
    );
}

export default ClientProjectManagement;
