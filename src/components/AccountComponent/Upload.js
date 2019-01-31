import React, { Component } from "react";
import { connect } from "react-redux";
import { addFotoUserAction } from "../../store/actions/authActions";
import { Button, Spin, Icon } from "antd";
import "./UploadComponent.css";

class UploadComponent extends Component {
  state = {
    file: null,
    fileURL: null,
    loading: false
  };

  onSubmit = file => {
    if (file) {
      this.props.addFotoUserAction(this.state.file);
      this.setState({ fileURL: null });
    }
  };
  onReset = () => {
    this.setState({ fileURL: null });
  };

  getBase64 = file => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadstart = () => {
      this.setState({ loading: true });
    };
    reader.onload = () => {
      this.setState({
        fileURL: reader.result
      });
      reader.onloadend = () => {
        this.setState({ loading: false });
      };
    };
  };
  handleUploadSuccess = fileToObject => {
    let file = fileToObject.target.files[0];
    console.log("hi file", file);
    this.getBase64(file);
    this.setState({
      file: file
    });
  };

  getStyle = () => {
    return {
      overflow: "hidden",
      marginTop: "20px",
      marginBottom: "20px",
      width: "200px",
      height: "200px",
      borderBottom: "1px #ccc dotted",
      display: this.state.fileURL ? "block" : "none"
    };
  };

  render() {
    return (
      <div>
        <h4>Изменить аватар пользователя:</h4>
        <form>
          <div className="file-upload">
            <label htmlFor="avatar">
              <input
                type="file"
                id="avatar"
                name="avatar"
                accept=".png, .jpeg, .jpg"
                onChange={this.handleUploadSuccess}
              />
              <span>
                <Icon type="upload" style={{ marginRight: 6 }} />
                Выберите фото
              </span>
            </label>
          </div>
          <div className="image">
            {this.state.loading ? (
              <Spin />
            ) : (
              this.state.fileURL && (
                <img
                  src={this.state.fileURL}
                  alt={this.state.file.name}
                  style={this.getStyle()}
                />
              )
            )}
            {this.state.fileURL ? (
              <div>
                <Button onClick={this.onReset}>Отмена</Button>
                <Button onClick={this.onSubmit}>Обновить аватар</Button>
              </div>
            ) : null}
          </div>
        </form>
      </div>
    );
  }
}
export default connect(
  null,
  { addFotoUserAction }
)(UploadComponent);
