import React, { useState } from 'react'
import './dataTable.scss'
import { DataGrid, GridColDef, GridValueGetterParams,GridToolbar } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import {UserData} from '../../Interface/interfaceUseData'

 type Props={
    columns : GridColDef[];
  rows : UserData[];
  slug: string;
  onDelete:(id: number) => void;
}


export const DataTable = ({columns, rows, slug, onDelete}: Props) => {
    const [tableData, setTableData] = useState(rows);

    const handleDelete=(id:number)=>{
      const updatedData = tableData.filter((item) => item.id !== id);
      setTableData(updatedData);
      onDelete(id); // Llama a la función onDelete pasada como prop
    }

   const actionColumns:GridColDef = {
    field:"action",
    headerName:"Action",
    width:200,
    renderCell:(params) => {
        return(
            <div className="action">
                <Link to={`/${slug}/${params.row.id}`}>
                <img src="/view.svg" alt="" />
                </Link>
                <div className="delete" onClick={()=>handleDelete(params.row.id)}>
                    <img src='/delete.svg' alt='' />
                </div>
            </div>
        )
    }
   };

  

  return (
    <div className='DataTable'>
         <DataGrid
         className='dataGrid'
        rows={rows}
        columns={[...columns, actionColumns]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{toolbar:GridToolbar}}
        slotProps={{
            toolbar:{
                showQuickFilter:true,
                quickFilterProps:{debounceMs: 500}
            }
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  )
}
