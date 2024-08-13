import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ComplaintsPieChart = () => {
  const [data, setData] = useState([]);
  

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  useEffect(() => {
    fetch('http://localhost:3031/complaints')
      .then(response => response.json())
      .then(data => {
        const statusCounts = data.reduce((acc, complaint) => {
          acc[complaint.status] = (acc[complaint.status] || 0) + 1;
          return acc;
        }, {});

        const chartData = Object.keys(statusCounts).map(status => ({
          name: status,
          value: statusCounts[status],
        }));

        setData(chartData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={150}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default ComplaintsPieChart;
