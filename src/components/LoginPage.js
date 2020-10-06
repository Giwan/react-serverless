import React from "react";

export const headers = {
    method: "POST",
    "Content-Type": "application/json",
};

const LoginPage = ({ history }) => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { username, password } = e.currentTarget;
        if (!username.value && password.value) {
            console.warning("username and password required");
            return;
        }

        try {
            headers.body = JSON.stringify({
                username: username.value,
                password: password.value,
            });
            const response = await fetch(
                "/.netlify/functions/login/login.js",
                headers
            );

            if (!response.ok) {
                throw new Error(`Login failed: ${response.status}`);
            }

            history.push("/admin");
        } catch (e) {
            console.error(e);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" required />
            <input type="password" name="password" required />
            <button>Login</button>
        </form>
    );
};

export default LoginPage;
