import React, { useState } from 'react';
import { FormDialog, FormItem, FormLayout, Input } from '@formily/antd';
import { createSchemaField } from '@formily/react';
import { Button, Menu } from 'antd';
import { Link, Outlet, Switch, withRouter } from 'umi';
// import './index.less';
const { SubMenu } = Menu;

const SchemaField = createSchemaField({
  components: {
    FormItem,
    Input,
  },
});

const schema = {
  type: 'object',
  properties: {
    aaa: {
      type: 'string',
      title: '输入框1',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    bbb: {
      type: 'string',
      title: '输入框2',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    ccc: {
      type: 'string',
      title: '输入框3',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
    ddd: {
      type: 'string',
      title: '输入框4',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Input',
    },
  },
};

function HomePage(props) {
  const { children, location, route } = props;
  console.log('props', props);

  return (
    <>
      <div>
        <div>
          {/* <Menu>
            <SubMenu
              title={<Link to="/ExportForms">ExportForms</Link>}
            ></SubMenu>
            <SubMenu title={<Link to="/User">User</Link>}></SubMenu>
          </Menu> */}
        </div>
        <div>
          {/* <Switch location={location}>{children}</Switch> */}
          index
          {/* <Outlet /> */}
        </div>
      </div>
    </>
  );
}

HomePage.title = 'HomePage';
export default withRouter(HomePage);
