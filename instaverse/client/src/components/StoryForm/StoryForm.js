import React, { useEffect } from 'react'

import { Card, Form, Input, Typography, Button } from 'antd';
import { CanceledError } from 'axios';
import FileBase64 from "react-file-base64";
import { useDispatch, useSelector } from 'react-redux';

import { createStory, updateStory } from '../../actions/stories';
import style from "./style";

const { Title } = Typography;

function StoryForm({selectedId, setSelectedId}) {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const story = useSelector((state) => selectedId ? state.stories.find(story => story._id===selectedId) : null);

  const onSubmit = (formValues) => {
    selectedId ? 
    dispatch(updateStory(selectedId, formValues)) :
    dispatch(createStory(formValues));

    reset();
  };

  useEffect(() => {
    if(story){
      form.setFieldsValue(story);
    }
  }, [story, form]);

  const reset = () => {
    form.resetFields();
    setSelectedId(null);
  }

  return (
    <Card 
      style={style.formCard}
      title={
        <Title level={4} style={style.formTitle}>
          {selectedId? "Editing" : "Share"} a story
        </Title>
      }
    >
      <Form
        form={form}
        labelCol={{span: 6}}
        wrapperCol={{span: 16}}
        layout='horizontal'
        size='middle'
        onFinish={onSubmit}
      >
        <Form.Item name="username" label="Username" rules={[{required: true}]}>
          <Input allowClear />
        </Form.Item>
        <Form.Item name="caption" label="Caption" rules={[{required: true}]}>
          <Input.TextArea allowClear autoSize={{ minRows: 2, maxRows: 6 }}/>
        </Form.Item>
        <Form.Item name="tags" label="Tags">
          <Input.TextArea allowClear autoSize={{ minRows: 2, maxRows: 6 }}/>
        </Form.Item>
        <Form.Item name="image" label="Image" rules={[{required: true}]}>
          <FileBase64 
            type="file"
            mutiple={false}  
            onDone={(e) => {
              form.setFieldsValue({
                image: e.base64
              })
            }}
          />
        </Form.Item>
        <Form.Item wrapperCol={{
          span: 16,
          offset: 6
        }}
        >
            <Button
              type="primary"
              block
              htmlType='submit'
            >
              Share
            </Button>
        </Form.Item>
        {!selectedId ? null :
                <Form.Item wrapperCol={{
                  span: 16,
                  offset: 6
                }}
                >
                    <Button
                      type="primary"
                      block
                      htmlType='button'
                      onClick={reset}
                      danger
                    >
                     Cancel
                    </Button>
                </Form.Item>
        }
      </Form>
    </Card>
  )
}

export default StoryForm;