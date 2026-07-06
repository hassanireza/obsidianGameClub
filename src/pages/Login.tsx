import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Reveal from "../components/Reveal";
import { useAuth } from "../lib/auth";
import "./auth.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email || "guest@obsidian.store");
    navigate("/account");
  };

  return (
    <div className="auth-page">
      <Reveal as="div" className="auth-card">
        <p className="label-caps">Sign in</p>
        <h1>Welcome back</h1>
        <p className="auth-card__note">
          This is a demo account system. Nothing is sent anywhere, no
          password is checked. Any email signs you in.
        </p>
        <form className="auth-form" onSubmit={submit}>
          <div className="auth-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="auth-field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Anything works"
            />
          </div>
          <button className="btn btn--primary" type="submit">
            Sign in
          </button>
        </form>
        <p className="auth-switch">
          New here? <Link to="/signup">Create an account</Link>
        </p>
      </Reveal>
    </div>
  );
}
