import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const SignUp = () => {

    const {createUser} = useContext(AuthContext)

    const handleSignUp = event => {
        event.preventDefault();
        const from = event.target;
        const name = from.name.value;
        const email = from.email.value;
        const password = from.password.value;
        console.log(name,email,password)
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => console.log(error))
    }


    return (
        <div className="hero font-serif  min-h-screen bg-gray-400 bg-opacity-20">
      <div className="hero-content gap-40 flex-col lg:flex-row">
        <div className="w-1/2">
          <img src={img} alt="" />
        </div>
        <div className="card border border-white shrink-0 w-full max-w-sm shadow-2xl bg-emerald-950 bg-opacity-50">
          <form onSubmit={handleSignUp} className="card-body">
          <h1 className="text-3xl text-center text-white font-bold">SignUp</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                name='name'
                required
              />
            </div>
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
                <span className="label-text">Confirm Password</span>
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
              <input type="submit" value="SignUp" className='btn btn-outline rounded-sm text-white bg-orange-700' />
            </div>
            <p className='text-center mt-4 text-white'>Already Have An Account <Link className='text-orange-700 font-bold' to="/login">LogIn</Link></p>
          </form>
        </div>
      </div>
    </div>
    );
};

export default SignUp;