import React from 'react';
import '../assets/styles/App.scss'
import TextPriceBtn from '../components/TextPriceBtn';
import GreenBtn from '../components/GreenBtn';
import btn from '../assets/images/Dollar.png'

const Dashboard = () => {
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
              <li>
                <div className='btn-img'>
                  <img src={btn} />
                </div>
                <div className='recent-transactions'>
                  <div className='rt-left'>
                    <p>INR Deposit</p>
                    <p>2022-06-09 7:06 PM</p>
                  </div>
                  <div className='rt-right'>
                    <p>+ ₹81,123.10</p>
                  </div>
                </div>
              </li>
              <li>
                <div className='btn-img'>
                  <img src={btn} />

                </div>
                <div className='recent-transactions'>
                  <div className='rt-left'>
                    <p>BTC Sell</p>
                    <p>2022-06-09 7:06 PM</p>
                  </div>
                  <div className='rt-right'>
                    <p>- ₹81,123.10 BTC</p>
                  </div>
                </div>
              </li>
              <li>
                <div className='btn-img'>
                  <img src={btn} />

                </div>
                <div className='recent-transactions'>
                  <div className='rt-left'>
                    <p>INR Deposit</p>
                    <p>2022-06-09 7:06 PM</p>
                  </div>
                  <div className='rt-right'>
                    <p>+ ₹81,123.10</p>
                  </div>
                </div>
              </li>
            </ul>
            <GreenBtn text={'View All'} />
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