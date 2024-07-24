import RegisterForm from "@/components/(account)/register";
import Link from "next/link";
export default function Register() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-screen bg-gradient-to-b from-Tertiary to-DarkBlue via-Primary to-Tertiary"> 
            <RegisterForm />
</div>
    );
}