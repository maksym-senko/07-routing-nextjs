'use client';

import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { fetchNoteById } from '@/lib/api';
import { Modal } from '@/components/Modal/Modal';
import { NoteDetails } from '@/components/NoteDetails/NoteDetails';
import type { Note } from '@/types/note';

interface NotePreviewClientProps {
  id: string;
}

export default function NotePreviewClient({ id }: NotePreviewClientProps) {
  const router = useRouter();

  const { data: note, isLoading, isError } = useQuery<Note>({
    queryKey: ['note', id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false, 
    enabled: !!id,
  });

  const handleClose = () => {
    router.back();
  };

  if (isLoading) return null;
  
  if (isError || !note) {
    return (
      <Modal onClose={handleClose}>
        <div className="p-4 text-center">Note not found or error occurred.</div>
      </Modal>
    );
  }

  return (
    <Modal onClose={handleClose}>
      <NoteDetails note={note} />
    </Modal>
  );
}