import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    fetch("http://localhost:5000/")
      .then(res => res.text())
      .then(text => console.log(text))
      .catch(() => console.log("Backend not reachable"));
  }, []);

  const [form, setForm] = useState({
    user_username: "",
    user_email_address: "",
    user_password: "",
    user_role: "Artist",
    user_bios: "",
    user_social_links: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch("http://localhost:5000/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || JSON.stringify(data));
      setStatus(`Created user ${data.user_username || data.user_email_address} (id ${data.user_id})`);
    } catch (err) {
      setStatus(`Error: ${err.message}`);
    }
  };

  return (
    <div style={{ padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <h1>MERN Test — Register User</h1>

      <form onSubmit={handleSubmit} style={{ maxWidth: 480 }}>
        <div style={{ marginBottom: 8 }}>
          <label>Username<br />
            <input name="user_username" value={form.user_username} onChange={handleChange} required style={{ width: '100%' }} />
          </label>
        </div>

        <div style={{ marginBottom: 8 }}>
          <label>Email<br />
            <input name="user_email_address" type="email" value={form.user_email_address} onChange={handleChange} required style={{ width: '100%' }} />
          </label>
        </div>

        <div style={{ marginBottom: 8 }}>
          <label>Password<br />
            <input name="user_password" type="password" value={form.user_password} onChange={handleChange} required style={{ width: '100%' }} />
          </label>
        </div>

        <div style={{ marginBottom: 8 }}>
          <label>Role<br />
            <select name="user_role" value={form.user_role} onChange={handleChange} style={{ width: '100%' }}>
              <option>Admin</option>
              <option>Artist</option>
              <option>Programmer</option>
              <option>Craftsman</option>
            </select>
          </label>
        </div>

        <div style={{ marginBottom: 8 }}>
          <label>Bio<br />
            <input name="user_bios" value={form.user_bios} onChange={handleChange} style={{ width: '100%' }} />
          </label>
        </div>

        <div style={{ marginBottom: 8 }}>
          <label>Social links<br />
            <input name="user_social_links" value={form.user_social_links} onChange={handleChange} style={{ width: '100%' }} />
          </label>
        </div>

        <button type="submit">Register</button>
      </form>

      {status && <p style={{ marginTop: 12 }}>{status}</p>}
    </div>
  );
}

export default App;