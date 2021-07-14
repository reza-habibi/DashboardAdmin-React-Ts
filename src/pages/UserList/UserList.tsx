import {
    DataGrid,
    GridColDef,
} from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { useState } from "react";
import {Link} from 'react-router-dom'
import { userRows } from "../../demoData";
import './userlist.css'





export default function UserList() {
    const [data,setData] = useState(userRows)

    const handleDelete=(id:number)=>{
        setData(data.filter(item=>item.id!==id))
    }

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'user', headerName: 'User', width: 200, renderCell: (params) => {
                return (
                    <div className="tableUser">
                        <img src={params.row.avatar} alt="" />
                        {params.row.username}
                    </div>
                )
            }
        },
        { field: 'email', headerName: 'Email', width: 200 },
        {
            field: 'status',
            headerName: 'Status',
            width: 120,
        },
        {
            field: 'transaction',
            headerName: 'Transaction Volume',
            width: 160,
    
        },
        {
            field: 'action',
            headerName: 'Action',
            sortable: false,
            width: 160,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/user/"+params.row.id}>
                            <button className="userListEdit">Edit</button>
                        </Link>
                        <DeleteOutline className="userListDelete" onClick={()=>handleDelete(params.row.id)} />
                    </>
                )
            }
    
        },
    ];
    return (
        <div className="userList">
            <DataGrid disableSelectionOnClick rows={data} columns={columns} pageSize={10} checkboxSelection />
        </div>
    )
}
