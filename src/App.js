import React from "react";
import "./styles.css";
import MainLayout from "./layout/MainLayout";
import { Route, Switch, Redirect } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import PDFList from "./pages/PDFList";
import Categories from "./pages/Categories";
import PdfPage from "./pages/PdfPage";

export default function App() {
  return (
    <div className="App">
      <MainLayout>
        <Switch>
          <Route path="/search" component={SearchPage} />
          <Route path="/your-pdf" component={PdfPage} />
          <Route path="/pdfs" component={PDFList} />
          <Route path="/categories" component={Categories} />
          <Redirect from="/" to="/search" />
        </Switch>
      </MainLayout>
    </div>
  );
}
