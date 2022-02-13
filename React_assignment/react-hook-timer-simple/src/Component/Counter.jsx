import { useEffect, useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(10);
  useEffect(() => {
    const id = setInterval(() => {
      setCount((prev) => {
        if (prev > 0) {
          return prev - 1;
        } else {
          clearInterval(id);
          return prev;
        }
      });
    }, 1000);
    return () => clearInterval(id);
  });
  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
};
