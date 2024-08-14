import React, { useState } from 'react';
import './App.css';

function App() {
  const [ProcessingFee, setProcessingFee] = useState();
  const [ShippingLocal, setShippingLocal] = useState();
  const [Quantity, setQuantity] = useState();
  const [PricePerPiece, setPricePerPiece] = useState();
  const [CustomClearanceFee, setCustomClearanceFee] = useState();
  const [FreightFee, setFreightFee] = useState();
  const [ExchangeRate, setExchangeRate] = useState();
  const [TotalClearance, setTotalClearance] = useState(0);
  const [LandingCost, setLandingCost] = useState(0);
  const [Weight, setWeight] = useState();
  const [TotalCustomClearanceFee, setTotalCustomClearanceFee] = useState(0);
  const [TotalFreightFee, setTotalFreightFee] = useState(0);
  const [CostPrice, setCostPrice] = useState();
  const [ProfitPerPiece, setProfitPerPiece] = useState(0);
  const [TotalProfit, setTotalProfit] = useState(0);

  const calculateTotalCost = () => {
     const TotalFreightFee = FreightFee * Weight;
    const TotalClearanceUSD = (Quantity * PricePerPiece) + ProcessingFee + ShippingLocal + TotalFreightFee;
    const TotalCustomClearanceFee = CustomClearanceFee * Weight;
    const TotalClearanceNGN = (TotalClearanceUSD * ExchangeRate) + TotalCustomClearanceFee;
    const LandingCost = TotalClearanceNGN / Quantity;
    const ProfitPerPiece = CostPrice - LandingCost;
    const TotalProfit = ProfitPerPiece * Quantity;
    setTotalCustomClearanceFee(TotalCustomClearanceFee);
    setTotalFreightFee(TotalFreightFee);
    setTotalClearance(TotalClearanceNGN);
    setTotalProfit(TotalProfit);
    setLandingCost(LandingCost);
    setProfitPerPiece(ProfitPerPiece);
  };


  return (
    <div className="App">
      <div className="heading">
        <h1>Goods Calculator</h1>
      </div>
      
      <form>
        <div>
          <label>Quantity:</label>
          <input
            type="number"
            value={Quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </div>
         <div>
          <label>Price per piece (USD):</label>
          <input
            type="number"
            value={PricePerPiece}
            onChange={(e) => setPricePerPiece(Number(e.target.value))}
          />
        </div>
        <div>
          <label>Exchange Rate (1 USD to NGN):</label>
          <input
            type="number"
            value={ExchangeRate}
            onChange={(e) => setExchangeRate(Number(e.target.value))}
          />
        </div>
        <div>
          <label>Processing Fee. (USD):</label>
          <input
            type="number"
            value={ProcessingFee}
            onChange={(e) => setProcessingFee(Number(e.target.value))}
          />
        </div>
        <div>
          <label>Shipping Local (USD):</label>
          <input
            type="number"
            value={ShippingLocal}
            onChange={(e) => setShippingLocal(Number(e.target.value))}
          />
        </div>
        <div>
          <label>Shipping International / Freight Fee per kg (USD):</label>
          <input
            type="number"
            value={FreightFee}
            onChange={(e) => setFreightFee(Number(e.target.value))}
          />
          <label>Total Freight Fee: {TotalFreightFee.toFixed(2)} USD</label>
        </div>
        <div>
          <label>Custom Clearance Fee per kg (NGN):</label>
          <input
            type="number"
            value={CustomClearanceFee}
            onChange={(e) => setCustomClearanceFee(Number(e.target.value))}
          />
          <label>Total Custom Clearance Fee: {TotalCustomClearanceFee.toFixed(2)} NGN</label>
        </div>
        <div>
          <label>Weight (kg):</label>
          <input
            type="number"
            value={Weight}
            onChange={(e) => setWeight(Number(e.target.value))}
          />
        </div>
        <div>
          <label>Cost Price (NGN):</label>
          <input
            type="number"
            value={CostPrice}
            onChange={(e) => setCostPrice(Number(e.target.value))}
          />
        </div>
        <button type="button" onClick={calculateTotalCost}>Enter</button>
      </form>
      
        <h3>Total Clearance Cost: {TotalClearance.toFixed(2)} NGN</h3>
        <h3>Landing Cost: {LandingCost.toFixed(2)} NGN</h3>
        <h3>Profit Per Piece: {ProfitPerPiece.toFixed(2)} NGN</h3>
        <h3>Total Profit: {TotalProfit.toFixed(2)} NGN</h3>
      
    </div>
  );
}

export default App;
