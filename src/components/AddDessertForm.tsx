// src/components/DessertForm.tsx

import { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { useDessertStore } from '../stores/dessert';

const AddDessertForm = () => {
  const addDessert = useDessertStore((s) => s.addDessert);

  const [form, setForm] = useState({
    name: '',
    calories: '',
    fat: '',
    carbs: '',
    protein: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, calories, fat, carbs, protein } = form;

    // Optional: validate inputs
    if (!name.trim()) return;

    addDessert({
      name,
      calories: Number(calories),
      fat: Number(fat),
      carbs: Number(carbs),
      protein: Number(protein),
    });

    // Clear form
    setForm({
      name: '',
      calories: '',
      fat: '',
      carbs: '',
      protein: '',
    });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 3 }}>
      <TextField label="Name" name="name" value={form.name} onChange={handleChange} />
      <TextField label="Calories" name="calories" value={form.calories} onChange={handleChange} />
      <TextField label="Fat" name="fat" value={form.fat} onChange={handleChange} />
      <TextField label="Carbs" name="carbs" value={form.carbs} onChange={handleChange} />
      <TextField label="Protein" name="protein" value={form.protein} onChange={handleChange} />
      <Button type="submit" variant="contained" color="primary">
        Add Dessert
      </Button>
    </Box>
  );
};

export default AddDessertForm;
