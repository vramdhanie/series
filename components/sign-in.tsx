import { signIn } from '@/auth'

export function SignIn() {
    return (
        <form action={ async () => {
            "use server"
            await signIn("github")
        }}>
            <button >Sign In With GitHub</button>
        </form>
    )
}