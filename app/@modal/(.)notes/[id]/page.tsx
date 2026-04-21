'use client';

import { useQuery } from '@tanstack/react-query';
import { useRouter, useParams } from 'next/navigation';
import { Modal } from '@/components/Modal/Modal';
import { NoteDetails } from '@/components/NoteDetails/NoteDetails';
import { fetchNoteById } from '@/lib/api';


export default function NoteModalPage() {
  const router = useRouter();
  const { id } = useParams(); 

  const { data: note, isLoading } = useQuery({
    queryKey: ['note', id],
    queryFn: () => fetchNoteById(id as string),
    enabled: !!id,
  });

  if (isLoading) return null;
  if (!note) return null;

  return (
    <Modal onClose={() => router.back()}>
      <NoteDetails note={note} />
    </Modal>
  );
}