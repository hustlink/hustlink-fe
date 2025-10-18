import { Navbar } from '@/app/shared/components/widgets/Navbar';
import type { FC } from 'react';

interface ClientProjectManagementProps {}

const ClientProjectManagement: FC<ClientProjectManagementProps> = () => {
    return (
        <div>
            <Navbar />
            <h1>Client Project Management Page</h1>
        </div>
    );
}

export default ClientProjectManagement;
