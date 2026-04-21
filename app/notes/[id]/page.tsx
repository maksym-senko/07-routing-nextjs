import { fetchNoteById } from '@/lib/api';
import { NoteDetails } from '@/components/NoteDetails/NoteDetails';
import { notFound } from 'next/navigation';


export default async function NotePage({ params }: { params: { id: string } }) {
  const note = await fetchNoteById(params.id);
  
  if (!note) return notFound();

  return (
    <main style={{ padding: '20px' }}>
      <NoteDetails note={note} />
    </main>
  );
}