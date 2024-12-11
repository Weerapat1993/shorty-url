import { CloseCircleOutlined, DeleteOutlined } from "@ant-design/icons"
import { Button, Modal } from "antd"

const { confirm } = Modal

type Props = {
    onOk: () => void
    onCancel?: () => void
}

const DeleteLedgerButton: React.FC<Props> = ({ onOk, onCancel }) => {
    const showDeleteConfirm = () => {
        confirm({
          title: 'ลบบัญชี?',
          icon: <CloseCircleOutlined />,
          content: 'คุณต้องการลบบัญชีรายรับรายจ่ายใช่หรือไม่ ?',
          okText: 'ลบข้อมูล',
          okType: 'danger',
          type: 'error',
          okButtonProps: {
            danger: true,
            type: 'primary',
            icon: <DeleteOutlined />,
          },
          cancelText: 'ยกเลิก',
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

export default DeleteLedgerButton
