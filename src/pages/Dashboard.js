import React,{useState} from 'react';
import '../assets/styles/App.scss'
import TextPriceBtn from '../components/TextPriceBtn';
import GreenBtn from '../components/GreenBtn';
import btn from '../assets/images/Dollar.png'
import {fetchData} from '../helper/data'

const Dashboard = () => {
  const {All} = fetchData();
  const [displayedItems, setDisplayedItems] = useState(3);
  const handleViewAll = () => {
    setDisplayedItems((prevItems) => (prevItems === All.length ? 3 : All.length));
  };
  return (
    <div className='dashboard-cmp'>
      <header className='header'>
        <h1>Dashboard</h1>
      </header>
      <section>
        <div className='section-01'>
          <div className='left-content'>
            <TextPriceBtn header={'Total Portfolio Value'} price={'₹ 112,312,24'} />
            <TextPriceBtn header={'Wallet Balances'} price={'12.34000'} btn ={'BTC'} />
            <TextPriceBtn header={'In Currency'} price={'₹ 1300'} btn={'INR'}/>

          </div>
          <div className='right-content'>
            <GreenBtn text={'Deposite'} type={'up-arrow'} />
            <GreenBtn text={'Withdraw'} type={'down-arrow'} />
          </div>
        </div>
        <div className='section-02'>
          <div className='left-box'>
            <h2 className='grey-text'>Recent Transactions</h2>
            <ul>
            {All.slice(0, displayedItems).map((val, idx) => (
                <li key={idx}>
                <div className='btn-img'>
                  <img src={btn} />
                </div>
                <div className='recent-transactions'>
                  <div className='rt-left'>
                    <p>{val?.type?.name}</p>
                    <p>{val.date}{val?.time} </p>
                  </div>
                  <div className='rt-right'>
                    <p>{val?.amount}</p>
                  </div>
                </div>
                </li>
              ))}
            </ul>
            {All.length > 3 && (
              <GreenBtn text={displayedItems === All.length ? 'View Less' : 'View All'} onClick={handleViewAll} />
            )}
          </div>
          <div className='right-box'>
            <div className='top-content'>
              <div className='crypto-name'>
                <h2 className='grey-text'>Crypto Name</h2>
                <p className='black-text'>Doge</p>
              </div>
              <div className='read-btn'>
                <GreenBtn text={'Read'} />
              </div>
            </div>
            <div className='bottom-content'>
              <p className='grey-text'>
              DogeCoin takes its name and logo from the popular "Doge" internet meme featuring a Shiba Inu dog. Despite its playful origins, DogeCoin has gained a notable following in the cryptocurrency space. It operates on a decentralized peer-to-peer network and utilizes a Scrypt algorithm for mining.<br/>
              DogeCoin takes its name and logo from the popular "Doge" internet meme featuring a Shiba Inu dog. Despite its playful origins, DogeCoin has gained a notable following in the cryptocurrency space. It operates on a decentralized peer-to-peer network and utilizes a Scrypt algorithm for mining.
              </p>
            </div>

          </div>
        </div>
        <div className='section-03'>
          <GreenBtn text={'Loans'}/>
          <p className='black-text'>
          Learn more about Loans – Keep your Bitcoin, access it’s value without selling it
          </p>
        </div>
      </section>
    </div>
  )
}

export default Dashboard