import { useState } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { DataGrid } from "@mui/x-data-grid";
import ComplaintsModal from "./ComplaintsModal";
import UpdateComplaintModal from "./UpdateComplaintForm";



const ComplaintDataTable = ({ complaints,workers,onDelete, onUpdate }) => {
  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const [isComplaintModalOpen, setIsComplaintModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  const handleView = (complaints) => {
    setSelectedComplaint(complaints);
    setIsComplaintModalOpen(true);
   
  };
  const handleUpdate = (complaint) => {
    setSelectedComplaint(complaint);
    setIsUpdateModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedComplaint(null);
    setIsComplaintModalOpen(false);
    setIsUpdateModalOpen(false);
    
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
    {
      field: 'serialNo',
      headerName: 'S.No',
      width: 90,
      renderCell: (params) => params.api.getSortedRowIds().indexOf(params.id) + 1,
    },
   
    // { field: "id", headerName: "ID", width: 90 },
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
      field: "workerId",
      headerName: "Assigned Worker",
      width: 200,
      valueGetter: (params) => {
        // console.log("Params received:", params); // Log params for debugging
    
        // Defensive check for params and row
        if (!params || !params.row) {
          console.warn("Invalid params or row is missing");
          return "Worker"; // Default return if params or row is null
        }
    
        const workerId = params.row.workerId; // Get workerId from the row
        console.log("Worker ID from params:", workerId); // Log the worker ID
    
        // Handle case where workerId is null or undefined
        if (!workerId) return "Unassigned"; 
    
        // Find the worker using the workerId
        const worker = workers.find((w) => w.id === workerId); // Match by id
        console.log("Found Worker:", worker); // Log the found worker
    
        // Return the worker's name or default to "Unknown Worker"
        return worker ? worker.name : "Unknown Worker"; 
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
            onClick={() => handleUpdate(params.row)}
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
 
  
  // console.log("Complaints Data:", complaints);
  // console.log("Workers Data:", workers);
  
  return (
    <div style={{ height: 521, width: "100%" }}>
      <DataGrid
      
        rows={complaints}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10, 20]}
        // checkboxSelection
        // disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
       
      />
      {selectedComplaint && (
        <ComplaintsModal
          open={isComplaintModalOpen}
          onClose={handleCloseModal}
          complaint={selectedComplaint}
        />
      )}
        {selectedComplaint && (
        <UpdateComplaintModal
          open={isUpdateModalOpen}
          onClose={handleCloseModal}
          complaint={selectedComplaint}
          onUpdate={onUpdate}

        />
      )}
    </div>
  );
};

export default ComplaintDataTable;
