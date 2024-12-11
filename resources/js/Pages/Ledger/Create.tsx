import LedgerForm, { EnumType, FieldType } from '@/Components/Ledger/Form/LedgerForm';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PageProps } from '@/types';
import { Head, usePage } from '@inertiajs/react';

export default function LedgerCreate() {
    const { user } = usePage<PageProps>().props.auth;
    const initialValues: FieldType = {
        title: 'นาย',
        firstname: '',
        lastname: '',
        birthdate: '',
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    สร้างบัญชี รายรับ-รายจ่าย
                </h2>
            }
        >
            <Head title="สร้างบัญชี รายรับ-รายจ่าย" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <LedgerForm type={EnumType.create} initialValues={initialValues} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
