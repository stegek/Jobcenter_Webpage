import React from "react";

interface warenkorbProps {
  choice: string;
}

const Warenkorb: React.FC<warenkorbProps> = (props) => {
  return (
    <div>
      <h1>Warenkorb</h1>
      <p>{props.choice}</p>
    </div>
  );
};

export default Warenkorb;
