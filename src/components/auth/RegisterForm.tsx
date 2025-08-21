"use client";
import { useState } from "react";
import pb from "@/lib/pocketbase";
import Link from "next/link";

interface RegisterFormProps {
  redirectAfter?: string; // e.g. "/login" after successful registration
  onSuccess?: () => void;
}

const RegisterForm = ({ redirectAfter, onSuccess }: RegisterFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (password !== passwordConfirm) {
      setError("Passwords do not match");
      return;
    }
    setLoading(true);
    try {
      await pb.collection("users").create({
        name,
        email,
        password,
        passwordConfirm,
      });
      setSuccess("Registration successful! Check your email to verify.");
      if (onSuccess) onSuccess();
      if (redirectAfter) {
        setTimeout(() => {
          window.location.href = redirectAfter;
        }, 800);
      }
      setName("");
      setEmail("");
      setPassword("");
      setPasswordConfirm("");
    } catch (err: any) {
      // PocketBase often returns an object with data field containing field errors
      if (err?.data?.data) {
        const firstFieldErr = Object.values<any>(err.data.data)[0];
        setError(firstFieldErr?.message || err.message || "Registration failed");
      } else {
        setError(err?.message || "Registration failed");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-sm flex-col gap-4 rounded bg-white p-6 shadow"
    >
      <h2 className="mb-2 text-xl font-bold">Register</h2>
      {error && (
        <div className="text-sm text-red-500" role="alert">
          {error}
        </div>
      )}
      {success && (
        <div className="text-sm text-green-600" role="status">
          {success}
        </div>
      )}
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        autoComplete="name"
        className="rounded border p-2"
      />
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
        autoComplete="new-password"
        className="rounded border p-2"
        minLength={8}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
        required
        autoComplete="new-password"
        className="rounded border p-2"
        minLength={8}
      />
      <button
        type="submit"
        className="rounded bg-blue-600 py-2 text-white disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Registering..." : "Register"}
      </button>
      <p className="text-center text-sm text-gray-600">
        Already have an account?{" "}
        <Link href="/login" className="text-blue-600 underline">
          Login
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
