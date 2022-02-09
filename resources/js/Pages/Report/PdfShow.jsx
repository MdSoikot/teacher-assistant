
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import React, { useState } from 'react';
// import folder from '../../../../public/outline'
import Layout from '../Layout/Layout';

const PdfShow = () => {
    console.log('first')
    // state = { numPages: null, pageNumber: 1 };
    const [numPages, setNumPages] = useState(null)
    const [pageNumber, setPageNumber] = useState(1)

    const onDocumentLoadSuccess = ({ numPages }) => {
        // this.setState({ numPages });
        setNumPages({ numPages })
        setPageNumber(1)
    };
    const goToPrevPage = () =>
        // this.setState((state) => ({ pageNumber: state.pageNumber - 1 }));
        setPageNumber(pageNumber - 1)
    const goToNextPage = () =>
        // this.setState((state) => ({ pageNumber: state.pageNumber + 1 }));
        setPageNumber(pageNumber + 1)
    const host = window.location.origin
    return (
        <div>
            {/* <nav>
                <button onClick={goToPrevPage}>Prev</button>
                <button onClick={goToNextPage}>Next</button>
            </nav> */}
            <header>

                <Document
                    // file={process.env.PUBLIC_URL + "/sample.pdf"}
                    file="http://127.0.0.1:8000/sample.pdf"
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber} height="600" />
                </Document>

                <p>
                    Page {pageNumber} of {numPages}
                </p>

            </header>
        </div >
    );
}

PdfShow.layout = (page) => <Layout>{page}</Layout>;
export default PdfShow