import { useState } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { DataGrid } from "@mui/x-data-grid";
import ComplaintsModal from "./ComplaintsModal";


const ComplaintDataTable = ({ complaints, onView, onDelete, onUpdate }) => {
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
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={complaints}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10, 20]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
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
