import React, { useState, memo, useEffect } from 'react';
import {
  FormItem,
  FormLayout,
  ArrayTable,
  DatePicker,
  Input,
  Select,
  Radio,
  Switch,
  FormDialog,
} from '@formily/antd';
import { Button } from 'antd';
import { useField } from '@formily/react';
import { createSchemaField } from '@formily/react';
import Style from './index.less';
import ItemMap from './ItemMap';

function ColumnsMap(props) {
  const { newcolumns, handleSwitch, form } = props;
  console.log('form', form);
  const { columnsData } = form.values;

  const handleChecked = (checked, dataIndex) => {
    form.setValues({
      columnsData: form.values.columnsData.map((i) =>
        i.dataIndex === dataIndex ? { ...i, isExport: checked } : i,
      ),
    });
  };

  const SchemaField = createSchemaField({
    components: { FormLayout, FormItem, ItemMap },
  });

  const getSchema = (form) => ({
    properties: {
      layout: {
        type: 'void',
        title: 'aaa',
        'x-component': 'FormLayout',
        'x-component-props': {
          labelCol: 6,
          itemCol: 24,
        },
        properties: {
          ItemMaps: {
            type: 'string',
            title: '添加',
            'x-decorator': 'FormItem',
            'x-component': 'ItemMap',
            'x-component-props': {
              form,
            },
          },
        },
      },
    },
  });

  const handleDialog = () => {
    FormDialog({ title: '添加字段', width: 300 }, 'exportItem', (form) => (
      <SchemaField schema={getSchema(form)}></SchemaField>
    ))
      .forConfirm((form, next) => {})
      .open({
        initialValues: {
          addArr: columnsData.slice(0, 5),
        },
      });
  };

  return (
    <>
      <div className={Style.wrap}>
        {columnsData.map((i) => {
          return (
            <div className={Style.item} key={i.dataIndex}>
              <Switch
                checked={i.isExport}
                onChange={(checked) => handleChecked(checked, i.dataIndex)}
              />
              <span className="m-l-md">{i.title}</span>
            </div>
          );
        })}
      </div>
      <Button onClick={handleDialog} title="添加">
        添加
      </Button>
    </>
  );
}

export default ColumnsMap;
