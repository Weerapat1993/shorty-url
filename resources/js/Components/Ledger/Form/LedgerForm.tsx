import FormInput from "@/Components/Form/FormInput";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import { SaveOutlined } from "@ant-design/icons";
import { useForm } from "@inertiajs/react";
import { Button, Card, Radio, Typography, DatePicker } from "antd";
import type { DatePickerProps } from "antd";
import { RadioChangeEvent } from "antd/lib";
import dayjs from "dayjs";
import { FormEventHandler } from "react";

const { Title } = Typography

type Props = {
    type: EnumType
    initialValues: FieldType;
    ledgerId?: number;
}

export enum EnumType {
    create = "create",
    update = "update",
}


export type FieldType = {
    id?: number;
    title: string;
    firstname: string;
    lastname: string;
    birthdate: string;
};

const dateFormat = 'YYYY-MM-DD';

const defaultProps = {
    type: 'create',
    categories: [],
    initialValues: {},
    ledgerId: 0,
}


const LedgerForm: React.FC<Props> = (props) => {
    const propsWithDefaults = {
        ...defaultProps,
        ...props,
    }
    const { type, initialValues, ledgerId } = propsWithDefaults

    const { data, post, patch, setData, processing, errors, recentlySuccessful } =
        useForm(initialValues);

    const onChangeStatus = ({ target: { value } }: RadioChangeEvent) => {
        setData("title", value)
    };

    const onChangeDate: DatePickerProps['onChange'] = (date, dateString) => {
        setData("birthdate", dateString);
    };

    const titleOptions = [
        { label: 'นาย', value: 'นาย' },
        { label: 'นาง', value: 'นาง' },
        { label: 'นางสาว', value: 'นางสาว' },
    ];

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        switch(type) {
            case EnumType.create:
                post(route('ledgers.store'));
                break
            case EnumType.update:
                patch(route('ledgers.update', ledgerId));
                break
        }
    };

    return (
        <Card>
            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel className="mb-2" htmlFor="title" value="คำนำหน้าชื่อ" />
                    <Radio.Group
                        name="title"
                        options={titleOptions}
                        onChange={onChangeStatus}
                        value={data.title}
                        optionType="button"
                        buttonStyle="solid"
                        size="large"
                    />
                    <InputError className="mt-2" message={errors.title} />
                </div>
                <FormInput
                    label="ชื่อ"
                    type="text"
                    value={data.firstname}
                    onChange={(e) => setData("firstname", e.target.value)}
                    required
                    isFocused
                    errorMessage={errors.firstname}
                />
                <FormInput
                    label="นามสกุล"
                    type="text"
                    value={data.lastname}
                    onChange={(e) => setData("lastname", e.target.value)}
                    required
                    isFocused
                    errorMessage={errors.lastname}
                />
                <div>
                    <InputLabel htmlFor="birthdate" value="วันเดือนปีเกิด" />
                    <DatePicker defaultValue={data.birthdate ? dayjs(data.birthdate, dateFormat) : undefined} size="large" onChange={onChangeDate} required />
                    <InputError className="mt-2" message={errors.birthdate} />
                </div>

                <div className="flex items-center justify-center gap-4">
                    <Button
                        htmlType="submit"
                        icon={<SaveOutlined />}
                        size="large"
                        type="primary"
                        loading={processing}
                        disabled={processing}
                    >
                        บันทึก
                    </Button>
                </div>
            </form>
        </Card>
    )
}

export default LedgerForm
