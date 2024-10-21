import ShortyLinkItem from '@/Components/Link/ShortyLinkItem';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Button } from 'antd';

export default function ShortyLinksCreate() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Create a link
                </h2>
            }
        >
            <Head title="Create a link" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <ShortyLinkItem />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
