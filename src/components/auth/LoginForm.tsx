"use client";
import { useState } from "react";
import pb from "@/lib/pocketbase";
import Link from "next/link";

interface LoginFormProps {
  redirectAfter?: string;
  onSuccess?: () => void;
}

const LoginForm = ({ redirectAfter, onSuccess }: LoginFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await pb.collection("users").authWithPassword(email, password);
      if (onSuccess) onSuccess();
      if (redirectAfter) {
        // client-side navigation without importing useRouter (optional)
        window.location.href = redirectAfter;
      }
    } catch (err: any) {
      setError(err?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-sm flex-col gap-4 rounded bg-white p-6 shadow"
    >
      <h2 className="mb-2 text-xl font-bold">Login</h2>
      {error && (
        <div className="text-sm text-red-500" role="alert">
          {error}
        </div>
      )}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        autoComplete="email"
        className="rounded border p-2"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        autoComplete="current-password"
        className="rounded border p-2"
      />
      <button
        type="submit"
        className="rounded bg-blue-600 py-2 text-white disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Logging in..." : "Login"}
      </button>
      <p className="text-center text-sm text-gray-600">
        No account?{" "}
        <Link href="/register" className="text-blue-600 underline">
          Register
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
