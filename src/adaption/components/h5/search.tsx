
import {
  Form,
  Input,
  Button,
  TextArea,
  DatePicker,
  Stepper,
  Switch,
} from 'antd-mobile'
import dayjs from 'dayjs'
import type { SearchProps } from '../type';

function  Search({onSearch}:SearchProps) {
  const [form] = Form.useForm();
  return (
    <>
      <Form
        form={form}
        layout='horizontal'
        style={{borderTop: 0}}
        footer={
          <>
          <Button block type='submit' color='primary' size='large' style={{marginBottom: "10px", marginTop: "10px"}}
          onClick={onSearch}
          >
            Search
          </Button>
          <Button block  size='large' onClick={() => {
            form.resetFields();
          }}> 
          Clear
          </Button>
        </>
        }
      >
        <Form.Item
          name='name'
          label='姓名'
          rules={[{ required: true, message: '姓名不能为空' }]}
        >
          <Input onChange={console.log} placeholder='请输入姓名，1234567754344' />
        </Form.Item>
       
        <Form.Item name='amount' label='数量' childElementPosition='right'>
          <Stepper />
        </Form.Item>
        <Form.Item
          name='delivery'
          label='送货上门'
          childElementPosition='right'
        >
          <Switch  />
        </Form.Item>
        <Form.Item
          name='birthday'
          label='生日'
          trigger='onConfirm'
          onClick={(_e, datePickerRef) => {
            datePickerRef.current?.open()
          }}
        >
          <DatePicker>
            {value =>
              value ? dayjs(value).format('YYYY-MM-DD') : '请选择日期'
            }
          </DatePicker>
        </Form.Item>
        <Form.Item name='address' label='地址' help='详情地址'>
          <TextArea
            placeholder='请输入地址'
            maxLength={100}
            rows={2}
            showCount
          />
        </Form.Item>
      </Form>

    </>
  )
}


export default Search;