import  { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Button, Input,Col, Form, DatePicker,Switch, Row, Space, theme } from 'antd';
import type { SearchProps } from '../../type';

const  {TextArea} = Input;


const AdvancedSearchForm = ({onSearch}:SearchProps) => {
  const { token } = theme.useToken();
  const [form] = Form.useForm();
  const [expand, setExpand] = useState(false);

  const formStyle = {
    maxWidth: 'none',
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    padding: 24,
  };

  const getFields = () => {
    const count = expand;
    return <>
        <Col>
          <Form.Item
            name='name'
            label='姓名'
            rules={[{ required: true, message: '姓名不能为空' }]}
          >
            <Input onChange={console.log} placeholder='请输入姓名' />
          </Form.Item>
        </Col>
        <Col>
          <Form.Item name='amount' label='数量'>
            <Input onChange={console.log} placeholder='请输入数量' />
          </Form.Item>
        </Col>
        <Col>
          <Form.Item
            name='delivery'
            label='送货上门'
          >
            <Switch checked={false}/>
          </Form.Item>
        </Col>
        <Col>
          <Form.Item
            name='birthday'
            label='生日'
            trigger='onConfirm'
          >
            <DatePicker />
          </Form.Item>
        </Col>
        
        {
        count ? 
        <Col><Form.Item name='address' label='地址' help='详情地址'>
            <TextArea
              placeholder='请输入地址'
              maxLength={100}
              rows={2}
              showCount
            />
          </Form.Item></Col>
           : ''
      }
    </>
  };


  return (
    <Form form={form} name="advanced_search" style={formStyle} onClick={onSearch}>
      <Row gutter={24}>{getFields()}</Row>
      <div style={{ textAlign: 'right' }}>
        <Space size="small">
          <Button type="primary" htmlType="submit">
            Search
          </Button>
          <Button
            onClick={() => {
              form.resetFields();
            }}
          >
            Clear
          </Button>
          <a
            style={{ fontSize: 12 }}
            onClick={() => {
              setExpand(!expand);
            }}
          >
            <DownOutlined rotate={expand ? 180 : 0} /> Collapse
          </a>
        </Space>
      </div>
    </Form>
  );
};

const Search = ({onSearch}:{onSearch : () => void, children : React.ReactNode}) => {

  return (
    <>
      <AdvancedSearchForm onSearch={onSearch}/>
    </>
  );
};

export default Search;