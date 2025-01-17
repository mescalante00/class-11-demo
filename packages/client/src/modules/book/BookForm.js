import { Button, Grid, TextField, Typography } from "@mui/material";
import { useMutation } from "@apollo/client";
import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";
import { SelectCategory } from "../category/SelectCategory";
import { ADD_BOOK, UPDATE_BOOK } from "./mutations";

const fieldStyle = { width: 500 };

const validationSchema = yup.object({
  title: yup.string().required().label("Title"),
  description: yup.string().required().label("Description"),
  publisher: yup.string().required().label("Publisher"),
  author: yup.string().required().label("Author"),
  price: yup.number().required().label("Price").min(0.25),
  categoryId: yup.string().required().label("Category"),
});

export const BookForm = ({ id, initialValues, onClose }) => {
  const mutation = id !== undefined ? UPDATE_BOOK : ADD_BOOK;
  console.log("Book from mutation checking");
  const [saveBook, { loading, error }] = useMutation(mutation, {
    refetchQueries: ["GET_BOOKS", "GET_BOOK"],
    onCompleted: () => {
      if (onClose !== undefined) onClose();
    },
  });
  console.log("Before value checking");
  const {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      console.log(`Book ID: ${id}`);
      console.log("Values:", values);

      const {
        title,
        description,
        author,
        publisher,
        imgsrc,
        categoryId,
        price,
      } = values;
      console.log(values);
      const input = {
        title,
        description,
        author,
        publisher,
        imgsrc,
        categoryId,
        price,
      };
      console.log(input);
      await saveBook({
        variables: {
          id,
          input,
        },
      });
    },
  });

  return (
    <form onSubmit={handleSubmit} onReset={handleReset}>
      <Grid container spacing={2} direction="column">
        <Grid item>
          <Typography variant="h3">
            {id !== undefined ? "Edit" : "Add"} Book
          </Typography>
        </Grid>
        <Grid item>
          <TextField
            id="title"
            label="Title"
            style={fieldStyle}
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!errors.title}
            helperText={errors.title}
          />
        </Grid>
        <Grid item>
          <TextField
            id="description"
            label="Description"
            multiline={true}
            style={fieldStyle}
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!errors.description}
            helperText={errors.description}
          />
        </Grid>
        <Grid item>
          <TextField
            name="publisher"
            style={fieldStyle}
            value={values.publisher}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!errors.publisher}
            helperText={errors.publisher}
          />
        </Grid>
        <Grid item>
          <TextField
            name="author"
            style={fieldStyle}
            value={values.author}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!errors.author}
            helperText={errors.author}
          />
        </Grid>
        <Grid item>
          <TextField
            id="imgsrc"
            label="Image URI"
            style={fieldStyle}
            value={values.imgsrc}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!errors.imgsrc}
            helperText={errors.imgsrc}
          />
        </Grid>
        <Grid item>
          <TextField
            id="price"
            type="number"
            label="Price"
            style={fieldStyle}
            value={values.price}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!errors.price}
            helperText={errors.price}
          />
        </Grid>
        <Grid item>
          <SelectCategory
            name="categoryId"
            style={fieldStyle}
            value={values.categoryId}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!errors.categoryId}
            helperText={errors.categoryId}
          />
        </Grid>
        {/* Adding the lectures version of error handling */}
        {error && (
          <Grid item>
            <Typography> Error: {error.message}</Typography>
          </Grid>
        )}
        {/* end of lectures version of error handling */}
        <Grid item container spacing={2}>
          <Grid item>
            <Button type="reset" disabled={loading}>
              Reset
            </Button>
          </Grid>
          <Grid item>
            <Button type="submit" disabled={loading}>
              Save
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};
