import { Link, useNavigate } from "react-router-dom";
import login_img from "../../assets/images/login/login.svg";
import { FaFacebook, FaGithub, FaGoogle} from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const SignUp = () => {
  const { createUser,googleSignIn, githubSignIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, email, password);

    if (password < 6) {
      setError("Password should have at least 6 character.");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError("Password should have at least one capital letter.");
      return;
    } else if (!/[0-9]/.test(password)) {
      setError("Password should have at least one digit.");
      return;
    } else if (!/[@#$%^&*]/.test(password)) {
      setError("Password should have at least one special character");
      return;
    }

    //reset error
    setError("");
    setSuccess("");

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
        //toast msg
        setSuccess("Successfully Logged in.");
        toast.success("Successfully Logged in.", {
          position: "top-right",
        });
      })
      .catch((error) => {
        console.error(error);
        setError("Failed to logged in.")
        toast.error("Failed to Logged in.", {
            position: "top-right",
          });
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
    .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
        //toast msg
        setSuccess("Successfully Logged in.");
        toast.success("Successfully Logged in.", {
          position: "top-right",
        });
      })
      .catch((error) => {
        console.error(error);
        setError("Failed to logged in.")
        toast.error("Failed to Logged in.", {
            position: "top-right",
          });
      });
  };

  const handleGithubLogin = () => {
    githubSignIn()
    .then((result) => {
      console.log(result.user);
      navigate(location?.state ? location.state : "/");
      //toast msg
      setSuccess("Successfully Logged in.");
      toast.success("Successfully Logged in.", {
        position: "top-right",
      });
    })
    .catch((error) => {
      console.error(error);
      setError("Failed to logged in.")
      toast.error("Failed to Logged in.", {
          position: "top-right",
        });
    });
     
  };

  return (
    <div className="mx-auto">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row gap-20">
          <div className=" w-full lg:w-1/2">
            <img className="" src={login_img} alt="" />
          </div>

          <div className="card flex-shrink-0 w-full max-w-sm md:max-w-md shadow-2xl bg-base-100 px-2 lg:px-0">
            <form onSubmit={handleSignUp} className="card-body lg:p-[70px] lg:pb-0">
              <h1 className="text-5xl text-center  font-bold">Sign Up</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="User Name"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn font-bold bg-[#FF3811] border-0 text-white hover:bg-white hover:text-[#FF3811] hover:border-2 hover:border-[#FF3811]"
                  type="submit"
                  value="Sign Up"
                />
              </div>
              
              {
                error && (
                    <p className="text-[#FF3811] text-center">{error}</p>
                )
              }

              {
                success && (
                    <p className="text-green-700 text-center">{success}</p>
                )
              }

            </form>


            <div className="mx-auto py-8">
                <p className="text-center">Or Sign Up with</p>
                <div className="flex gap-4 justify-center my-4 text-lg text-[#FF3811]">
                  <FaFacebook></FaFacebook>
                  <button onClick={handleGoogleSignIn}>  <FaGoogle></FaGoogle></button>
                  <button onClick={handleGithubLogin}><FaGithub></FaGithub></button>
                 
                 
                </div>
                <p>
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="font-bold underline text-[#FF3811]"
                  >
                    Log In
                  </Link>
                </p>
              </div>

          


          </div>
        </div>
      </div>

    
     
    </div>
  );
};

export default SignUp;
