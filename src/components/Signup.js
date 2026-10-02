import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  function handleSignup(e) {
    e.preventDefault();

    if (!name && !email && !password && !confirmPassword) {
      setError("Please fill all fields");
      return;
    }

    if (name.trim() === "") {
      setError("Please Enter Name");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email.trim() === "") {
      setError("Please Enter email");
      return;
    } else if (!emailRegex.test(email.trim())) {
      setError("Enter valid email");
      return;
    }

    let lower = /[a-z]/;
    let upper = /[A-Z]/;
    let number = /[0-9]/;
    let special = /[!@#$%^&*(),.?":{}|<>]/;

    if (password.trim() === "") {
      setError("Please Enter Password");
      return;
    } else if (password.trim().length < 4) {
      setError("Password should be greater than 4");
      return;
    } else if (password.trim().length > 12) {
      setError("Password should be less than 12");
      return;
    } else if (!lower.test(password.trim())) {
      setError("Enter lower case letter");
      return;
    } else if (!upper.test(password.trim())) {
      setError("Enter upper case letter");
      return;
    } else if (!number.test(password.trim())) {
      setError("Enter number");
      return;
    } else if (!special.test(password.trim())) {
      setError("Enter special character");
      return;
    }

    if (confirmPassword.trim() === "") {
      setError("Please Confirm Password");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");
    navigate("/home");
  }

  return (
    <div className="container">
      <div className="card">
        <h1>Create Account</h1>

        <p className="subtitle">Sign up to get started</p>

        <form onSubmit={handleSignup} noValidate>
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label>Confirm Password</label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <div className="show-password">
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            />
            <span>Show Password</span>
          </div>

          {error && <p className="error">{error}</p>}

          <button type="submit">Sign Up</button>
        </form>

        <p className="switch-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
