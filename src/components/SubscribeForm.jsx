import { useState } from "react";
import { site } from "../data/site.js";

// Opens your Substack subscribe page with the email pre-filled.
// Substack stores the email list and handles confirmation and unsubscribes.
export default function SubscribeForm({ label = "Subscribe", onDone, style }) {
  const [email, setEmail] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    window.open(`${site.substackPublication}/subscribe?email=${encodeURIComponent(email.trim())}`, "_blank", "noopener");
    try { localStorage.setItem("mvk_subscribed", "1"); } catch (_) {}
    onDone && onDone();
  };
  return (
    <form className="sub-form" onSubmit={submit} style={style}>
      <input type="email" placeholder="you@company.com" required aria-label="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button className="btn primary" type="submit">{label}</button>
    </form>
  );
}
