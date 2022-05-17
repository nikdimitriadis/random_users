import { useState, useEffect } from "react";

const useRandomNumber = () => {
  const [randomNumbers, setRandomNumbers] = useState([]);
  useEffect(() => {
    const randomTimer = setInterval(() => {
      let madeRandomNumbers = [];
      while (madeRandomNumbers.length < 9) {
        let r = Math.floor(Math.random() * 9);
        if (madeRandomNumbers.indexOf(r) === -1) madeRandomNumbers.push(r);
      }

      setRandomNumbers(madeRandomNumbers);
    }, 500);

    return function cleanup() {
      clearInterval(randomTimer);
    };
  }, []);

  return randomNumbers;
};

export default useRandomNumber;
