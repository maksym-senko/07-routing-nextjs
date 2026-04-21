'use client';

import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { fetchNotes, NotesResponse } from '@/lib/api';
import { NoteList } from '@/components/NoteList/NoteList';
import { Pagination } from '@/components/Pagination/Pagination';


interface NotesClientProps {
  tag?: string;
}

export default function NotesClient({ tag }: NotesClientProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const currentPage = Number(searchParams.get('page')) || 1;

  const { data, isLoading, isError } = useQuery<NotesResponse>({
    queryKey: ['notes', tag, currentPage],
    queryFn: () => fetchNotes({ tag, page: currentPage }),
  });

  const handlePageChange = ({ selected }: { selected: number }) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', (selected + 1).toString());
    replace(`${pathname}?${params.toString()}`);
  };

  if (isLoading) return <div className="p-4 text-center">Loading notes...</div>;
  
  if (isError) return <div className="p-4 text-center text-red-500">Error loading data. Check your connection or token.</div>;

  return (
    <div className="flex flex-col gap-6">
      <NoteList notes={data?.notes ?? []} />
      
      {data && data.totalPages > 1 && (
        <Pagination 
          pageCount={data.totalPages} 
          onPageChange={handlePageChange}
          forcePage={currentPage - 1} 
        />
      )}
    </div>
  );
}