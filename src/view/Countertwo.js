import React from "react";

import useIncrement from "../customize/Customcounter";

export default function Countertwo() {
  const { count, increase } = useIncrement(2);
  return (
    <div>
      Counter {count} <br />
      <button onClick={increase}>Add 2</button>
    </div>
  );
}
