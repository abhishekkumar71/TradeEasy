import React, { useState } from "react";
import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
  openSellWindow: (uid) => {},
  closeSellWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [selectedStockPrice, setSelectedStockPrice] = useState(0);

  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);

  const handleOpenSellWindow = (uid, price) => {
    setIsSellWindowOpen(true);
    setSelectedStockUID(uid);
    setSelectedStockPrice(price);
    setIsBuyWindowOpen(false);
  };
  const handleCloseSellWindow = () => {
    setIsSellWindowOpen(false);
    setSelectedStockUID("");
    setSelectedStockPrice(0);
  };
  const handleOpenBuyWindow = (uid, price) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
    setSelectedStockPrice(price);
    setIsSellWindowOpen(false);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
    setSelectedStockPrice(0);
  };
  return (
    <>
      <GeneralContext.Provider
        value={{
          openBuyWindow: handleOpenBuyWindow,
          closeBuyWindow: handleCloseBuyWindow,
          openSellWindow: handleOpenSellWindow,
          closeSellWindow: handleCloseSellWindow,
        }}
      >
        {props.children}
        {isBuyWindowOpen && selectedStockUID && (
          <BuyActionWindow uid={selectedStockUID} price={selectedStockPrice} />
        )}
        {isSellWindowOpen && selectedStockUID && (
          <SellActionWindow uid={selectedStockUID} price={selectedStockPrice} />
        )}
      </GeneralContext.Provider>
    </>
  );
};

export default GeneralContext;
