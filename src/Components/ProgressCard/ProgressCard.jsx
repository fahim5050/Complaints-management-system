import React, { useState, useEffect } from "react";

const ProgressCard = () => {
  const [inProgressCount, setInProgressCount] = useState(0);
  useEffect(() => {
    fetch("http://localhost:3031/complaints")
      .then((response) => response.json())
      .then((data) => {
        const inProgressComplaints = data.filter(
          (complaint) => complaint.status === "in progress"
        ).length;

        setInProgressCount(inProgressComplaints);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return <div style={{fontSize:"20px",fontWeight:"bold"}}>{inProgressCount}</div>;
};

export default ProgressCard;
