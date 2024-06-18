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
import ExportSchema from './components/ExportSchema';

const ExportFun = (props) => {
  const tableColumns = [
    {
      title: '操作',
      dataIndex: 'operation',
      width: 40,
    },
    {
      title: '项目所属部门',
      dataIndex: 'territoryName',
      width: 120,
    },
    {
      title: '项目编号',
      dataIndex: 'projectCode',
      width: 90,
    },
    {
      title: '项目',
      dataIndex: 'projectName',
      width: 120,
    },
    {
      title: '客户',
      dataIndex: 'partnerName',
      width: 120,
    },
    {
      title: '异常类型',
      dataIndex: 'abnormalType',
      width: 80,
    },
    {
      title: '任务编号',
      dataIndex: 'taskCode',
      width: 110,
    },
    {
      title: '任务',
      dataIndex: 'taskName',
      width: 200,
    },
    {
      title: '异常任务',
      dataIndex: 'abnormalPhase',
      width: 120,
    },
    {
      title: '任务上传截止日期',
      dataIndex: 'deadline',
      width: 120,
    },
    {
      title: '任务负责',
      dataIndex: 'responsibleName',
      width: 80,
    },
    {
      title: '最新任务状态',
      dataIndex: 'latestTaskStatus',
      width: 100,
    },
    {
      title: '推送时间',
      dataIndex: 'pushTime',
      width: 130,
    },
  ];

  const aa = ['operation', 'territoryName'];

  const initCol = tableColumns.map((i) => {
    const { width, render, ...reset } = i;
    return { ...reset, isExport: !aa.includes(i.dataIndex) };
  });

  const initColumns = (initCol || []).map((i) => ({ ...i, isExport: true }));

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
};

ExportFun.title = 'ExportFun';

export default ExportFun;
