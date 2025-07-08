import { create } from "zustand";
import axios from "../api/axios";

export const useStoreItemStore = create((set) => ({
  items: [],
  fetchItems: async () => {
    const res = await axios.get("/products");
    set({ items: res.data });
  },
  addItem: async (data) => {
    await axios.post("/products", data);
    await set((state) => ({ items: [...state.items, data] }));
  },
  updateItem: async (id, data) => {
    await axios.put(`/products/${id}`, data);
    set((state) => ({
      items: state.items.map((item) => (item._id === id ? { ...item, ...data } : item))
    }));
  },
  deleteItem: async (id) => {
    await axios.delete(`/products/${id}`);
    set((state) => ({
      items: state.items.filter((item) => item._id !== id)
    }));
  }
}));
