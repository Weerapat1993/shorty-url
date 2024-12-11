import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Pie } from '@ant-design/plots';

export default function Dashboard({ pie }) {
    console.log(pie);
    const config = {
        data: pie.map(item => ({
            type: item.ageGroup,
            value: item.count,
        })),
        angleField: 'value',
        colorField: 'type',
        label: {
          text: 'value',
          position: 'outside',
        },
        legend: {
          color: {
            title: false,
            position: 'right',
            rowPadding: 5,
          },
        },
    };
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 bg-slate-300">
                    <Pie {...config} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
