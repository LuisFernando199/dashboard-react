import React,{useState} from 'react';
import './Products.scss'
import { DataTable } from '../../Components/DataTable/DataTable';
import { Add } from '../../Components/Add/Add';
import { DataGrid, GridColDef, GridValueGetterParams,GridToolbar } from '@mui/x-data-grid';
import { products } from '../../data';

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "title",
    type: "string",
    headerName: "Title",
    width: 250,
  },
  {
    field: "color",
    type: "string",
    headerName: "Color",
    width: 150,
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 200,
  },
  {
    field: "producer",
    headerName: "Producer",
    type: "string",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    type: "string",
  },
  {
    field: "inStock",
    headerName: "In Stock",
    width: 150,
    type: "boolean",
  },
];


export const Products = () => {
  const [open,setOpen] = useState(false)

  
  const [users, setUsers] = useState(products);

  const addUser = (user: any) => {
    console.log("Agregando usuario:", user);
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  const deleteUser = (id: number) => {
    // Actualiza la lista de usuarios aquí, por ejemplo:
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };
  return (
    
    <div className='Products'>
      <div className="infoContainer">
      <h1>Productos</h1>
      <button onClick={()=>setOpen(true)}>Agregar Producto</button>
      </div>
      <DataTable  slug="products" columns={columns} rows={users} onDelete={deleteUser}/>
      {open && <Add slug="producto"  columns={columns}  setOpen={setOpen} addUser={addUser} />}
    
    </div>
  )
}
