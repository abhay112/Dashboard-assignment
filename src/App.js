import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TransactionPage from "./pages/Transaction";
import Layout from "./components/Layout";
import './assets/styles/App.scss'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Dashboard />,
//   },
//   {
//     path: "/transactions",
//     element: <TransactionPage />,
//   },
// ]);

function App() {
  return (
    <>
       <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/transactions" element={<TransactionPage />} />
        </Routes>
      </Layout>
    </Router>
    </>
  );
}

export default App;
