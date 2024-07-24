import { handleGoogleSignIn } from '@/actions/google-auth';

export function SignIn() {
    return (
        <button
        onClick={async () => {
            await handleGoogleSignIn();
        }}
        className="bg-blue-600 text-white p-2 rounded-lg mx-1"
        >
        Sign in with Google
        </button>
    );
}