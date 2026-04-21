import { NotesPage } from "@/components/NotesPage/NotesPage";

export default async function FilteredNotesPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const currentTag = slug[0];
  const tagToFetch = currentTag === 'all' ? undefined : currentTag;

  return <NotesPage tag={tagToFetch} />;
}