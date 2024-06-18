import React from 'react';
import { Switch } from 'antd';
import Style from '../index.less';

export default function ItemMap(props) {
  const { form } = props;
  console.log('item', form);
  const { addArr } = form.values;

  const handleChecked = (checked, dataIndex) => {
    form.setValues({
      addArr: form.values.addArr.map((i) =>
        i.dataIndex === dataIndex ? { ...i, isExport: checked } : i,
      ),
    });
  };

  return (
    <>
      {addArr.map((i) => {
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
      ;
    </>
  );
}
