import React, { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
import logo from "../../assets/logo.png";

const Login = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const toggleSignUp = () => {
        setIsSignUp(!isSignUp);
        setErrors({});
    };

    const validate = () => {
        const newErrors = {};
        if (isSignUp && !formData.username) {
            newErrors.username = "Username is required.";
        }
        if (!formData.email) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Invalid email format.";
        }
        if (!formData.password) {
            newErrors.password = "Password is required.";
        } else if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters.";
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        // Simulate success without backend
        toast.success("Form submitted successfully!");

        // Store user data in local state or navigate
        setErrors({});
        navigate("/home");
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="total">
            <div className={`cont ${isSignUp ? "sign-up-mode" : ""}`}>
                {/* Login Form */}
                {!isSignUp && (
                    <div className="form-container login">
                        <h2>Login</h2>
                        <form onSubmit={handleSubmit}>
                            <label>
                                Email
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    aria-label="Email"
                                />
                                {errors.email && <small className="error">{errors.email}</small>}
                            </label>
                            <label>
                                Password
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    aria-label="Password"
                                />
                                {errors.password && <small className="error">{errors.password}</small>}
                            </label>
                            <div className="forgot-pass">Forgot Password?</div>
                            <br />
                            <button className="submit" type="submit">
                                Login
                            </button>
                        </form>
                    </div>
                )}

                {/* Sign-Up Form */}
                {isSignUp && (
                    <div className="form-container signup">
                        <h2>Sign Up</h2>
                        <form onSubmit={handleSubmit}>
                            <label>
                                Username
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Enter your username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    aria-label="Username"
                                />
                                {errors.username && <small className="error">{errors.username}</small>}
                            </label>
                            <label>
                                Email
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    aria-label="Email"
                                />
                                {errors.email && <small className="error">{errors.email}</small>}
                            </label>
                            <label>
                                Password
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    aria-label="Password"
                                />
                                {errors.password && <small className="error">{errors.password}</small>}
                            </label>
                            <button className="submit" type="submit">
                                Sign Up
                            </button>
                        </form>
                    </div>
                )}

                {/* Right Section */}
                <div className="sub-cont">
                    <div className="img__text">
                        {isSignUp ? (
                            <>
                                <h3>Already have an account?</h3>
                                <p>Login to continue exploring!</p>
                            </>
                        ) : (
                            <>
                                <h3>New here?</h3>
                                <p>Sign up and join the community!</p>
                            </>
                        )}
                        <button className="img__btn" onClick={toggleSignUp}>
                            {isSignUp ? "Login" : "Sign Up"}
                        </button>
                    </div>
                </div>

                {/* Outlet for child routes */}
                <Outlet />

                {/* Toast container for notifications */}
                <ToastContainer
                    position="top-center"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeButton={true}
                />
            </div>

            {/* Logo Image */}
            <div>
                <img
                    className="real_image"
                    src="https://cdn.prod.website-files.com/5d26256b528d2e079bc08d82/622f3b0c4423ac76de1bc765_16.png"
                    alt="logo"
                    style={{ width: "400px", height: "300px", borderRadius: "10%" }}
                />
            </div>
        </div>
    );
};

export default Login;
