'use client';

import { NoteDetails } from "@/components/NoteDetails/NoteDetails";
import { Note } from "@/types/note";

export default function NoteDetailsClient({ note }: { note: Note }) {
  return <NoteDetails note={note} />;
}