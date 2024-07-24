"use client";

import { useRouter } from "next/navigation";

export default function RegisterForm() {
    const router = useRouter();

    const handleGoogleSignIn = () => {
        router.push("/api/auth/signin");
    };
    return (
        <div className="max-w-md lg:max-w-lg w-full text-center h-fit  mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Create an Account</h2>
        <form className="w-full max-w-[300px] m-auto text-left py-4">
            <div className="mb-4 w-full max-w-[300px]">
                <label className="block text-gray-700">Email</label>
                <input type="email" name="email" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input type="password" name="password" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Confirm Password</label>
                <input type="password" name="password_confirmation" required className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Sign Up</button>
            <div className="mt-4 text-center">
            <p className="text-gray-700">Or sign up with</p>
            <div className="flex justify-center mt-2">
                <button type="button" onClick={() => handleGoogleSignIn()} className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <i className="fab fa-google"> Sign in with Google</i>
                </button>
            </div>
        </div>
    </form>
    <p className="mt-4 text-center text-gray-700">Already have an account? <a href="/api/auth/signin" className="text-blue-500 hover:underline">Log In</a></p>
</div>
    )
}