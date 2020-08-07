import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import styled from "styled-components";
import "./sample.less";

const options = {
  cMapUrl: `//cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/cmaps/`,
  cMapPacked: true,
  workerSrc: "/pdf.worker.js"
};

const SinglePage = props => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const zoomIn = () => setScale(prev => prev + 0.5);
  const zoomOut = () => setScale(prev => prev - 0.5);

  const changePage = offset => setPageNumber(prev => prev + offset);
  const previousPage = () => changePage(-1);
  const nextPage = () => changePage(1);

  const onFileChange = event => {
    this.setState({
      file: event.target.files[0]
    });
  };

  const { pdf } = props;

  return (
    <div className='Example'>
      <div className='Example__container'>
        <Navigate>
          <Button style={{ fontSize: 18, width: 50 }} onClick={zoomOut}>
            -
          </Button>
          <Button
            type='button'
            disabled={pageNumber <= 1}
            onClick={previousPage}
          >
            Back
          </Button>
          <div style={{ fontSize: 13 }}>
            Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
          </div>

          <Button
            type='button'
            disabled={pageNumber >= numPages}
            onClick={nextPage}
          >
            Next
          </Button>
          <Button style={{ fontSize: 18, width: 50 }} onClick={zoomIn}>
            +
          </Button>
        </Navigate>
        <div className='Example__container__document'>
          <Document
            file={pdf}
            onLoadSuccess={onDocumentLoadSuccess}
            options={options}
            style={{ width: 1116, height: 520, overflow: "hidden" }}
          >
            {/* {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))} */}
            <Page width={1000} pageNumber={pageNumber} scale={scale} />
          </Document>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;

const Navigate = styled.div`
  margin: 40px 0;
  margin: auto;
  display: flex;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  border: none;
  background: #00bcd4;
  height: 40px;
  justify-content: space-between;
  /* border-radius: 15px; */
  width: 350px;
  align-items: center;
  font-size: 17px;
  color: #fff;
`;

const Button = styled.button`
  width: 20%;
  height: 100%;
  padding: 0;
  border: none;
  color: white;
  background: #00bcd4;
  /* border-radius: 2px; */
  display: inline-block;
  &:hover {
    background: rgb(0, 0, 0, 0.08);
  }
  &:focus {
    outline: none;
  }
`;
