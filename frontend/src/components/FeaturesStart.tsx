import React from "react";
import "./FeaturesStart.css";

const FeaturesStart: React.FC = () => {
  return (
    <div className="features-container">
      <div>
        <img src="time.png" alt="time" className="feature-icon" />
        <p>Immer die aktuellsten Ausschreibungen.</p>
      </div>
      <div>
        <img src="austria.png" alt="austria" className="feature-icon" />
        <p>Jobausschreibungen aus ganz Österreich. </p>
      </div>
      <div>
        <img src="check.png" alt="check" className="feature-icon" />
        <p>Jobs bequem auf der persönlichen Checkliste vormerken.</p>
      </div>
      <div>
        <img src="budget.png" alt="budget" className="feature-icon" />
        <p>Günstige Konditionen für Unternehmen.</p>
      </div>
    </div>
  );
};

export default FeaturesStart;
