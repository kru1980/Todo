import React from "react";
import { Table, Input, Button, Icon } from "antd";
import Highlighter from "react-highlight-words";
import * as R from "ramda";
import "./UserTodos.css";

class UserTodos extends React.Component {
  // console.log("userPage", todos);
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
        autoEscape
        textToHighlight={text.toString()}
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

  // ========== text filter end ==

  // handleChange = (pagination, filters, sorter) => {
  //   console.log("Various parameters", pagination, filters, sorter);
  //   this.setState({
  //     filteredInfo: filters,
  //     sortedInfo: sorter
  //   });
  // };

  // clearFilters = () => {
  //   this.setState({ filteredInfo: null, searchText: "" });
  // };

  // clearAll = () => {
  //   this.setState({
  //     filteredInfo: null,
  //     sortedInfo: null,
  //     searchText: ""
  //   });
  // };

  setDatePickerSort = () => {
    console.log("Нажал все-таки");

    this.setState({
      sortedInfo: {
        order: "descend",
        columnKey: "datePicker"
      }
    });
  };

  render() {
    // console.log("props UserTodos", this.props);

    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};

    const columns = [
      {
        title: "Название задачи",
        dataIndex: "title",
        key: "title",
        render: text => `${text.length > 60 ? `${R.take(60)(text)}...` : text}`,
        sorter: (a, b) => a.title.length - b.title.length
        // width: "30%"
        // ...this.getColumnSearchProps("title")
      },
      {
        title: "Дата выполнения задачи",
        dataIndex: "datePicker",
        key: "datePicker",
        sorter: (a, b) => a.datePicker - b.datePicker
        // sortOrder: sortedInfo.columnKey === "datePicker" && sortedInfo.order
      },
      {
        title: "Статус",
        dataIndex: "completed",
        key: "completed",
        sorter: (a, b) => a.datePicker - b.datePicker,
        //   filters: [
        //     { text: "Выполнена", value: "выполнена" },
        //     { text: "Не выполнена", value: "не выполнена" }
        //   ],
        //   filteredValue: filteredInfo.completed || null,
        //   // onFilter: (value, record) => record.completed.includes(value),
        //   sorter: (a, b) => a.completed.length - b.completed.length,
        //   sortOrder: sortedInfo.columnKey === "completed" && sortedInfo.order,
        render: (text, record) =>
          record.completed ? "выполнена" : "не выполнена"
      }
    ];
    return (
      <div>
        <div className="table-operations">
          <Button onClick={this.setDatePickerSort}>Sort Date</Button>
          {/* <Button onClick={this.clearFilters}>Clear filters</Button>
          <Button onClick={this.clearAll}>Clear filters and sorters</Button> */}
        </div>
        <Table
          title={() => "headerTable"}
          columns={columns}
          dataSource={this.props.todos}
          onChange={this.handleChange}
          bordered
          rowKey={todo => todo.id}
        />
      </div>
    );
  }
}

export default UserTodos;
