import React from "react";

const Helper = React.memo(({ number }) => {
  function calSum() {
    let sum = 0;
    for (let i = 0; i < number; i++) {
      sum += i;
    }
    console.log("Log from expensive code");

    return sum;
  }
  const ans = calSum();
  return <h3 className="mt-4">{ans}</h3>;
});

export default Helper;
