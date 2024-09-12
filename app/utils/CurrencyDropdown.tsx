import React, { FC } from "react";
import { style } from "./style";

type Props={
    currencies: string[],
    title: string,
    currency: string,
    setCurrency: (currency:string)=>void,
}

const CurrencyDropdown:FC<Props> = ({
  currencies,
  currency,
  setCurrency,
  title = "",
}) => {

  return (
    <div>
      <label
        htmlFor={title}
        className={`${style.label} !text-[#fff]`}
      >
        {title}
      </label>

      <div className="mt-1 p-2 relative">
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          // className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          className={`${style.input} !bg-[#fff] `}
        >
          {/* <hr /> */}
          {currencies?.map((currency) => {
              return (
                <option value={currency} key={currency}>
                  {currency}
                </option>
              );
            })}
        </select>
      </div>
    </div>
  );
};

export default CurrencyDropdown;