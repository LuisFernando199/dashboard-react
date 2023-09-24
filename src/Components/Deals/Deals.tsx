import "./deals.scss";
import { topDealUsers } from "../../data";
import React from 'react';

export const Deals = () => {
  return (
    <div className="Deals">
      <h1>Ventas</h1>
      <div className="list">
        {topDealUsers.map((deal) => (
          <div className="listItem" key={deal.id}>
            <div className="deal">
              <img src={deal.img} alt="" />
              <div className="dealText">
                <span>{deal.username}</span>
                <span>{deal.email}</span>
              </div>
            </div>
            <span className="amount">{deal.amount}€</span>
          </div>
        ))}
      </div>
    </div>
  );
};
