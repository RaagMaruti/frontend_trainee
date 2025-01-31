import { useState } from "react";

export default function Profile() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [cred, setCred] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    if (cred.username === "admin" && cred.password === "admin") {
      alert("Logged in as Admin");
      setIsAdmin(true);
    } else {
      alert("Wrong username or password");
    }
  }

  function handleChange(e) {
    setCred({ ...cred, [e.target.name]: e.target.value });
  }

  return (
    <div style={{ padding: "1em" }}>
      <h1>This is the Profile Page</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Enter the username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="username"
          value={cred.username}
          onChange={handleChange}
          required
        ></input>
        <br />
        <label htmlFor="password">Enter the password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          value={cred.password}
          onChange={handleChange}
          required
        ></input>
        <br />
        <button type="submit">Submit</button>
      </form>

      {isAdmin && <h3>This message is only for the Admin.</h3>}
    </div>
  );
}
