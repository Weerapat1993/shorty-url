import React, { useState } from 'react';
import type { TableColumnsType, TableProps } from 'antd';
import { Button, Space, Table } from 'antd';
import { LedgerType } from '@/types';
import { getAge } from '@/Utils/getAge';
import { EditOutlined } from '@ant-design/icons';
import { Link, useForm } from '@inertiajs/react';
import DeleteLedgerButton from './DeleteLedgerButton';

type OnChange = NonNullable<TableProps<DataType>['onChange']>;

type GetSingle<T> = T extends (infer U)[] ? U : never;
type Sorts = GetSingle<Parameters<OnChange>[2]>;

interface DataType {
	key: number;
	name: string;
	age: number;
	birthdate: string;
}

type Props = {
	data: LedgerType[];
}

const LedgerTable: React.FC<Props> = ({ data }) => {
  const { delete: deleteMethod } = useForm()
	const [sortedInfo, setSortedInfo] = useState<Sorts>({});


    const handleDelete = (ledgerId: number) => {
        deleteMethod(route('ledgers.destroy', ledgerId))
    }
	const handleChange: OnChange = (pagination, filters, sorter) => {
		setSortedInfo(sorter as Sorts);
	};

	const dataMapping = (data || []).map(item => ({
		key: item.id,
		name: `${item.title} ${item.firstname} ${item.lastname}`,
		age: getAge(item.birthdate),
		birthdate: item.birthdate,
	}))

	const columns: TableColumnsType<DataType> = [
		{
			title: 'Name',
			dataIndex: 'name',
			key: 'name',
			sorter: (a, b) => a.name.length - b.name.length,
			sortOrder: sortedInfo.columnKey === 'name' ? sortedInfo.order : null,
			ellipsis: true,
		},
		{
			title: 'Age',
			dataIndex: 'age',
			key: 'age',
			sorter: (a, b) => a.age - b.age,
			sortOrder: sortedInfo.columnKey === 'age' ? sortedInfo.order : null,
			ellipsis: true,
		},
		{
			title: 'Birthdate',
			dataIndex: 'birthdate',
			key: 'birthdate',
			ellipsis: true,
		},
        {
            title: 'Actions',
            key: 'operation',
            fixed: 'right',
            width: 120,
            render: (ledger) => (
              <Space size={[8, 8]} wrap>
                  <Link href={route('ledgers.edit', ledger.key)}>
                      <Button type='primary' icon={<EditOutlined />} />
                  </Link>
                  <form>
                      <DeleteLedgerButton onOk={() => handleDelete(ledger.key)} />
                  </form>
              </Space>
            ),
        }
	];

	return (
		<Table<DataType> columns={columns} dataSource={dataMapping} onChange={handleChange} />
	);
};

export default LedgerTable;
