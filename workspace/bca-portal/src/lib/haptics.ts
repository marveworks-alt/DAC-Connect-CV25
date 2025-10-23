export function hapticTap(intensity: 'light' | 'medium' | 'heavy' = 'light') {
  const pattern = intensity === 'heavy' ? [10, 40, 10] : intensity === 'medium' ? [10, 20] : [10]
  if (typeof window !== 'undefined' && 'vibrate' in navigator) {
    try {
      navigator.vibrate(pattern)
    } catch {
      // ignore if not supported
    }
  }
}
