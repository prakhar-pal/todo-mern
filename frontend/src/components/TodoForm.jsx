import React, { useEffect } from "react";
import { Form, Input, Button, Space, Select, notification } from "antd";
import { TodoStatusOptions } from "../config/constants"; 
function TodoForm({ submitText, onSubmit, initialTodo }) {
    const [form] = Form.useForm();
    const onFinish = (e) => {
        const {title, description, status} = e;
        if(!(title && description && status)) {
            notification.error({
                message: "All Fields are required"
            })
            return;
        }
        const data = { title, description, status }
        if(initialTodo?._id) {
            data._id = initialTodo._id;
        }
        onSubmit(data);
    }

    useEffect(() => {
        form.setFieldsValue({
            status: TodoStatusOptions[0].value,
            ...initialTodo
        })
    }, [initialTodo])
    return (
        <Form
            layout={"vertical"}
            form={form}
            onFinish={onFinish}
        >
            <Form.Item label="Title" name="title" rules={[{ required: true, message: "Title is required"}]}>
                <Input placeholder="title" />
            </Form.Item>
            <Form.Item label="Description" name="description" rules={[{ required: true, message: "Description is required"}]}>
                <Input.TextArea placeholder="description" rows={8}/>
            </Form.Item>
            <Form.Item label="Status" name="status" rules={[{ required: true, message: "Status is required"}]}>
                <Select options={TodoStatusOptions}/>
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
