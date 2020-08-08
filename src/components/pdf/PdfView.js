import React from "react";
import Viewer, { Worker } from "@phuocng/react-pdf-viewer";

import "@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css";

export default function PdfView({ url }) {
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.4.456/build/pdf.worker.min.js">
      <div style={{ height: "750px" }}>
        <Viewer fileUrl={url} />
      </div>
    </Worker>
  );
}
