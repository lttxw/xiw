import React, { useState, memo, useEffect } from 'react';
import { Button } from 'antd';
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
import ExportSchema from './ExportSchema';

function ExportFun(props) {
  const { columns } = props;

  const initColumns = columns.map((i) => ({ ...i, isExport: true }));

  const [newcolumns, setnewColumns] = useState(initColumns);
  const handleSwitch = (checked, dataIndex) => {
    console.log('111', checked);
    const updatedColumns = newcolumns.map((item) => {
      return item.dataIndex === dataIndex
        ? { ...item, isExport: checked }
        : item;
    });
    setnewColumns(updatedColumns);
  };

  useEffect(() => {
    console.log('newcolumns', newcolumns);
  }, [newcolumns]);

  const handleClick = () => {
    FormDialog(
      { title: '导出任务', okText: 'queren', footer: null },
      'exportForm',
      (form) => (
        <ExportSchema
          form={form}
          newcolumns={newcolumns}
          handleSwitch={handleSwitch}
        />
      ),
    )
      .forConfirm((form, next) => {
        const { radio, aaa, columnsData } = form.values;
        console.log('columnsData', columnsData);
        // console.log('radio', radio);
      })
      .open({
        initialValues: {
          columnsData: initColumns,
        },
      });
  };

  return (
    <FormDialog.Portal id="exportForm">
      <Button action="export" onClick={handleClick}>
        导出
      </Button>
    </FormDialog.Portal>
  );
}

export default ExportFun;
