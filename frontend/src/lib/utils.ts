export function generateSigilHash(input: string): string {
  let hash = 0;
  for (let i = 0; i < input.length; i++) hash = (hash << 5) - hash + input.charCodeAt(i);
  return Math.abs(hash).toString(16);
}

export function drawSigil(ctx: CanvasRenderingContext2D, hash: string) {
  ctx.clearRect(0, 0, 200, 200);
  ctx.strokeStyle = `hsl(${parseInt(hash.slice(0, 2), 16) * 3}, 70%, 60%)`;
  ctx.lineWidth = 2;
  ctx.beginPath();
  for (let i = 0; i < hash.length; i++) {
    const angle = (i / hash.length) * Math.PI * 2;
    const r = 50 + (parseInt(hash[i], 16) % 50);
    const x = 100 + Math.cos(angle) * r;
    const y = 100 + Math.sin(angle) * r;
    ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.stroke();
}
