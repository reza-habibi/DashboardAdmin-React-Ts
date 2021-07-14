import { DataGrid, GridColDef } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { productRows } from "../../demoData";
import "./ProductList.Style.css";

export default function ProductList() {

    const [data,setData] = useState(productRows)

    const handleDelete = (id: number) => {
        setData(data.filter((item) => item.id !== id));
      };


      const columns: GridColDef[] = [
        { field: "id", headerName: "ID", width: 90 },
        {
          field: "product",
          headerName: "Product",
          width: 200,
          renderCell: (params) => {
            return (
              <div className="tableProduct">
                <img src={params.row.img} alt="" />
                {params.row.name}
              </div>
            );
          },
        },
        { field: "stock", headerName: "Stock", width: 200 },
        {
          field: "status",
          headerName: "Status",
          width: 120,
        },
        {
          field: "price",
          headerName: "Price",
          width: 160,
        },
        {
          field: "action",
          headerName: "Action",
          sortable: false,
          width: 160,
          renderCell: (params) => {
            return (
              <>
                <Link to={"/product/" + params.row.id}>
                  <button className="productListEdit">Edit</button>
                </Link>
                <DeleteOutline
                  className="productListDelete"
                  onClick={() => handleDelete(params.row.id)}
                />
              </>
            );
          },
        },
      ];
  return (
    <div className="productList">
      <DataGrid
        disableSelectionOnClick
        rows={data}
        columns={columns}
        pageSize={10}
        checkboxSelection
      />
    </div>
  );
}
