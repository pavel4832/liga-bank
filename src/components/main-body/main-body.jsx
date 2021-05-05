import React from 'react';
import MainHeader from "../main-header/main-header";
import Converter from "../converter/converter";
import HistoryList from "../history-list/history-list";

const MainBody = () => {
  return (
    <main className="page-main">
      <div className="container">
        <MainHeader />

        <Converter />

        <HistoryList />
      </div>
    </main>
  );
};

export default MainBody;
