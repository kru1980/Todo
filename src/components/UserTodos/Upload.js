import React, { Component } from "react";
import { connect } from "react-redux";
import { addFotoUserAction } from "../../store/actions/authActions";
import { Button } from "antd";
import { Spin } from "antd";

class Upload extends Component {
  state = {
    file: null,
    fileURL: null,
    loading: false
  };

  onSubmit = file => {
    file ? this.props.addFotoUserAction(this.state.file) : null;

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

  render() {
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
      </div>
    );
  }
}
export default connect(
  null,
  { addFotoUserAction }
)(Upload);
