// import React, { useState, useEffect } from "react";
// import { useDropzone } from "react-dropzone";
// import styled from "styled-components";

// const getColor = props => {
//   if (props.isDragAccept) {
//     return "#00e676";
//   }
//   if (props.isDragReject) {
//     return "#ff1744";
//   }
//   if (props.isDragActive) {
//     return "#2196f3";
//   }
//   return "#eeeeee";
// };

// const Container = styled.div`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 20px;
//   border-width: 2px;
//   border-radius: 2px;
//   border-color: ${props => getColor(props)};
//   border-style: dashed;
//   background-color: #fafafa;
//   color: #bdbdbd;
//   outline: none;
//   transition: border 0.24s ease-in-out;
// `;

// const Thumb = styled.div`
//   display: inline-flex;
//   border-radius: 2;
//   border: 1px solid #eaeaea;
//   margin-bottom: 8px;
//   margin-right: 8px;
//   width: auto;
//   height: 300px;
//   padding: 4px;
//   box-sizing: border-box;
// `;

// const ThumbInner = styled.div`
//   display: flex;
//   min-width: 0;
//   overflow: hidden;
// `;
// const Img = styled.img`
//   display: block;
//   width: auto;
//   height: 100%;
// `;

// const UploadFile = props => {
//   const [files, setFiles] = useState([]);
//   const {
//     acceptedFiles,
//     open,
//     getRootProps,
//     getInputProps,
//     isDragActive,
//     isDragAccept,
//     isDragReject
//   } = useDropzone();
//   //   {
//   //   //accept: "image/*",
//   //   onDrop: acceptedFiles => {
//   //     setFiles(
//   //       acceptedFiles.map(file =>
//   //         Object.assign(file, { preview: URL.createObjectURL(file) })
//   //       )
//   //     );
//   //   }
//   // }
//   console.log(acceptedFiles);

//   const thumbs = files.map(file => (
//     <Thumb key={file.name}>
//       <ThumbInner>
//         <Img src={file.preview} />
//       </ThumbInner>
//     </Thumb>
//   ));

//   useEffect(() => {
//     files.forEach(file => URL.revokeObjectURL(file.preview));
//   }, [files]);

//   return (
//     <div className='container'>
//       <Container
//         {...getRootProps({ isDragActive, isDragAccept, isDragReject })}
//       >
//         <input {...getInputProps()} accept='.pdf' />
//         <p>Drag 'n' drop some files here, or click to select files</p>
//         <button type='button' onClick={open}>
//           Open File Dialog
//         </button>
//       </Container>
//       <aside>{thumbs}</aside>
//     </div>
//   );
// };

// export default UploadFile;
