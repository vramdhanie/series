import { signOut } from '@/auth';
import Link from 'next/link'


export default function Login() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Your Dashboard

      <Link href="/">Home</Link>
      <form action={ async () => {
            "use server"
            await signOut({ redirectTo: "/" })
        }}>
            <button >Sign Out</button>
        </form>
    </main>
  );
}
