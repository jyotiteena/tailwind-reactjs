import { useState } from "react"
import { useForm } from "react-hook-form"

const HookForm = () => {

    const { register, handleSubmit, reset,formState:{errors} } = useForm()

    function signup(data) {
        console.log(data)
        alert("registration submitted")
        reset()
    }
    return (
        <>
            <form className="max-w-sm mx-auto" onSubmit={handleSubmit(signup)}>
                <div className="mb-5">
                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>

                    <input type="text" id="email"
                        {...register('email', {
                            required: {
                                value:true,
                                message:"Please Enter Email ID"
                            },
                            minLength:{
                                value:2,
                                message:"atleast should be 2 character"
                            },
                            maxLength:{
                                value:20,
                                message:"atmost should be 20 character"
                            },
                            pattern:{
                                value:/[A-Za-z]/,
                                message:"only string"
                            }
                        })}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" />
                        <p className="text-red-500">{errors?.email?.message}</p>
                </div>
                <div className="mb-5">
                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input
                        {...register('password')}
                        type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div className="mb-5">
                    <label for="mobile" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your phone number</label>
                    <input
                        {...register('mobile',{
                            required:{
                                value:true,
                                message:"Please Enter mobile"
                            },
                            min:{
                                value:10,
                                message:"minimum 10 number"
                            },
                            max:{
                                value:100,
                                message:"max 100 number"
                            }
                        })}
                        type="number" id="mobile" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        <p className="text-red-500">{errors?.mobile?.message}</p>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>

        </>
    )
}

export default HookForm