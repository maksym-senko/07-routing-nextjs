import axios from "axios";
import type { Note } from "../types/note";


const noteInstance = axios.create({
  baseURL: "https://notehub-public.goit.study/api",
});

noteInstance.interceptors.request.use((config) => {
  const token = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

interface FetchNotesParams {
  page: number;
  perPage: number;
  tag?: string;
}

export const fetchNotes = async (
  tag?: string,
  page: number = 1,
  perPage: number = 12
): Promise<Note[]> => {
  const params: FetchNotesParams = { page, perPage };
  
  if (tag && tag !== "all") {
    params.tag = tag;
  }

  const { data } = await noteInstance.get<Note[]>("/notes", { params });
  return data;
};

export const fetchNoteById = async (id: string): Promise<Note> => {
  const { data } = await noteInstance.get<Note>(`/notes/${id}`);
  return data;
};

export const createNote = async (note: {
  title: string;
  content: string;
  tag: string;
}) => {
  const { data } = await noteInstance.post("/notes", note);
  return data;
};

export const deleteNote = async (id: string): Promise<void> => {
  await noteInstance.delete(`/notes/${id}`);
};
