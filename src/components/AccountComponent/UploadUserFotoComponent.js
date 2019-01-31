// import React from "react";
// import { connect } from "react-redux";
// import { addFotoUserAction } from "../../store/actions/authActions";

// import { Upload, message, Button, Icon } from "antd";

// const UploadUserFotoComponent = () => {
//   const props = {
//     name: "file",
//     action: "//jsonplaceholder.typicode.com/posts/",
//     headers: {
//       authorization: "authorization-text"
//     },
//     onChange(info) {
//       if (info.file.status !== "uploading") {
//         console.log(info.file, info.fileList);
//       }
//       if (info.file.status === "done") {
//         message.success(`${info.file.name} file uploaded successfully`);
//       } else if (info.file.status === "error") {
//         message.error(`${info.file.name} file upload failed.`);
//       }
//     }
//   };

//   return (
//     <div>
//       <Upload {...props}>
//         <Button>
//           <Icon type="upload" /> Click to Upload
//         </Button>
//       </Upload>
//       ,
//     </div>
//   );
// };

// export default connect(
//   null,
//   { addFotoUserAction }
// )(UploadUserFotoComponent);
