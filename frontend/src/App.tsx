import { useState } from "react";
import WalletConnector from "./components/WalletConnector";
import SigilCanvas from "./components/SigilCanvas";
import MintPanel from "./components/MintPanel";

export default function App() {
  const [address, setAddress] = useState("");
  const [sigilHash, setSigilHash] = useState("");

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-bold">🪶 Sigil Codex</h1>
      <p className="text-sm opacity-70">Mint your cryptographic symbol — your sigil of Web3 existence.</p>

      {!address ? (
        <WalletConnector onConnect={setAddress} />
      ) : (
        <>
          <SigilCanvas address={address} onGenerate={setSigilHash} />
          <MintPanel sigilHash={sigilHash} />
        </>
      )}
    </div>
  );
}
