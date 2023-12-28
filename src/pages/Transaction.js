import React from 'react'
import '../assets/styles/App.scss'
import GreenBtn from '../components/GreenBtn'
const Transaction = () => {
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
  const tableData = [
    {
      id: "HD82NA2H",
      date: "2023-06-20",
      time: "07:00 AM",
      type: {
        name: "INR Deposit",
        tag: "E-Transfer",
      },
      amount: "+₹81,123",
      status: "pending",
    },
    {
      id: "HD82NA4H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "INR Widthdraw",
        tag: "Wire Transfer",
      },
      amount: "-₹55,123",
      status: "processing",
    },
    {
      id: "HD82NA5H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "Buy",
        tag: "BTC",
      },
      amount: "12.0554484 BTC",
      status: "cancelled",
    },
    {
      id: "HD82NA6H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "Sell",
        tag: "BTC",
      },
      amount: "-2.0554484 BTC",
      status: "completed",
    },
    {
      id: "HD82NA7H",
      date: "2023-06-20",
      time: "07:00 AM",
      type: {
        name: "BTC ",
        tag:"Deposit",
      },
      amount: "+15.5000000",
      status: "pending",
    },
    {
      id: "HD82NA8H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "BTC ",
        tag:"Widthdraw"
      },
      amount: "-5.05555544",
      status: "completed",
    },
    {
      id: "HD82NA8H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "BTC ",
        tag:"Widthdraw"
      },
      amount: "-5.05555544",
      status: "completed",
    },
    {
      id: "HD82NA8H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "BTC ",
        tag:"Widthdraw"
      },
      amount: "-5.05555544",
      status: "completed",
    },
    {
      id: "HD82NA8H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "BTC ",
        tag:"Widthdraw"
      },
      amount: "-5.05555544",
      status: "completed",
    },
  ];
  const statusColor = {
    pending: "#797E82",
    processing: "#F5A50B",
    completed: "#059669",
    cancelled: "#DC2626",
  };

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
              <div key={tab.index} className={`${index === 0 ? 'active-tab ' : ''} at-tabs`}>
                <p className=''>{tab.name}</p>
                <p className='grey-btn'>{tab.count}</p>
              </div>
            ))}
          </div>

          <div className='at-search-box'>
            <input placeholder='Search' />
          </div>
        </section>
        <section className='transaction-details'>
          <div className='td-header'>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Date & Time</th>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              {/* <tbody>
                <tr>
                  <td>HD82NA2H</td>
                  <td>
                    <div>
                      <p>2023-06-20</p>
                      <p>07:00 AM</p>
                    </div>
                  </td>
                  <td>
                    <div>
                      <p>INR Deposit</p>
                      <p>E-Transfer</p>
                    </div>
                  </td>
                  <td>+₹81,123</td>
                  <td>
                    <span className='grey-btn'>pending</span>
                  </td>
                </tr>
              </tbody> */}
              <tbody>
              {tableData.map((transaction) => (
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