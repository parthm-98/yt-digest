export default async function ServerPage({ params }: { params: { serverId: string } }) {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold">Welcome to {params.serverId}</h1>
        <p>Select a video to view its details.</p>
      </div>
    );
  }
  