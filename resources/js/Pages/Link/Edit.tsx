import LinkForm, { EnumType, FieldType } from '@/Components/Link/Form/LinkForm';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { LinkType, PageProps } from '@/types';
import { Head, usePage } from '@inertiajs/react';

type Props = {
    link: LinkType
}

export default function ShortyLinksEdit({ link }: Props) {
    const { user } = usePage<PageProps>().props.auth;
    const initialValues: FieldType = {
        destination: link.destination,
        title: link.title,
        slug: link.slug,
        user_id: user.id,
        status: link.status,
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Edit a link
                </h2>
            }
        >
            <Head title="Edit a link" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <LinkForm type={EnumType.update} initialValues={initialValues} linkId={link.id} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
