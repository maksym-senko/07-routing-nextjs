import NotesClient from "./Notes.client";

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export default async function FilteredNotesPage({ params }: PageProps) {
  const { slug } = await params;
  
  const currentTag = slug[0] === 'all' ? undefined : slug[0];

  return (
    <section>
      <h1 className="sr-only">Notes list</h1>
      <NotesClient tag={currentTag} />
    </section>
  );
}