import React from 'react';
import { Card, Row, Col, Form, Checkbox, Dropdown, Menu, Radio } from 'antd';
import moment from 'moment';

export default function MomentDemo(props) {
  const year = moment().year();
  const val = moment().year(year).month(1).startOf('month');
  const val1 = moment().year(year).month(1).endOf('month');
  const quarter = moment().year(year).quarter(1).startOf('quarter');
  const quarter1 = moment().year(year).quarter(1).endOf('quarter');
  const y = moment().year(year).startOf('year');
  const y1 = moment().year(year).endOf('year');
  const format = 'YYYY-MM-DD HH:mm:ss';
  console.log(val.format('YYYY-MM-DD HH:mm:ss'));
  const menu = (
    <Menu>
      <Menu.Item>
        <sapn>1</sapn>
      </Menu.Item>
      <Menu.Item>
        <sapn>2</sapn>
      </Menu.Item>
      <Menu.Item>
        <sapn>3</sapn>
      </Menu.Item>
      {/* <Menu.Item>2</Menu.Item>
      <Menu.Item>3</Menu.Item> */}
    </Menu>
  );
  const [form] = Form.useForm();
  console.log('form', form.getFieldsValue('ch'));
  const { getFieldDecorator } = form;

  const yue1 = [
    {
      value: 1,
      label: '一月',
      isChecked: false,
    },
    {
      value: 2,
      label: '二月',
      isChecked: false,
    },
    {
      value: 3,
      label: '三月',
      isChecked: false,
    },
    {
      value: 4,
      label: '四月',
      isChecked: true,
    },
  ];
  const handle = (a, b) => {
    console.log('a', a);
    console.log('b', b);
    const { checkboxes } = a;
    console.log('checkboxes', checkboxes);
    const { handleSearch } = props;
    if (handleSearch) handleSearch(form);
    // if (checkboxes.length > 1) {
    //   form.setFieldsValue({
    //     checkboxes: checkboxes.splice(0, 1),
    //   });
    // }
  };
  const columns = [
    {
      title: '按时间选择',
      type: menu,
      dataIndex: 'productId',
      dataEnum: { year: [], quarter: [], month: [] },
      // component: <ProductSelect />,
      refactoryType: 'labelInValue',
    },
  ];
  return (
    <>
      <div>{year}</div>
      <div>{moment().subtract(1, 'years').format(format)}</div>
      <div>{moment().subtract(2, 'years').startOf('year').format(format)}</div>
      <div>{moment().subtract(2, 'years').endOf('year').format(format)}</div>
      <div>
        <span>{y.format(format)}</span>
        &nbsp;&nbsp;&nbsp;
        <span>{y1.format(format)}</span>
      </div>
      <div>
        <span>{val.format(format)}</span>
        &nbsp;&nbsp;&nbsp;
        <span>{val1.format(format)}</span>
      </div>
      <div>
        <span>{quarter.format(format)}</span>
        &nbsp;&nbsp;&nbsp;
        <span>{quarter1.format(format)}</span>
      </div>
      <Card>
        <Form form={form} onValuesChange={handle} labelAlign="left">
          {/* <Row>
            <Col span={6}>
              <Checkbox>aaa</Checkbox>
            </Col>
            <Col span={18}>
              <Checkbox>aaa</Checkbox>
            </Col>
          </Row> */}
          <Row type="flex" align="middle">
            <Col span={2}>
              <Form.Item name="drop">
                <Dropdown overlay={menu}>
                  <span>123</span>
                </Dropdown>
              </Form.Item>
            </Col>
            <Col span={22}>
              <Form.Item
                name="ch"
                valuePropName="checked"
                initialValue={yue1}
                wrapperCol={{ span: 21 }}
              >
                {yue1.map((i) => {
                  return (
                    <Checkbox
                      key={i.value}
                      value={i.value}
                      checked={i.isChecked}
                      onChange={(a) => handle(a, i)}
                    >
                      {i.label}
                    </Checkbox>
                  );
                })}
              </Form.Item>
            </Col>
          </Row>
          <Form.Item name="checkboxes" label="1245670" labelCol={{ span: 2 }}>
            <Checkbox.Group options={yue1} />
          </Form.Item>
          <Form.Item name="option">
            <Radio.Group>
              {yue1.map((option) => (
                <Radio key={option.value} value={option.value}>
                  {option.label}
                </Radio>
              ))}
            </Radio.Group>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
}
