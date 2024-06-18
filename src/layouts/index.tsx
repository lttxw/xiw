import React, { useState } from 'react';
import { FormDialog, FormItem, FormLayout, Input } from '@formily/antd';
import { createSchemaField } from '@formily/react';
import { Button, Menu } from 'antd';
import { Link, Outlet, Switch, withRouter } from 'umi';
import './index.less';
const { SubMenu } = Menu;

function Layout(props) {
  const { children, location, route } = props;
  const { routes } = route;
  const MenuReander =
    Array.isArray(routes) &&
    routes.map((i) => {
      return (
        <SubMenu title={<Link to={i.path}>{i.title || i.path}</Link>}></SubMenu>
      );
    });
  return (
    <>
      <div className="app">
        <div className="left">
          <Menu>{MenuReander}</Menu>
        </div>
        <div className="right">{children}</div>
      </div>
    </>
  );
}

// Layout.title = '111';
export default Layout;
