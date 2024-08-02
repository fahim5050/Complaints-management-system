import React, { useState, useEffect } from 'react'

const PendingCard = () => {
    const [pending, setPending] = useState(0);
    useEffect(() => {
        fetch('http://localhost:3031/complaints')
          .then(response => response.json())
          .then(data => {
            const pendingComplaints = data.filter(complaint => complaint.status === 'pending').length;
            
    
            setPending(pendingComplaints);
           
          })
          .catch(error => console.error('Error fetching data:', error));
      }, []);
  return (
    <div style={{fontSize:"20px",fontWeight:"bold"}}>
        {pending}
    </div>
  )
}

export default PendingCard