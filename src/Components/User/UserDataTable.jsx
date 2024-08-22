import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import "./UserDataTable.css"
import UserDetailModal from './ViewUser';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditNoteIcon from '@mui/icons-material/EditNote';
import UserUpdateModal from './UserUpdateModal';

const UserDataTable = ({ users,onDelete, onUpdate}) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  const handleView = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };
  const handleUpdate = (user) => {
    setSelectedUser(user);
    setIsUpdateModalOpen(true);
    
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
    setIsModalOpen(false);
    setIsUpdateModalOpen(false)
  };
  const columns = [
    {
      field: 'serialNo',
      headerName: 'S.No',
      width: 90,
      renderCell: (params) => params.api.getSortedRowIds().indexOf(params.id) + 1,
    },
    // { field: 'id', headerName: 'ID', width: 90 },
    { field: 'Name', headerName: 'Name', width: 150, editable: true },
    { field: 'fatherName', headerName: 'Father Name', width: 150, editable: true },
    { field: 'mobileNumber', headerName: 'Contact', width: 150, editable: true },
    { field: 'email', headerName: 'Email', width: 150, editable: true },
    { field: 'role', headerName: 'Role', width: 110, editable: true },
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
              onClick={() => handleUpdate(params.row)}
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
        rows={users}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10, 20]}
        // checkboxSelection
        // disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
      {selectedUser && (
        <UserDetailModal
          open={isModalOpen}
          onClose={handleCloseModal}
          user={selectedUser}
        />
      )}
      {
        selectedUser && (
          <UserUpdateModal
          open={isUpdateModalOpen}
          onClose={handleCloseModal}
          user={selectedUser}
          onUpdate={onUpdate}
          />
        )
      }
    </div>
  );
};

export default UserDataTable;
