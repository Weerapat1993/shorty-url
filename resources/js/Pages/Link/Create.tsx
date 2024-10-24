import LinkForm, { EnumType, FieldType } from '@/Components/Link/Form/LinkForm';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PageProps } from '@/types';
import { Head, usePage } from '@inertiajs/react';

export default function ShortyLinksCreate() {
    const { user } = usePage<PageProps>().props.auth;
    const initialValues: FieldType = {
        destination: '',
        title: '',
        slug: '',
        user_id: user.id,
        status: 'Draft',
    };

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
                    <LinkForm type={EnumType.create} initialValues={initialValues} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
