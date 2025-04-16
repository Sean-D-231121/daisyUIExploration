import { useState } from "react";

function SignupForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted");

    setUsername("");
    setEmail("");
    setPassword("");

    setSubmitted(true);

   
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      <div className="container mx-auto px-4 pt-5">
        <div className="card bg-base-200 flex flex-col items-center justify-center min-h-screen text-center">
          <h1 className="text-6xl mb-8">Sign up</h1>

          {submitted && (
            <div className="alert alert-success mb-4 text-lg">
              Form is submitted!
            </div>
          )}

          <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
            <fieldset className="form-control fieldset mb-4 w-full max-w-md">
              <legend className="fieldset-legend">
                What is your Username?
              </legend>
              <input
                type="text"
                className="input w-full"
                placeholder="Type here"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <p className="fieldset-label">Optional</p>
            </fieldset>

            <fieldset className="form-control fieldset mb-4 w-full max-w-md">
              <legend className="fieldset-legend">Email</legend>
              <input
                type="email"
                className="input w-full"
                placeholder="Type here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </fieldset>

            <fieldset className="form-control fieldset mb-6 w-full max-w-md">
              <legend className="fieldset-legend">Password</legend>
              <input
                type="password"
                className="input w-full"
                placeholder="Type here"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </fieldset>

            <button
              type="submit"
              className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl btn-outline btn-primary"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignupForm;
