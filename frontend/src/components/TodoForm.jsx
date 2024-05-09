import React, { useEffect } from "react";
import { Form, Input, Button, Space } from "antd";

function TodoForm({ submitText, onSubmit, initialTodo }) {
    const [form] = Form.useForm();
    const onFinish = (e) => {
        const {title, description} = e;
        const data = {title, description }
        if(initialTodo?._id) {
            data._id = initialTodo._id;
        }
        onSubmit(data);
    }

    useEffect(() => {
        form.setFieldsValue(initialTodo)
    }, [initialTodo])
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
                <Input.TextArea placeholder="description" rows={8}/>
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
