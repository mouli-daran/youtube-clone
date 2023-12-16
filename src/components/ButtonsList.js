import React from "react";
import Buttons from "./Buttons";

const ButtonsList = () => {

  const names = [
    "All",
    "Tamil Cinema",
    "Music",
    "Cooking Shows",
    "Street Food",
    "Game Shows",
    "Live",
    "Cricket",
    "WWE",
    "A.R.Rahman",
    "MS Dhoni",
    "Sachin"
  ];
  return (
    <div className="flex flex-row gap-4 mx-8">
      {names.map((name , index) => (
        <Buttons key={index} name={name} />
      ))}
     
    </div>
  );
};

export default ButtonsList;
