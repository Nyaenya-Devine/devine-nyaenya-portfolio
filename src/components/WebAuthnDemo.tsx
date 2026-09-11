"use client";

import { useState } from "react";

export function WebAuthnDemo() {
  const [status, setStatus] = useState<string>("Ready — passkeys stay on this device, no server.");
  const [credential, setCredential] = useState<string | null>(null);

  const isSupported = typeof window !== "undefined" && !!window.PublicKeyCredential;

  const createPasskey = async () => {
    if (!isSupported) {
      setStatus("WebAuthn not supported in this browser.");
      return;
    }
    try {
      setStatus("Requesting passkey — check OS dialog…");
      const challenge = new Uint8Array(32);
      crypto.getRandomValues(challenge);
      const userId = new Uint8Array(16);
      crypto.getRandomValues(userId);

      const cred = (await navigator.credentials.create({
        publicKey: {
          challenge,
          rp: { name: "Devine Portfolio Demo", id: window.location.hostname },
          user: { id: userId, name: "demo@local", displayName: "Demo User" },
          pubKeyCredParams: [{ type: "public-key", alg: -7 }, { type: "public-key", alg: -257 }],
          authenticatorSelection: { authenticatorAttachment: "platform", userVerification: "preferred" },
          timeout: 60000,
          attestation: "none",
        },
      })) as PublicKeyCredential | null;

      if (cred) {
        setCredential(cred.id);
        setStatus(`✅ Passkey created — ID ${cred.id.slice(0, 16)}… (stored in authenticator, not on server). This proves WebAuthn integration without collecting biometrics.`);
      } else {
        setStatus("Creation returned null — cancelled?");
      }
    } catch (e: any) {
      setStatus(`❌ ${e?.name || "Error"}: ${e?.message || String(e)} — This is expected if you cancelled or platform authenticator unavailable.`);
    }
  };

  const authenticate = async () => {
    if (!credential) {
      setStatus("Create a passkey first.");
      return;
    }
    try {
      setStatus("Requesting authentication…");
      const challenge = new Uint8Array(32);
      crypto.getRandomValues(challenge);
      const assertion = await navigator.credentials.get({
        publicKey: {
          challenge,
          timeout: 60000,
          userVerification: "preferred",
          rpId: window.location.hostname,
        },
      });
      if (assertion) {
        setStatus(`✅ Authentication succeeded — assertion ID ${(assertion as any).id?.slice(0, 16)}… Platform authenticator verified user locally. No password, no secret sent to server.`);
      } else {
        setStatus("Authentication returned null.");
      }
    } catch (e: any) {
      setStatus(`❌ ${e?.name}: ${e?.message}`);
    }
  };

  return (
    <div className="rounded-2xl border border-[#1F1F23] bg-[#0E0E11] p-6">
      <div className="flex items-center gap-3 mb-3">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300">🔐</span>
        <div>
          <h3 className="font-medium text-[#F5F3EF]">WebAuthn / Passkey Demo — God Mode</h3>
          <p className="text-xs text-[#6B6A67] font-mono">Client-side only, no server, no collection</p>
        </div>
      </div>
      <p className="text-sm text-[#A8A6A1] mb-4">
        Demonstrates passwordless auth using platform authenticator. Credentials never leave device. Proves security engineering beyond passwords — progressive enhancement, fails gracefully if unsupported.
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        <button onClick={createPasskey} className="rounded-full bg-[#FFFDFA] px-4 py-2 text-[13px] font-semibold text-[#050507] hover:bg-white transition">Create Passkey</button>
        <button onClick={authenticate} className="rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-2 text-[13px] text-white/70 hover:bg-white/[0.08] transition">Authenticate</button>
        <span className={`text-xs px-2 py-1 rounded-full border ${isSupported ? "border-emerald-500/20 text-emerald-400 bg-emerald-500/5" : "border-amber-500/20 text-amber-400 bg-amber-500/5"}`}>{isSupported ? "WebAuthn supported" : "Not supported"}</span>
      </div>
      <div className="rounded-xl bg-[#15151A] border border-[#1F1F23] p-3 font-mono text-[12px] text-[#A8A6A1] min-h-[48px]">{status}</div>
      <p className="text-[11px] text-[#6B6A67] mt-3">Security note: challenge and userId are random via crypto.getRandomValues (CSPRNG). attestation=none, no PII. This is a demo — production would verify assertion on server with stored public key.</p>
    </div>
  );
}
