import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet-async";


const Register = () => {
    const { signUpUser } = useContext(authContext);
    const [error, setError] = useState('')

    const handleSignUp = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        // console.log(name, email, photo, password)

        setError('')
        if (password.length < 6) {
            return setError('must be length 6 character');
        }
        if (!/[A-Z]/.test(password)) {
            return setError('Must provide one uppercase')
        }
        if (!/[a-z]/.test(password)) {
            return setError('Must provide one lowercase')
        }


        signUpUser(email, password)
            .then(result => {
                console.log(result.user)
                updateProfile(result.user , {
                    displayName : name,
                    photoURL : photo
                })
                .then(()=>{
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: 'You are successfully sign up ',
                        showConfirmButton: false,
                        timer: 1500
                    });
                })
                .catch(error=>{
                    console.log(error.message)
                })
               
            })
            .catch(error => {
                console.log(error.message)
                const err = error.message;
                const errr = err.split('/')[1].replace(')', '');
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: errr,
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    }



    return (
        <div>
             <Helmet>
                <title>ArtistryAvenue | Register</title>
            </Helmet>
            <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800 mx-auto shadow-2xl">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Please Register</h1>
                </div>

                <form onSubmit={handleSignUp} noValidate="" action="" className="space-y-12">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm">Your Name</label>
                            <input required type="text" name="name" id="name" placeholder="Your name" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>

                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                            <input required type="email" name="email" id="email" placeholder="Your email" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>
                        <div>
                            <label htmlFor="photo" className="block mb-2 text-sm">PhotoURL</label>
                            <input required type="text" name="photo" id="photo" placeholder="Your photoURL" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                        </div>

                        <div>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="password" className="text-sm">Password</label>
                            </div>
                            <input type="password" name="password" id="password" placeholder="password" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                            <p className="text-red-600">{error}</p>
                        </div>

                    </div>


                    <div className="space-y-2">
                        <div>
                            <button className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50 btn">Register</button>
                        </div>
                        <p className="px-6 text-sm text-center dark:text-gray-600">Have an account yet?
                            <Link to='/login' rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-600">Login</Link>.
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;