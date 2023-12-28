import React, { useState } from 'react'
import '../assets/styles/App.scss'
import GreenBtn from '../components/GreenBtn'
import {fetchData} from '../helper/data'
const Transaction = () => {

  const {All} = fetchData();
  const tabs = [
    {
      name: "All",
      count: 349,
    },
    {
      name: "Deposit",
      count: 114,
    },
    {
      name: "Widthdraw",
      count: 55,
    },
    {
      name: "Trade",
      count: 50,
    },
  ];
  const statusColor = {
    pending: "#797E82",
    processing: "#F5A50B",
    completed: "#059669",
    cancelled: "#DC2626",
  };
  const [active,setActive] = useState("All");
  const [data,setData] = useState(All);
  const [sort,setSort] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const handleActiveTab = (val)=>{
    setActive(val);
    setData(fetchData()[val]);
    setSort(true);
  }
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const filteredData = data.filter((transaction) => {
    const searchTermLowerCase = searchTerm.toLowerCase();
    return (
      transaction.id.toLowerCase().includes(searchTermLowerCase) ||
      transaction.type.name.toLowerCase().includes(searchTermLowerCase) ||
      transaction.date.includes(searchTermLowerCase) ||
      transaction.time.includes(searchTermLowerCase)
    );
  });
  const sortedData = [...filteredData];
  if (sort) {
    sortedData.sort((a, b) => new Date(a.date + ' ' + a.time) - new Date(b.date + ' ' + b.time));
  } else {
    sortedData.sort((a, b) => new Date(b.date + ' ' + b.time) - new Date(a.date + ' ' + a.time));
  }

  console.log(sort);
  return (
    <div className='transaction-cmp'>
      <header className='header'>
        <h1>Transactions</h1>
      </header>
      <main>
        <section className='export-csv'>
          <GreenBtn text={'Export CSV'} type={'up-arrow'} />
        </section>
        <section className='all-transactions'>
          <div className='at-header'>
            {tabs.map((tab, index) => (
              <div key={index} className={`${active === tab.name  ? 'active-tab ' : ''} at-tabs`}>
                <p className='' onClick={() => handleActiveTab(tab.name)}>{tab.name}</p>
                <p className='grey-btn'>{tab.count}</p>
              </div>
            ))}
          </div>
          <div className='at-search-box'>
            <input placeholder='Search' 
                value={searchTerm}
                onChange={handleSearchChange}
              />
          </div>
        </section>
        <section className='transaction-details'>
          <div className='td-header'>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th onClick={()=>setSort(!sort)} className={`${sort?"asc":"desc"}`}>Date & Time</th>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
              {sortedData.map((transaction) => (
                <tr key={transaction.id}>
                  <td>{transaction.id}</td>
                  <td>
                    <div>
                      <p>{transaction.date}</p>
                      <p className=''>{transaction.time}</p>
                    </div>
                  </td>
                  <td>
                    <div>
                      <p>{transaction.type.name}</p>
                      {transaction.type.tag && <p>{transaction.type.tag}</p>}
                    </div>
                  </td>
                  <td>{transaction.amount}</td>
                  <td>
                    <span style={{ backgroundColor: statusColor[transaction.status] }} className='grey-btn'>
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
    </div >
  )
}

export default Transaction