import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import axios from "axios";
import PendingCard from "../PendingCard/PendingCard";
import ResolvedCard from "../ResolvedCard/ResolvedCard";
import ProgressCard from "../ProgressCard/ProgressCard";
import ComplaintsGraph from "../Graph/Graph";
const Dashboard = () => {
  // const [complaint, setComplaint] = useState("");
  // useEffect(() => {
  //   const fetchComplaint = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:3031/complaints");
  //       setComplaint(response.data);
  //     } catch (error) {
  //       console.log("error fetching complaint", error);
  //     }
  //     // console.log(complaint);
  //   };
  //   fetchComplaint();
  // }, []);
  return (
    <div className="d_wrapper">
      <div className="d_container">
        <div className="cards">
          <div className="pending_card">
            <PendingCard />
            <h4>Total Pending Complaints</h4>
          </div>
          {/* end of the pending card */}
          <div className="resolved_card">
            <ResolvedCard />
            <h4>Total Resolved Complaints</h4>
          </div>
          {/* end of the resolved card */}
          <div className="inprogress_card">
            <ProgressCard />
            <h4>Total Progress Complaints</h4>
          </div>
          {/* end of the progress card */}
        </div>
        {/* end of the card */}
        <div className="graph">
          <ComplaintsGraph />
        </div>
        {/* end of the Graph */}
      </div>
      {/* end of the dashboard container */}
    </div>
  );
};

export default Dashboard;
