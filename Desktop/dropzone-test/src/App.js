import React from "react";
//import UploadFile from "./UploadFile";
import SinglePage from "./pdfViewer/singlePage";
import AllPages from "./pdfViewer/singlePage";
import src from "./Git.pdf";
import "./styles.css";

function App() {
  return (
    <div className='App'>
      {/* <UploadFile /> */}
      <SinglePage pdf={src} />
    </div>
  );
}

export default App;
