import React from "react";
import { Divider } from "antd";

const SiderProfile = () => {
  return (
    <div>
      <h4>Данные о задачах</h4>
      <p>Всего: 33</p>
      <p>Выполненных: 33</p>
      <p>Просроченных: 33</p>
      <Divider />
      <h4>Данные о пользователе</h4>
      <p>Имя: User </p>
      <p>Статус: role </p>
      <p>Погремуха: nickName </p>
    </div>
  );
};

export default SiderProfile;
