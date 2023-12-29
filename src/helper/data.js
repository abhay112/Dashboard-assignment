export const fetchData = val =>{
    const All = [
        {
          id: "HD82NA2H",
          date: "2023-06-20",
          time: "07:00 AM",
          type: {
            name: "INR Deposit",
            tag: "E-Transfer",
          },
          amount: "+₹81,123",
          status: "Pending",
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
          status: "Processing",
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
          status: "Cancelled",
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
          status: "Completed",
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
          status: "Pending",
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
          status: "Completed",
        },
      ];
      const Deposit = [
        {
          id: "HD82NA2H",
          date: "2023-06-20",
          time: "07:00 AM",
          type: {
            name: "INR Deposit",
            tag: "E-Transfer",
          },
          amount: "+₹81,123",
          status: "Pending",
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
          status: "Completed",
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
          status: "Pending",
        },
      ];
      const Widthdraw = [

        {
          id: "HD82NA2H",
          date: "2023-06-20",
          time: "07:00 AM",
          type: {
            name: "INR Deposit",
            tag: "E-Transfer",
          },
          amount: "+₹8199,123",
          status: "Pending",
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
          status: "Processing",
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
          status: "Cancelled",
        },
      ];  
      const Trade = [
        
        {
          id: "HD82NA2H",
          date: "2023-06-20",
          time: "07:00 AM",
          type: {
            name: "INR Trade",
            tag: "E-Transfer",
          },
          amount: "+₹8199,123",
          status: "Pending",
        },
        {
          id: "HD82NA21H",
          date: "2023-08-20",
          time: "07:00 AM",
          type: {
            name: "INR Trade",
            tag: "E-Transfer",
          },
          amount: "+₹8199,123",
          status: "Cancelled",
        },
      ];    
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
        Pending: "#797E82",
        Processing: "#F5A50B",
        Completed: "#059669",
        Cancelled: "#DC2626",
      };
      return {All,Deposit,Widthdraw,Trade,tabs,statusColor};
}