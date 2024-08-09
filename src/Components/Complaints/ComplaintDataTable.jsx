import { useState } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { DataGrid } from "@mui/x-data-grid";
import ComplaintsModal from "./ComplaintsModal";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


const ComplaintDataTable = ({ complaints,workers, onView, onDelete, onUpdate }) => {
  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const [isComplaintModalOpen, setIsComplaintModalOpen] = useState(false);

  const handleView = (complaints) => {
    setSelectedComplaint(complaints);
    setIsComplaintModalOpen(true);
   
  };

  const handleCloseModal = () => {
    setSelectedComplaint(null);
    setIsComplaintModalOpen(false);
    
  };

  const handleAssignWorker = (complaint, workerId) => {
    const updatedComplaint = {
      ...complaint,
      workerId: workerId,
      status: "Progressing", // Change status to "Progressing" when assigned
    };
    // onUpdate(updatedComplaint);
    // onAssign(updatedComplaint); // Trigger any additional assign handling logic
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "title", headerName: "Title", width: 150, editable: true },
    {
      field: "description",
      headerName: "Description",
      width: 250,
      editable: true,
    },
    { field: "status", headerName: "Status", width: 110, editable: true },
    { field: "userName", headerName: "User Name", width: 110, editable: true },
    {
      field: "workerName",
      headerName: "Assigned Worker",
      width: 150,
      valueGetter: (params) => {
        // const workerId = params.row.workerId; // Get workerId from the row
        // if (!workerId) return "Unassigned"; // Return "Unassigned" if workerId is null
        // const worker = workers.find((w) => w.id === workerId);
        // return worker ? worker.name : "Unknown Worker"; // Return worker name or "Unknown Worker"
      },
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 300,
      renderCell: (params) => (
        <div>
          <Button
            variant="contained"
            color="primary"
            style={{ marginRight: 8 }}
            onClick={() => handleView(params.row)} 
          >
            <VisibilityIcon />
          </Button>
          <Button
            variant="contained"
            color="secondary"
            style={{ marginRight: 8 }}
            onClick={() => onUpdate(params.row)}
          >
            <EditNoteIcon />
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => onDelete(params.row)}
          >
            <DeleteIcon />
          </Button>
        </div>
      ),
    },
  ];
 
  
  
  return (
    <div style={{ height: 521, width: "100%" }}>
      <DataGrid
      
        rows={complaints}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10, 20]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        sx={{
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: '#388087', // Change this to your desired color
            color: '#333', // Change this to your desired text color
          },
        }}
      />
      {selectedComplaint && (
        <ComplaintsModal
          open={isComplaintModalOpen}
          onClose={handleCloseModal}
          complaint={selectedComplaint}
        />
      )}
    </div>
  );
};

export default ComplaintDataTable;
