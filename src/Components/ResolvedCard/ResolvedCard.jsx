
import React, { useState, useEffect } from 'react'

const ResolvedCard = () => {
    const [resolved, setResolved] = useState(0);
    useEffect(() => {
        fetch('http://localhost:3031/complaints')
          .then(response => response.json())
          .then(data => {
            const resolveComplaints = data.filter(complaint => complaint.status === 'resolved').length;
            
    
            setResolved(resolveComplaints);
           
          })
          .catch(error => console.error('Error fetching data:', error));
      }, []);
  return (
    <div style={{fontSize:"20px",fontWeight:"bold"}}>
        {resolved}
    </div>
  )
}
export default ResolvedCard