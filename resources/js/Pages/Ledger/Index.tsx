import LedgerTable from '@/Components/Ledger/LedgerTable';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { LedgerType } from '@/types';
import { PlusOutlined } from '@ant-design/icons';
import { Head, Link } from '@inertiajs/react';
import { Button } from 'antd';

type Props = {
    ledgers: LedgerType[];
}

export default function LedgerIndex(props: Props) {
    const { ledgers } = props
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    บัญชีรายรับรายจ่าย
                </h2>
            }
            actions={
                <Link href={route('ledgers.create')}>
                    <Button icon={<PlusOutlined />} type='primary'>สร้างบัญชี</Button>
                </Link>
            }
        >
            <Head title="บัญชีรายรับรายจ่าย" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <LedgerTable data={ledgers} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
