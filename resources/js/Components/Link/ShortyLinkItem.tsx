import { LinkType } from '@/types';
import { asset } from '@/Utils/laravelBlade';
import { LinkOutlined, EditOutlined } from '@ant-design/icons';
import { Card, Typography, Row, Col, Space, Button, Descriptions, Tag } from 'antd';
import type { DescriptionsProps } from 'antd'
import CopyTextButton from './CopyTextButton';
import DeleteLinkButton from './DeleteLinkButton';
import { Link, useForm } from '@inertiajs/react';

const { Title, Paragraph } = Typography

type Props = {
    link: LinkType,
}

const ShortyLinkItem: React.FC<Props> = ({ link }) => {
    const { delete: deleteMethod } = useForm()
    const shortenLink = asset(`l/${link.slug}`)
    const fullLink = link.destination;

    const handleDelete = () => {
        deleteMethod(route('links.destroy', link.id))
    }
    const isPublish = link.status === 'Published'

    const publishDateItems = isPublish ? [
        {
            key: '2',
            label: 'Published Date',
            children: link.published_at,
        },
    ] : []
    const items: DescriptionsProps['items'] = [
        {
            key: '1',
            label: 'Status',
            children: <Tag color={isPublish ? 'success' : 'warning'}>{link.status}</Tag>,
        },
        ...publishDateItems,
    ]
    return (
        <Card className='mb-8'>
            <Row className='flex-row-reverse'>
                <Col className='text-right' flex="180px">
                    <Space size={[8, 8]} wrap>
                        <CopyTextButton text={shortenLink} />
                        <Link href={route('links.edit', link.id)}>
                            <Button type='primary' icon={<EditOutlined />} />
                        </Link>
                        <form>
                            <DeleteLinkButton onOk={handleDelete} />
                        </form>
                    </Space>
                </Col>
                <Col flex="auto">
                    <Title level={4}>{link.title}</Title>
                </Col>
            </Row>
            <Paragraph className='font-bold text-blue-600'>
                <Space size={[8, 8]} wrap>
                    <a href={shortenLink} target='_blank' rel="noopener noreferrer">{shortenLink}</a>
                    <a href={shortenLink} target='_blank' rel="noopener noreferrer"><LinkOutlined /></a>
                </Space>
            </Paragraph>
            <Paragraph className='text-white'>
                <a href={fullLink} target='_blank' rel="noopener noreferrer">{fullLink}</a>
            </Paragraph>
            <div className='hidden sm:block'>
                <Row>
                    <Col md={12} xs={24}>
                        <Descriptions column={2} items={items} />
                    </Col>
                    <Col md={12} xs={24}></Col>
                </Row>
            </div>
            <div className='sm:hidden block'>
                <Descriptions column={1} items={items} />
            </div>
        </Card>
    )
}

export default ShortyLinkItem
