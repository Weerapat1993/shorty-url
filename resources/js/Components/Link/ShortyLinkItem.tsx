import { asset } from '@/Utils/laravelBlade';
import { CopyOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Link } from '@inertiajs/react';
import { Card, Typography, Button, Row, Col, Space } from 'antd';

const { Title, Paragraph } = Typography

const ShortyLinkItem = () => {
    return (
        <Card className='mb-8'>
            <Row>
                <Col flex="auto">
                    <Title level={4}>Title</Title>
                </Col>
                <Col className='text-right' flex="180px">
                    <Space size={[8, 8]} wrap>
                        <Button type='dashed' icon={<CopyOutlined />}>Copy</Button>
                        <Button type='primary' icon={<EditOutlined />} />
                        <Button type='primary' danger icon={<DeleteOutlined />} />
                    </Space>
                </Col>
            </Row>
            <Paragraph>
                <Link className='font-bold text-blue-600' href={asset('l/test')} target='_blank' rel="noopener noreferrer">{asset('l/test')}</Link>
            </Paragraph>
            <Paragraph>
                <Link href={asset('l/test')} target='_blank' rel="noopener noreferrer">{asset('l/test')}</Link>
            </Paragraph>
        </Card>
    )
}

export default ShortyLinkItem
