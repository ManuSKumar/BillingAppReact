import React from "react";

interface LayoutProps {
  value: number;
  onIncrement: () => void;
}

const Layout: React.FC<LayoutProps> = ({ value, onIncrement }) => {
  console.log({ value });
  return (
    <div>
      <h1>Layout</h1>
      <p>Value: {value}</p>
      <button onClick={() => onIncrement()}>Increment</button>
    </div>
  );
};

export default Layout;
