import { signIn } from "next-auth/react"
import { signOut } from "next-auth/react"



// client side component
export function SignIn() {
    return <Button onClick={() => signIn()}>Sign In</Button>
}

export function SignOut() {
    return <button onClick={() => signOut()}>Sign Out</button>
}