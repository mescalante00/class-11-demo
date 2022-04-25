import { Button, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";
import { SelectCategory } from "../category/SelectCategory";

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
          <SelectCategory
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
          <SelectCategory
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

        <Grid item container spacing={2}>
          <Grid item>
            <Button type="reset">Reset</Button>
          </Grid>
          <Grid item>
            <Button type="submit">Save</Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};