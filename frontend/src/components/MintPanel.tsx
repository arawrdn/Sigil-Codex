import { useState } from "react";

export default function MintPanel({ sigilHash }: { sigilHash: string }) {
  const [status, setStatus] = useState("");

  async function handleMint() {
    setStatus("Minting your sigil...");
    setTimeout(() => setStatus("Sigil minted successfully."), 1500);
  }

  return (
    <div className="text-center space-y-3">
      <p className="text-xs opacity-70">Sigil hash: {sigilHash.slice(0, 10)}...</p>
      <button onClick={handleMint} className="px-4 py-2 bg-green-600 rounded-lg">Mint Sigil</button>
      <p className="text-xs mt-2">{status}</p>
    </div>
  );
}
