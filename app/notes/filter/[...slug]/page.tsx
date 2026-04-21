'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchNotes } from '@/lib/api';
import { NoteList } from '@/components/NoteList/NoteList';


interface NotesPageProps {
  tag?: string;
}

export const NotesPage = ({ tag }: NotesPageProps) => {
  const { data: notes, isLoading, isError } = useQuery({
    queryKey: ['notes', tag],
    queryFn: () => fetchNotes(tag),
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading notes.</p>;

  return <NoteList notes={notes ?? []} />;
};