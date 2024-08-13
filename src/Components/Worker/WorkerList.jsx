import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditNoteIcon from '@mui/icons-material/EditNote';
import WorkerModel from './WorkerModel';
const WorkerList = ({ workers, onView, onDelete, onUpdate}) => {
  const [selectedWorker, setSelectedWorker] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleView = (woker) => {
    setSelectedWorker(woker);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedWorker(null);
    setIsModalOpen(false);
  };
  const columns = [
    {
      field: 'serialNo',
      headerName: 'S.No',
      width: 90,
      renderCell: (params) => params.api.getSortedRowIds().indexOf(params.id) + 1,
    },
    // { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Name', width: 150, editable: true },
    { field: 'serviceType', headerName: 'Service Type', width: 150, editable: true },
    { field: 'contact', headerName: 'Contact', width: 150, editable: true },
    { field: 'email', headerName: 'Email', width: 150, editable: true },
    { field: 'tasksAssigned', headerName: 'Tasks Assigned', width: 110, editable: true },
    {
        field: 'actions',
        headerName: 'Actions',
        width: 300,
        renderCell: (params) => (
          <div>
            <Button
              variant="contained"
              color="primary"
              style={{ marginRight: 8 }}
              onClick={() => handleView(params.row)
                
              }
            >
             <VisibilityIcon/>
            </Button>
            <Button
              variant="contained"
              color="secondary"
              style={{ marginRight: 8 }}
              onClick={() => onUpdate(params.row)}
            >
              <EditNoteIcon/>
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => onDelete(params)}
            >
              <DeleteIcon/>
            </Button>
          </div>
        ),
      },
  ];

  return (
    <div style={{ height: 520, width: '100%' }}>
      <DataGrid
        rows={workers}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10, 20]}
        // checkboxSelection
        // disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
      {selectedWorker && (
        <WorkerModel
          open={isModalOpen}
          onClose={handleCloseModal}
          worker={selectedWorker}
        />
      )}
    </div>
  );
};

export default WorkerList;
