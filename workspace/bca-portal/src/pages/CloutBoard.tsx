export default function CloutBoard() {
  const clues = [
    'clue[01]: A crest reflects. So do you.',
    'clue[02]: Fridays blur fiction and feed.',
    'clue[03]: search> truth',
  ]
  return (
    <div className="min-h-dvh bg-[#0b0b0b] text-[#D4AF37] p-4">
      <div className="max-w-screen-sm mx-auto">
        <h2 className="font-heading text-2xl mb-4">CLOUTBOARD</h2>
        <div className="space-y-2">
          {clues.map((c, i) => (
            <div key={i} className="p-3 bg-black/50 rounded border border-gold/30">{c}</div>
          ))}
        </div>
      </div>
    </div>
  )
}
