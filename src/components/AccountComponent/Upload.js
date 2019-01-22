import React, { Component } from "react";
import { connect } from "react-redux";
import { addFotoUserAction } from "../../store/actions/authActions";
import { Button, Upload, Spin, Icon, message } from "antd";

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

  render() {
    // ant start
    const props = {
      name: "file",
      // action: "//jsonplaceholder.typicode.com/posts/",

      // headers: {
      //   authorization: "authorization-text"
      // },

      onChange(info) {
        if (info.file.status !== "uploading") {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === "done") {
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === "error") {
          message.error(`${info.file.name} file upload failed.`);
        }
      }
    };
    // ant end
    return (
      <div>
        <label htmlFor="avatar">Выберите фотографию:</label>

        <input
          type="file"
          id="avatar"
          name="avatar"
          accept=".png, .jpeg, jpg"
          onChange={this.handleUploadSuccess}
        />
        <div className="imag">
          {this.state.loading ? (
            <Spin />
          ) : (
            this.state.fileURL && (
              <img src={this.state.fileURL} alt={this.state.file.name} />
            )
          )}
        </div>
        <Button onClick={this.onSubmit}>Обновить аватар</Button>

        {/* ant component */}

        <Upload {...props}>
          <Button>
            <Icon type="upload" /> Click to Upload
          </Button>
        </Upload>
      </div>
    );
  }
}
export default connect(
  null,
  { addFotoUserAction }
)(UploadComponent);
