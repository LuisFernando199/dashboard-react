import React, { useState } from 'react'
import './add.scss'
import { GridColDef } from '@mui/x-data-grid'

type Props = {
    slug:string,
    columns:GridColDef[],
    setOpen:React.Dispatch<React.SetStateAction<boolean>>,
    addUser: (user: any) => void; // Función para agregar un usuario
}

export const Add = (props: Props) => {

    const [formData, setFormData] = useState<any>({});

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const newUser = {
            id: Date.now(), // Generar un ID único (puedes utilizar otra estrategia)
            ...formData,
          };
          props.addUser(newUser);
          props.setOpen(false);
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData: any) => ({
          ...prevData,
          [name]: value,
        }));
      };
    

  return (
    <div className='Add'>
        <div className="modal">
            <span className="close" onClick={()=>props.setOpen(false)}>❌</span>
            <h1>Agregar nuevo {props.slug}</h1>
            <form onSubmit={handleSubmit}>
                {props.columns
                .filter(item=>item.field !== "id" && item.field !== "img")
                .map((column)=>(
                    <div key={column.field} className="item">
                        <label htmlFor="">{column.headerName}</label>
                        <input type={column.type} placeholder={column.field}
                         name={column.field}
                         value={formData[column.field] || ""}
                         onChange={handleInputChange}
                        />
                    </div>
                ))}
                <button>Enviar</button>
            </form>
        </div>
    </div>
  )
}
