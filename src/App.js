import {PaperWallet, MetamaskWallet} from '@nest25/evm-wallet-lib'
const wallet = new MetamaskWallet()
function App() {
  async function metamaskConnection() {
    await wallet.connect()
  }
  async function getCurrentAccount() {
   const account = await wallet.getCurrentAccount()
   console.log(account);
  }
  async function sendEth() {
    const recipt = await wallet.sendETH("0x74f9478fbAD90e25371C32428bf21c439b91C865", "0.001")
    console.log(recipt);
  }
  async function balance() {
    const balance = await wallet.getBalance()
    console.log(balance);
  }
  
  return (
    <div className="App">
      <button onClick={metamaskConnection} >Connect</button>
      <button onClick={getCurrentAccount} >Get Current Account</button>
      <button onClick={sendEth} >Send ETH</button>
      <button onClick={balance} >Balance</button>
    </div>
  );
}

export default App;
