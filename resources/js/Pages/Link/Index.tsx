import ShortyLinkItem from '@/Components/Link/ShortyLinkItem';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { Button } from 'antd';

export default function ShortyLinks() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Shorty Links
                </h2>
            }
            actions={
                <Link href={route('links.create')}>
                    <Button type='primary'>Create Link</Button>
                </Link>
            }
        >
            <Head title="Shorty Links" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <ShortyLinkItem />
                    <ShortyLinkItem />
                </div>
            </div>


        </AuthenticatedLayout>
    );
}
