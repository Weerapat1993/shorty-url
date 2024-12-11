import LedgerForm, { EnumType, FieldType } from '@/Components/Ledger/Form/LedgerForm';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { LedgerType, PageProps } from '@/types';
import { Head, usePage } from '@inertiajs/react';

type Props = {
    ledger: LedgerType
}

export default function LedgerEdit(props: Props) {
    const { ledger } = props
    const { user } = usePage<PageProps>().props.auth;
    const initialValues: FieldType = {
        id: ledger.id || 0,
        title: ledger.title,
        firstname: ledger.firstname,
        lastname: ledger.lastname,
        birthdate: ledger.birthdate,
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    แก้ไขบัญชี รายรับ-รายจ่าย
                </h2>
            }
        >
            <Head title="สร้างบัญชี รายรับ-รายจ่าย" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <LedgerForm type={EnumType.update} initialValues={initialValues} ledgerId={initialValues.id} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
