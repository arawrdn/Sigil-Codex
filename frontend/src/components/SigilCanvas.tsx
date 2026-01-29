import { useEffect, useRef } from "react";
import { generateSigilHash, drawSigil } from "../lib/utils";

export default function SigilCanvas({ address, onGenerate }: { address: string; onGenerate: (h: string) => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const hash = generateSigilHash(address);
    const ctx = canvasRef.current!.getContext("2d")!;
    drawSigil(ctx, hash);
    onGenerate(hash);
  }, [address]);

  return (
    <canvas ref={canvasRef} width={200} height={200} className="border border-gray-600 rounded-lg shadow-lg" />
  );
}
