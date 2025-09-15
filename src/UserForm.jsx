import { useState } from "react";

export default function UsernameForm() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const trimmed = username.trim();
  const isValid = trimmed.length >= 3;

  function handleSubmit(e) {
    e.preventDefault();

    if (!isValid) {
      setError("Username must be at least 3 characters long");
      return;
    }

    alert(`Submitted: ${username}`);
    setUsername("");
    setError("");
  }

  function handleChange(e) {
    const value = e.target.value;
    setUsername(value);

    if (value.trim().length < 3) {
      setError("Username must be at least 3 characters long");
    } else {
      setError("");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <input
          value={username}
          onChange={handleChange}
          placeholder="Enter username"
        />
      </label>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button type="submit" disabled={!isValid}>
        Submit
      </button>
    </form>
  );
}
