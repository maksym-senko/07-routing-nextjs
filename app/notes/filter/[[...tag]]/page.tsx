import { fetchNotes } from "@/lib/api"; 


interface Props {
  params: {
    tag?: string[];
  };
}

export default async function FilterPage({ params }: Props) {
  const currentTag = params.tag?.[0] || "all";
  
  const notes = await fetchNotes(currentTag);

  return (
    <div>
      {notes.map((note) => (
        <div key={note.id}>{note.title}</div>
      ))}
      {notes.length === 0 && <p>No notes found.</p>}
    </div>
  );
}