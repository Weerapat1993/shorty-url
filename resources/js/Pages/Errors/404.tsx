import GuestLayout from '@/Layouts/GuestLayout';
import { Button, Result } from 'antd';
import { Link } from '@inertiajs/react';
import { PageProps } from '@/types';

export default function Error404(props: PageProps) {
    return (
        <GuestLayout>
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={
                    <Link href="/">
                        <Button type="primary">กลับไปหน้าหลัก</Button>
                    </Link>
                }
            />
        </GuestLayout>
    );
}
