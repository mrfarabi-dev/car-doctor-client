import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {

    const {signIn} = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;
        console.log(email,password)
        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => console.log(error))

    }

  return (
    <div className="hero font-serif min-h-screen bg-gray-400 bg-opacity-20">
      <div className="hero-content gap-40 flex-col lg:flex-row">
        <div className="w-1/2">
          <img src={img} alt="" />
        </div>
        <div className="card border border-white shrink-0 w-full max-w-sm shadow-2xl bg-gray-400 bg-opacity-70">
          <form onSubmit={handleLogin} className="card-body">
          <h1 className="text-3xl text-center text-white font-bold">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name='email'
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name='password'
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input type="submit" value="Login" className='btn btn-outline rounded-sm text-white bg-orange-700' />
            </div>
            <p className='text-center mt-4'>New To Car Doctor <Link className='text-orange-700 font-bold' to="/signUp">Sign Up</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
