import { create } from 'zustand';
import { nanoid } from 'nanoid'; // optional: for unique IDs

export type Dessert = {
  id: string;
  name: string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
};

type DessertStore = {
  desserts: Dessert[];
  addDessert: (d: Omit<Dessert, 'id'>) => void;
  removeDessert: (id: string) => void;
  updateDessert: (updated: Dessert) => void;
};

export const useDessertStore = create<DessertStore>((set) => ({
  desserts: [
    { id: '1', name: 'Frozen yoghurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
    { id: '2', name: 'Ice cream sandwich', calories: 237, fat: 9.0, carbs: 37, protein: 4.3 },
    { id: '3', name: 'Eclair', calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
    { id: '4', name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
    { id: '5', name: 'Gingerbread', calories: 356, fat: 16.0, carbs: 49, protein: 3.9 },
  ],
  addDessert: (dessert) =>
    set((state) => ({
      desserts: [...state.desserts, { ...dessert, id: nanoid() }],
    })),
  removeDessert: (id) =>
    set((state) => ({
      desserts: state.desserts.filter((d) => d.id !== id),
    })),
  updateDessert: (updated) =>
    set((state) => ({
      desserts: state.desserts.map((d) =>
        d.id === updated.id ? { ...d, ...updated } : d
      ),
    })),
}));
