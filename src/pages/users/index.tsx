import { useState } from "react";
import Form from "#/components/ui/form";
import Btn from "#/components/ui/btn";
import Loader from "#/components/ui/loader";
import { requestCreateUser } from "#/api/users/requestCreateUser";
import { usersFormConfig, usersValueScheme } from "./usersFormConfig";
import { GenericError } from "#/utils/GenericError";
import "./index.css";

const Users = () => {
  const [isCreating, setIsCreating] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [formKey, setFormKey] = useState(0);

  const handleCreateUser = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target)) as Record<
      string,
      string
    >;
    const { fullName, email, password, repeatPassword } = formData;

    if (password !== repeatPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");
    setSuccess("");
    setIsCreating(true);
    try {
      await requestCreateUser({ fullName, email, password });
      handleClear();
      setTimeout(() => {
        setSuccess("User is successfully added");
      }, 5000);
    } catch (error) {
      if (error instanceof GenericError) {
        setError(error.message);
      } else {
        console.error("Unknown error:", error);
      }
    }
    setIsCreating(false);
  };

  const handleClear = () => {
    setFormKey((prev) => prev + 1);
    setError("");
    setSuccess("");
  };

  return (
    <div className="users">
      <h1>Create new user</h1>
      <Form
        key={formKey}
        scheme={usersValueScheme}
        fields={usersFormConfig}
        onSubmit={handleCreateUser}
        error={error}
        success={success}
      >
        <Btn type="button" onClick={handleClear} variation="ghost" size="lg">
          Clear
        </Btn>
        <Btn type="submit" variation="primary" size="lg">
          <span className={isCreating ? "btn-label-hidden" : ""}>
            Create new user
          </span>
          {isCreating && (
            <span className="btn-loader-overlay">
              <Loader size="sm" />
            </span>
          )}
        </Btn>
      </Form>
    </div>
  );
};
export default Users;
