import React from "react";
import PriceFormatter from "./PriceFormatter";
interface Props {
  price: number | undefined;
  discount?: number | undefined;
  className?: string;
}
const PriceView = ({ price, discount, className }: Props) => {
  return (
  
      <div className="flex items-center gap-2">
        <PriceFormatter amount={price} className="text-shop_dark_green" />
        {price && discount && discount > 0 && (
          <PriceFormatter
            amount={price + (discount * price) / 100}
            className="text-sx line-through text-lightColor"
          />
        )}
      </div>
   
  );
};

export default PriceView;
