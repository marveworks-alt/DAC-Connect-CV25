export default function BujPod() {
  return (
    <div className="py-4 space-y-2">
      <h2 className="font-heading text-2xl">BujPod Live</h2>
      <div className="aspect-video rounded overflow-hidden border bg-black">
        <iframe className="w-full h-full" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Verified Vibes" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </div>
      <p className="text-sm text-navy/70">Stream the Verified Vibes gossip segment within the app.</p>
    </div>
  )
}
