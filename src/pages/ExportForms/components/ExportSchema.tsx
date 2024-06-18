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
import { createSchemaField } from '@formily/react';
import ColumnsMap from './ColumnsMap';
import Style from '../index.less';

const SchemaField = createSchemaField({
  components: {
    FormItem,
    FormLayout,
    ArrayTable,
    DatePicker,
    Input,
    Select,
    Radio,
    Switch,
    ColumnsMap,
  },
});

// 导出按钮
function ExportBtn(props) {
  const { newcolumns, handleSwitch, form } = props;

  const schema = {
    tyep: 'object',
    properties: {
      layout: {
        type: 'void',
        title: '导出字段',
        'x-component': 'FormLayout',
        'x-component-props': {
          labelCol: 6,
          wrapperCol: 10,
          // wrap: true,
          // style: { height: 500, marginBottom: 20 },
          layout: 'vertical',
        },
        properties: {
          radio: {
            type: 'string',
            title: '导出字段',
            'x-decorator': 'FormItem',
            'x-component': 'Radio.Group',
            default: 's',
            enum: [
              { label: '随视图', value: 's' },
              { label: '自定义', value: 'z' },
            ],
          },
          aaa: {
            type: 'string',
            title: ' ',
            'x-decorator': 'FormItem',
            'x-decorator-props': {
              bordered: true,
            },
            'x-component': 'ColumnsMap',
            'x-component-props': {
              newcolumns,
              form,
              handleSwitch,
            },
            // default: newColumns,
            'x-hidden': `{{$values.radio == 's'}}`,
          },
        },
      },
    },
  };

  // useEffect(() => {
  //   ExportFun()
  // }, [visible]);

  // const showExport = () => {
  //   setVisible(true);
  // };

  return <SchemaField schema={schema} />;
}

export default ExportBtn;
