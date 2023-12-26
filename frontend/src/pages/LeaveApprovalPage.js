import React, { useEffect, useState } from 'react';
import axios from 'axios'; // You may need to install axios if not already installed

const LeaveApprovalPage = () => {
  const [leaveRequests, setLeaveRequests] = useState([]);

  useEffect(() => {
    // Fetch leave requests from your API when the component mounts
    axios.get('your-api-endpoint-for-leave-requests')
      .then(response => setLeaveRequests(response.data))
      .catch(error => console.error('Error fetching leave requests:', error));
  }, []);

  const handleApproval = (leaveRequestId) => {
    // Implement the logic to approve the leave request (update status in the backend, etc.)
    console.log(`Leave request with ID ${leaveRequestId} approved`);
  };

  return (
    <div>
      <h2>Leave Approval Page</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Reason</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {leaveRequests.map(request => (
            <tr key={request.id}>
              <td>{request.id}</td>
              <td>{request.name}</td>
              <td>{request.startDate}</td>
              <td>{request.endDate}</td>
              <td>{request.reason}</td>
              <td>{request.status}</td>
              <td>
                {request.status === 'Pending' && (
                  <button onClick={() => handleApproval(request.id)}>Approve</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaveApprovalPage;