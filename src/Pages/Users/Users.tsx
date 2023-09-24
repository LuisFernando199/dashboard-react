import React, { useState } from 'react';
import './users.scss'
import { DataTable } from '../../Components/DataTable/DataTable';
import { DataGrid, GridColDef, GridValueGetterParams,GridToolbar } from '@mui/x-data-grid';
import { userRows } from '../../data';
import { Add } from '../../Components/Add/Add';




const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
      field: 'img',
      headerName: 'Avatar',
      width: 70,
      renderCell:(params)=>{
          return(<img src={params.row.img || "/noavatar.png"} alt='avatar' />)
      } ,
  },
 
  {
    field: 'firstName',
    headerName: 'First name',
    width: 100,
    editable: true,
    
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 110,
    editable: true,
  },
  {
    field: 'phone',
    headerName: 'Teléfono',
    width: 110,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 180,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'verified',
  headerName: 'Verificado',
  width: 100,
  type: "boolean",
},
{
  field: 'createdAt',
    headerName: 'Creado',
    width: 100,
    editable: true,
    type:"string"
}
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, status: true },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, status: false  },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export const Users = () => {
  const [open,setOpen] = useState(false)

  const [users, setUsers] = useState(userRows);

  

  const addUser = (user: any) => {
    console.log("Agregando usuario:", user);
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  const deleteUser = (id: number) => {
    // Actualiza la lista de usuarios aquí, por ejemplo:
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };
  return (
    
    <div className='Users'>
      <div className="infoContainer">
      <h1>Usuarios</h1>
      <button onClick={()=>setOpen(true)}>Agregar Usuario</button>
      </div>
      <DataTable  slug="users" columns={columns} rows={users} onDelete={deleteUser}/>
      {open && <Add slug="user"  columns={columns}  setOpen={setOpen} addUser={addUser} />}
    </div>
  )
}
