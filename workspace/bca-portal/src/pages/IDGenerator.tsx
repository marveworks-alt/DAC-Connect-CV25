import { useRef, useState } from 'react'

export default function IDGenerator() {
  const [image, setImage] = useState<string | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  const onUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => setImage(reader.result as string)
    reader.readAsDataURL(file)
  }

  const generate = async () => {
    if (!canvasRef.current || !image) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')!
    const crest = new Image()
    crest.src = '/branding/bca-crest.png'
    const photo = new Image()
    photo.src = image
    await Promise.all([
      new Promise((res) => (crest.onload = () => res(null))),
      new Promise((res) => (photo.onload = () => res(null))),
    ])
    canvas.width = 800
    canvas.height = 500
    ctx.fillStyle = '#002147'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(crest, 20, 20, 120, 120)
    ctx.fillStyle = '#FFC845'
    ctx.font = 'bold 36px Poppins'
    ctx.fillText('Buj Capital Academy', 160, 70)
    ctx.font = '20px Inter'
    ctx.fillText('Per Videntia, Potentia', 160, 105)
    ctx.fillStyle = '#D4AF37'
    ctx.fillRect(20, 160, 760, 4)
    ctx.save()
    ctx.beginPath()
    ctx.arc(120, 330, 80, 0, Math.PI * 2)
    ctx.clip()
    ctx.drawImage(photo, 40, 250, 160, 160)
    ctx.restore()
    ctx.fillStyle = '#FFC845'
    ctx.font = 'bold 28px Poppins'
    ctx.fillText('STUDENT ID', 220, 260)
    ctx.fillStyle = '#FFFFFF'
    ctx.font = 'bold 24px Inter'
    ctx.fillText('Verified at BCA', 220, 300)
  }

  return (
    <div className="py-4 space-y-4">
      <h2 className="font-heading text-2xl">BCA ID Generator</h2>
      <input type="file" accept="image/*" onChange={onUpload} />
      <div className="flex gap-2">
        <button className="btn" onClick={generate} disabled={!image}>Generate Card</button>
        {image && <a className="btn" href={canvasRef.current?.toDataURL()} download="bca-id.png">Download</a>}
      </div>
      <canvas ref={canvasRef} className="w-full border rounded"></canvas>
    </div>
  )
}
