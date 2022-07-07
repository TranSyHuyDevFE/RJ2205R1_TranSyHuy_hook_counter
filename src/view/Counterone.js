import React from "react";

import useIncrement from "../customize/Customcounter";

export default function Counterone() {
  const { count, increase } = useIncrement(1);
  return (
    <div>
      Counter {count} <br />
      <button onClick={increase}>Add 1</button>
    </div>
  );
}
