'use client';
    
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Modal } from '@/components/Modal/Modal';
import { NoteDetails } from '@/components/NoteDetails/NoteDetails';
import { fetchNoteById } from '@/lib/api';
import { Note } from '@/types/note';


export default function NoteModalPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  
  const [note, setNote] = useState<Note | null>(null);

  useEffect(() => {
    if (params.id) {
      fetchNoteById(params.id).then(data => setNote(data));
    }
  }, [params.id]);

  if (!note) return null;

  return (
    <Modal onClose={() => router.back()}>
      <NoteDetails note={note} />
    </Modal>
  );
}