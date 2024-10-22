import { CloseCircleOutlined, DeleteOutlined } from "@ant-design/icons"
import { Button, Modal } from "antd"

const { confirm } = Modal

type Props = {
    onOk: () => void
    onCancel?: () => void
}

const DeleteLinkButton: React.FC<Props> = ({ onOk, onCancel }) => {
    const showDeleteConfirm = () => {
        confirm({
          title: 'Delete link?',
          icon: <CloseCircleOutlined />,
          content: 'Are you sure delete this link?',
          okText: 'Delete',
          okType: 'danger',
          type: 'error',
          okButtonProps: {
            danger: true,
            type: 'primary',
            icon: <DeleteOutlined />,
          },
          cancelText: 'No',
          onOk() {
            onOk()
          },
          onCancel() {
            if (onCancel) {
                onCancel()
            }
          },
        });
    };

    return (
        <Button onClick={showDeleteConfirm} type="primary" danger icon={<DeleteOutlined />} />
    )
}

export default DeleteLinkButton
