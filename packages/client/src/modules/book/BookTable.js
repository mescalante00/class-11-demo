import { useQuery } from "@apollo/client";
import React from "react";
//import { GET_MEALS } from "./queries";
import { Icon, Typography } from "@mui/material";
// import { error } from "../../components/ErrorMessage";
// import { loading } from "../../components/Loading";

import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import { GET_BOOKS } from "./queries";

export const BookTable = () => {
  const { data, error, loading } = useQuery(GET_BOOKS);
  const navigate = useNavigate();

  if (error) return <Typography variant="h5">{error.message}</Typography>;

  if (loading) return <Typography variant="body1">Loading...</Typography>;

  const { books } = data;

  const columns = [
    { field: "title", headerName: "Title", width: 350 },
    {
      field: "category",
      headerName: "Category",
      valueGetter: (input) => {
        return input.row.category.title;
      },
      width: 150,
    },
    {
      field: "price",
      headerName: "Price",
      valueGetter: (input) => input.row.price.toFixed(2),
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      getActions: (params) => [
        <GridActionsCellItem
          icon={<Icon>edit</Icon>}
          onClick={() => navigate(`/books/${params.row.id}`)}
          label="Edit"
        />,
      ],
    },
  ];

  return (
    <div style={{ height: 800, width: 750 }}>
      <DataGrid rows={books} columns={columns} />
    </div>
  );
};
