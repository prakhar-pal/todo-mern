import React, { useEffect } from "react";
import { Form, Input, Button, Space } from "antd";

function TodoForm({ submitText, onSubmit }) {
    const [form] = Form.useForm();
    const onFinish = (e) => {
        const {title, description} = e;
        onSubmit({title, description});
    }
    return (
        <Form
            layout={"vertical"}
            form={form}
            onFinish={onFinish}
        >
            <Form.Item label="Title" name="title">
                <Input placeholder="title" />
            </Form.Item>
            <Form.Item label="Description" name="description">
                <Input placeholder="description" />
            </Form.Item>
            <Space align="end">
                <Form.Item>
                    <Button type="primary" htmlType="submit">{submitText}</Button>
                </Form.Item>
            </Space>
        </Form>
    );
}

export default TodoForm;
