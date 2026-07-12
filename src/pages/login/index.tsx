import { useState } from "react";
import Input from "#/components/ui/input";
import Btn from "#/components/ui/btn";
import Loader from "#/components/ui/loader";
import { requestLogin } from "#/api/auth/requestLogin";
import "./index.css";
import * as v from "valibot";
import { useNavigate } from "react-router-dom";
import { LoginScheme } from "./loginScheme";
import { GenericError } from "#/utils/GenericError";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState<string>("");

  const localErrorValidator = (credentials: Record<string, string>) => {
    const response = v.parse(LoginScheme, credentials);
    return response;
  };

  const handleLogin = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = Object.fromEntries(new FormData(e.target)) as Record<
        string,
        string
      >;
      const validated = localErrorValidator(formData);
      const result = await requestLogin(validated);
      setIsLoading(true);
      if (result.success) {
        navigate("/apartments");
      } else if (!result.success) {
        setError(result.error?.message || "");
      }
      setIsLoading(false);
    } catch (error) {
      if (error instanceof v.ValiError) {
        setError(error.message);
      } else if (error instanceof GenericError) {
        console.error("GenericError caught:", error);
      } else {
        console.error("Unknown error:", error);
      }
    }
  };
  if (isLoading)
    return (
      <div className="login-loader">
        <Loader size="lg" />
      </div>
    );

  return (
    <div className="login-page">
      <img src="/logo.png" alt="Alpine oasis" className="login-logo" />
      <h1>Alpine oasis</h1>
      <span className="login-subtitle">Log in to your account</span>

      <form className="login-content" onSubmit={handleLogin}>
        <div className="login-inputs">
          <div>
            <span>Email address</span>
            <Input
              defaultValue="demo@example.com"
              size="md"
              name="email"
              type="text"
              variation="custom-search"
            />
          </div>
          <div>
            <span>Password</span>
            <Input
              defaultValue="***********"
              size="md"
              name="password"
              type="password"
              variation="custom-search"
            />
          </div>
        </div>

        {error && <span className="login-error">{error}</span>}

        <div className="login-btns">
          <Btn type="submit" variation="primary" size="e-lg">
            <span className={isLoading ? "btn-label-hidden" : ""}>Login</span>
            {isLoading && (
              <span className="btn-loader-overlay">
                <Loader size="sm" />
              </span>
            )}
          </Btn>
        </div>
      </form>
    </div>
  );
};
export default Login;
