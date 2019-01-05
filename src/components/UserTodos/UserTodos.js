import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Table, Input, Button, Icon, Divider, Tooltip } from "antd";
import moment from "moment";
import Highlighter from "react-highlight-words";

import {
  deleteTodoAcation,
  taskСompletedAction
} from "../../store/actions/projectActions";
import * as R from "ramda";
import "./UserTodos.css";

const Highlight = ({ children, highlightIndex }) => (
  <strong className="highlighted-text">{children}</strong>
);

class UserTodos extends React.Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
    searchText: ""
  };

  // ========== text filter start ==
  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters
    }) => (
      <div className="custom-filter-dropdown">
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button
          onClick={() => this.handleReset(clearFilters)}
          size="small"
          style={{ width: 90 }}
        >
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => (
      <Icon type="search" style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: text => (
      <Highlighter
        highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
        searchWords={[this.state.searchText]}
        autoEscape={true}
        textToHighlight={text.toString()}
        highlightTag={Highlight}
      />
    )
  });

  handleSearch = (selectedKeys, confirm) => {
    confirm();
    this.setState({ searchText: selectedKeys[0] });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: "" });
  };

  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null,
      searchText: ""
    });
  };

  // ========== text filter end ==

  render() {
    // let { sortedInfo, filteredInfo } = this.state;
    // sortedInfo = sortedInfo || {};
    // filteredInfo = filteredInfo || {};

    const columns = [
      {
        title: "Название задачи",
        dataIndex: "title",
        key: "title",
        // render: text => `${text.length > 40 ? `${R.take(40)(text)}...` : text}`
        render: (text, record) => (
          <Link to={`/profilePage/${record.id}`}>{text}</Link>
        )
      },
      {
        title: "Описание задачи",
        dataIndex: "description",
        key: "description",
        width: "30%",
        ...this.getColumnSearchProps("description")
      },
      {
        title: "Дата выполнения задачи",
        dataIndex: "datePicker",
        key: "datePicker",
        sorter: (a, b) => a.datePicker - b.datePicker
      },
      {
        title: "Дата создания задачи",
        dataIndex: "timeCreatedTodo",
        defaultSortOrder: "descend",
        render: text => moment(text).calendar(),
        sorter: (a, b) => a.timeCreatedTodo - b.timeCreatedTodo
      },
      {
        title: "Статус",
        dataIndex: "completed",
        key: "completed",
        width: "10%",
        sorter: (a, b) => a.completed - b.completed,
        render: (text, record) =>
          record.completed ? "выполнена" : "не выполнена"
      },
      {
        title: "Действия",
        key: "action",
        width: "16%",
        render: (text, record) => (
          <span>
            {" "}
            {record.completed ? (
              <Tooltip title="Дальнейшие действия невозможны">
                <Button icon="check" />
              </Tooltip>
            ) : (
              <Tooltip title="Отметить задачу как выполнена">
                <Button
                  onClick={id => this.props.taskСompletedAction(record.id)}
                />
              </Tooltip>
            )}
            <Divider
              type="vertical"
              style={{ backgroundColor: "rgb(170, 163, 163)" }}
            />
            <Tooltip title="Удалить задачу">
              <Button
                onClick={id => this.props.deleteTodoAcation(record.id)}
                type="danger"
                icon="delete"
              />
            </Tooltip>
          </span>
        )
      }
    ];

    const {
      todos,
      auth: { uid }
    } = this.props;

    // console.log(this.props.todos);

    return (
      <div>
        <div className="table-operations" />
        <Table
          title={() =>
            `Таблица задач пользователя, которые можно редактировать. Фильтр повесить на название задачи, столбец-описание убрать, в действия добавить кнопку ссылку далее на todoDetails `
          }
          columns={columns}
          dataSource={todos && R.filter(todo => todo.authorId === uid)(todos)}
          pagination={{ pageSize: 6 }}
          size="small"
          bordered
          rowKey={todo => todo.id}
          expandedRowRender={record => (
            <p style={{ margin: 0 }}>{record.description}</p>
          )}
        />
      </div>
    );
  }
}

export default connect(
  null,
  { deleteTodoAcation, taskСompletedAction }
)(UserTodos);
