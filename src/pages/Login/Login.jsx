import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.css";

function Login() {
    const [parentName, setParentName] = useState("");
    const navigate = useNavigate();

    function handleLogin(event) {
        event.preventDefault();

        if(!parentName.trim()) return;

        localStorage.setItem("koelliteLoggedIn", "true");
        localStorage.setItem("koelliteParentName", parentName);
        navigate("/home");
    }

    return (
        <main className="login-page">
            <section className="login-card">
                <div className="login-logo">🌟</div>

                <h1> Koellite Learning </h1>
                <p> A fun and personalized learning experience for your child! </p>
                <form onSubmit={handleLogin}>
                    <label>
                        Parent Name
                        <input 
                            type="text"
                            value={parentName}
                            onChange={(event) => setParentName(event.target.value)}
                            placeholder="Enter your name"
                            />
                    </label>
                    <button type="submit"> Enter Learning Space </button>
                </form>
            </section>
        </main>
    )
}

export default Login;