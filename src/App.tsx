import React, { useState } from 'react';
import Header from './component/Header';
import BackgroundMain from './component/BackgroundMain';
import Dashboard from './component/Dashboard';
import { fakeData } from './fakeData/data'
import { Context } from './component/Context'
import { Bds } from './type'
function App() {


  const [data, setData] = useState<Bds[]>(fakeData);
  const [dataItems, setDataItems] = useState<any[]>();
  const [offset, setOffset] = useState(1);
  const [perPage] = useState(4);
  const [pageCount, setPageCount] = useState(0)
  // const [currentPage, setCurrentPage] = useState(1);



  return (
    <Context.Provider value={{ data, offset, perPage, pageCount, setData, setDataItems, setOffset, setPageCount, dataItems }}>
      <>
        <Header />
        <BackgroundMain />
        <Dashboard />
      </>
    </Context.Provider>
  );
}

export default App;
