"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase/client";

export default function ResetPasswordForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleReset(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");
    const { error } = await supabase.auth.resetPasswordForEmail(email);
    if (error) setError(error.message);
    else setMessage("Check your email for reset instructions.");
    setLoading(false);
  }

  return (
    <form onSubmit={handleReset} className="space-y-4">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="input"
        required
      />
      {error && <div className="text-red-500 text-sm">{error}</div>}
      {message && <div className="text-green-600 text-sm">{message}</div>}
      <button type="submit" className="btn" disabled={loading}>
        {loading ? "Sending..." : "Reset Password"}
      </button>
    </form>
  );
} 