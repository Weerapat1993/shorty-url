import FormInput from "@/Components/Form/FormInput";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import { SaveOutlined } from "@ant-design/icons";
import { useForm } from "@inertiajs/react";
import { Button, Card, Radio, Typography } from "antd";
import { RadioChangeEvent } from "antd/lib";
import { FormEventHandler } from "react";

const { Title } = Typography

type Props = {
    type: EnumType
    initialValues: FieldType;
    linkId?: number;
}

export enum EnumType {
    create = "create",
    update = "update",
}


export type FieldType = {
    id?: number;
    destination: string;
    title: string;
    slug: string;
    status: 'Draft' | 'Published';
    user_id: number;
};


const defaultProps = {
    type: 'create',
    categories: [],
    initialValues: {},
    linkId: 0,
}


const LinkForm: React.FC<Props> = (props) => {
    const propsWithDefaults = {
        ...defaultProps,
        ...props,
    }
    const { type, initialValues, linkId } = propsWithDefaults

    const { data, post, patch, setData, processing, errors, recentlySuccessful } =
        useForm(initialValues);

    const onChangeStatus = ({ target: { value } }: RadioChangeEvent) => {
        setData("status", value)
    };

    const statusOptions = [
        { label: 'Draft', value: 'Draft' },
        { label: 'Published', value: 'Published' },
    ];

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        switch(type) {
            case EnumType.create:
                post(route('links.store'));
                break
            case EnumType.update:
                patch(route('links.update', linkId));
                break
        }
    };

    return (
        <Card>
            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel className="mb-2" htmlFor="status" value="Status" />
                    <Radio.Group
                        name="status"
                        options={statusOptions}
                        onChange={onChangeStatus}
                        value={data.status}
                        optionType="button"
                        buttonStyle="solid"
                        size="large"
                    />
                    <InputError className="mt-2" message={errors.status} />
                </div>
                <FormInput
                    label="Destination"
                    type="text"
                    value={data.destination}
                    onChange={(e) => setData("destination", e.target.value)}
                    required
                    isFocused
                    errorMessage={errors.destination}
                />
                <FormInput
                    label="Title"
                    type="text"
                    value={data.title}
                    onChange={(e) => setData("title", e.target.value)}
                    required
                    isFocused
                    errorMessage={errors.title}
                />
                <Title level={4}>Short Link</Title>
                <FormInput
                    label="Slug"
                    type="text"
                    value={data.slug}
                    onChange={(e) => setData("slug", e.target.value)}
                    required
                    isFocused
                    errorMessage={errors.slug}
                />
                <div className="flex items-center justify-center gap-4">
                    <Button
                        htmlType="submit"
                        icon={<SaveOutlined />}
                        size="large"
                        type="primary"
                        loading={processing}
                        disabled={processing}
                    >
                        Save
                    </Button>
                </div>
            </form>
        </Card>
    )
}

export default LinkForm
