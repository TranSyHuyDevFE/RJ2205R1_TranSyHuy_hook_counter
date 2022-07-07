import { useEffect, useState } from "react";
const useIncrement = (addAmout) => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount((count) => count + addAmout);
  };
  useEffect(() => {}, [addAmout]);
  return {
    increase,
    count,
  };
};
export default useIncrement;
