import React, { useState } from 'react';
import { Table, Input, InputNumber, Popconfirm, Form } from 'antd';
import 'antd/dist/antd.min.css'
const originData = [{
  id: '11',
  name: '11',
  university: '11',
  team: '11',
  teacher: '11',
  phone: '11',
  role: '11',
  email: '11',
},{
  id: '11',
  name: '11',
  university: '11',
  team: '11',
  teacher: '11',
  phone: '11',
  role: '11',
  email: '11',
},{
  id: '11',
  name: '11',
  university: '11',
  team: '11',
  teacher: '11',
  phone: '11',
  role: '11',
  email: '11',
},{
  id: '11',
  name: '11',
  university: '11',
  team: '11',
  teacher: '11',
  phone: '11',
  role: '11',
  email: '11',
},{
  id: '11',
  name: '11',
  university: '11',
  team: '11',
  teacher: '11',
  phone: '11',
  role: '11',
  email: '11',
},{
  id: '11',
  name: '11',
  university: '11',
  team: '11',
  teacher: '11',
  phone: '11',
  role: '11',
  email: '11',
},{
  id: '11',
  name: '11',
  university: '11',
  team: '11',
  teacher: '11',
  phone: '11',
  role: '11',
  email: '11',
},{
  id: '11',
  name: '11',
  university: '11',
  team: '11',
  teacher: '11',
  phone: '11',
  role: '11',
  email: '11',
},{
  id: '11',
  name: '11',
  university: '11',
  team: '11',
  teacher: '11',
  phone: '11',
  role: '11',
  email: '11',
},{
  id: '11',
  name: '11',
  university: '11',
  team: '11',
  teacher: '11',
  phone: '11',
  role: '11',
  email: '11',
},{
  id: '11',
  name: '11',
  university: '11',
  team: '11',
  teacher: '11',
  phone: '11',
  role: '11',
  email: '11',
},{
  id: '11',
  name: '11',
  university: '11',
  team: '11',
  teacher: '11',
  phone: '11',
  role: '11',
  email: '11',
},{
  id: '11',
  name: '11',
  university: '11',
  team: '11',
  teacher: '11',
  phone: '11',
  role: '11',
  email: '11',
},{
  id: '11',
  name: '11',
  university: '11',
  team: '11',
  teacher: '11',
  phone: '11',
  role: '11',
  email: '11',
},{
  id: '11',
  name: '11',
  university: '11',
  team: '11',
  teacher: '11',
  phone: '11',
  role: '11',
  email: '11',
},{
  id: '11',
  name: '11',
  university: '11',
  team: '11',
  teacher: '11',
  phone: '11',
  role: '11',
  email: '11',
},{
  id: '11',
  name: '11',
  university: '11',
  team: '11',
  teacher: '11',
  phone: '11',
  role: '11',
  email: '11',
}];

// for (let i = 0; i < 100; i++) {
//   originData.push({
//     key: i.toString(),
//     name: `Edrward ${i}`,
//     age: 32,
//     address: `London Park no. ${i}`,
//   });
// }

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

export default function EditableTable  () {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  

  const [editingKey, setEditingKey] = useState('');

  const isEditing = record => record.key === editingKey;

  const edit = record => {
    form.setFieldsValue({
      id: '',
      name: '',
      university: '',
      team: '',
      teacher: '',
      phone: '',
      role: '',
      email: '',
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async key => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex(item => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const columns = [
    {
      title: '序号',
      dataIndex: 'id',
      width: '5%',
      editable: true,
    },
    {
      title: '姓名',
      dataIndex: 'name',
      width: '8%',
      editable: true,
    },
    {
      title: '学校名称',
      dataIndex: 'university',
      width: '15%',
      editable: true,
    },
    {
      title: '团队名称',
      dataIndex: 'team',
      width: '20%',
      editable: true,
    },
    {
      title: '指导老师',
      dataIndex: 'teacher',
      width: '10%',
      editable: true,
    },

    {
      title: '手机',
      dataIndex: 'phone',
      width: '15%',
      editable: true,
    },

    {
      title: '角色',
      dataIndex: 'role',
      width: '5%',
      editable: true,
    },

    {
      title: '邮箱',
      dataIndex: 'email',
      width: '15%',
      editable: true,
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <a
              href="javascript:;"
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </a>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <a disabled={editingKey !== ''} onClick={() => edit(record)}>
            Edit
          </a>
        );
      },
    },
  ];
  const mergedColumns = columns.map(col => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: record => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};

