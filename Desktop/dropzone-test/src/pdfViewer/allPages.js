import React, { useState } from "react";
import { Document, Page } from "react-pdf";

const AllPages = props => {
  const [numPages, setNumPages] = useState(null);

  const options = {
    cMapUrl: "cmaps/",
    cMapPacked: true,
    workerSrc: "/pdf.worker.js"
  };

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const { pdf } = props;

  return (
    <Document
      file={pdf}
      options={options}
      onLoadSuccess={onDocumentLoadSuccess}
    >
      {Array.from(new Array(numPages), (el, index) => (
        <Page key={`page_${index + 1}`} pageNumber={index + 1} />
      ))}
    </Document>
  );
};

export default AllPages;
