import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-card">
        <h1>Welcome </h1>
        <p>You have successfully logged in.</p>
        <button onClick={() => navigate("/login")}>Logout</button>
      </div>
    </div>
  );
}

export default Home;
