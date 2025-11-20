import '../styles/login.css';

export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const payload = Object.fromEntries(form.entries());
    // Replace with real login flow
    fetch('http://localhost:5000/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user_username: payload.identity || '',
        user_email_address: payload.identity || '',
        user_password: payload.password || '',
      })
    })
    .then(r => r.json())
    .then(d => alert('Response: ' + JSON.stringify(d)))
    .catch(err => alert('Error: ' + err.message));
  };

  return (
    <div className="page">
      <div className="left">
        <div className="brand">
          <h1>Login</h1>
          <p className="sub">Welcome Back!</p>
        </div>

        <div className="card">
          <form id="loginForm" onSubmit={handleSubmit}>
            <input name="identity" placeholder="Email / Username" required />
            <input name="password" type="password" placeholder="Password" required />
            <a className="forgot" href="#">Forgot Password</a>
            <button className="primary" type="submit">Log In</button>
          </form>

          <div className="or">or</div>

          <div className="socials">
            <button className="social fb" type="button">
              <span className="icon">f</span>
              <span>Facebook</span>
            </button>
            <button className="social google" type="button">
              <span className="icon">G</span>
              <span>Google</span>
            </button>
          </div>

          <div className="signup">New to Meraki? <a href="#">Sign up</a></div>
        </div>

        <footer className="small">Terms of Service &nbsp; Privacy Policy &nbsp; Cookie Policy</footer>
      </div>

      <div className="right">
        <div className="art-wrap">
          <img src="/placeholder-art.png" alt="Meraki art placeholder" className="art" />
        </div>
      </div>
    </div>
  );
}
