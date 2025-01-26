import { useState } from "react";
import {Link} from "react-router-dom";
import RadioButton from "../components/RadioButton";
import InputField from "../components/InputField";

const SignUpPage = () => {
    const [signUpData, setSignUpData] = useState({
        name: "",
        username: "",
        password: "",
        gender: "",
    });

    const handleChange = (e) => {
        const{name, value, type} = e.target;

        if (type === "radio") {
            setSignUpData((prevData) => ({
                ...prevData,
                gender: value,
            }));
        } else {
            setSignUpData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(signUpData);
    }

    return (
    <div className='h-screen flex justify-center items-center'>
        <div className='flex rounded-lg overflow-hidden z-50 bg-gray-300'>
            <div className='w-full bg-gray-100 min-w-80 sm:min-w-96 flex items-center justify-center'>
                <div className='max-w-md w-full p-6'>
                    <h1 className='text-3xl font-semibold mb-6 text-black text-center'>Sign Up</h1>
                    <h1 className='text-sm font-semibold mb-6 text-gray-500 text-center'>
                        Join to keep track of your expenses
                    </h1>
                    <form className='space-y-4' onSubmit={handleSubmit}>
                        <InputField 
                        
                        />
                        <InputField 
                        
                        />
                        <InputField 
                        
                        />
                        <InputField 
                        
                        />
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
};
export default SignUpPage;