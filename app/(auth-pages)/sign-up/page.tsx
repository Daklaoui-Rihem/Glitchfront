import { signUpAction } from "@/app/actions"
import { FormMessage, type Message } from "@/components/form-message"
import { SubmitButton } from "@/components/submit-button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { Zap } from "lucide-react"
import { SmtpMessage } from "../smtp-message"

export default async function Signup(props: {
  searchParams: Promise<Message>
}) {
  const searchParams = await props.searchParams

  if ("message" in searchParams) {
    return (
      <div className="min-h-screen w-full bg-black flex items-center justify-center p-4 bg-gradient-to-b from-black to-zinc-900">
        <div className="w-full sm:max-w-md flex items-center justify-center gap-2 p-4">
          <FormMessage message={searchParams} />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center p-4 bg-gradient-to-b from-black to-zinc-900">
      {/* Audio wave animation background */}
      <div className="absolute inset-0 opacity-10">
        <div className="flex justify-center items-end h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="w-1 mx-[2px] bg-purple-500 rounded-t-full animate-pulse"
              style={{
                height: `${Math.random() * 40 + 10}%`,
                animationDuration: `${Math.random() * 2 + 0.5}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="w-full max-w-md bg-zinc-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-zinc-800 relative overflow-hidden z-10">
        {/* Glow effect */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-blue-600/20 rounded-full blur-3xl"></div>

        <div className="flex items-center gap-3 mb-8">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 shadow-lg">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-fuchsia-300 to-blue-400 bg-clip-text text-transparent">
            Glitch
          </h1>
        </div>

        <form className="flex-1 flex flex-col">
          <h2 className="text-2xl font-medium text-white mb-2">Sign up</h2>
          <p className="text-sm text-zinc-400 mb-8">
            Already have an account?{" "}
            <Link className="text-purple-400 hover:text-purple-300 transition-colors font-medium" href="/sign-in">
              Sign in
            </Link>
          </p>

          <div className="flex flex-col gap-5">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-zinc-300">
                Email
              </Label>
              <Input
                name="email"
                placeholder="you@example.com"
                required
                className="bg-zinc-800/50 border-zinc-700 text-white placeholder-zinc-500 focus:ring-purple-500 focus:border-purple-500 transition-all"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-zinc-300">
                Password
              </Label>
              <Input
                type="password"
                name="password"
                placeholder="Your password"
                minLength={6}
                required
                className="bg-zinc-800/50 border-zinc-700 text-white placeholder-zinc-500 focus:ring-purple-500 focus:border-purple-500 transition-all"
              />
            </div>

            <FormMessage message={searchParams} />

            <SubmitButton
              pendingText="Signing up..."
              formAction={signUpAction}
              className="mt-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-3 rounded-md transition-all shadow-lg shadow-purple-900/20 hover:shadow-purple-800/30"
            >
              Sign up
            </SubmitButton>

            <div className="mt-8 text-center">
              <span className="text-xs text-zinc-500">
                By signing up, you agree to Glitch's{" "}
                <Link href="#" className="text-zinc-400 hover:text-zinc-300">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="#" className="text-zinc-400 hover:text-zinc-300">
                  Privacy Policy
                </Link>
              </span>
            </div>
          </div>
        </form>
        <SmtpMessage />
      </div>
    </div>
  )
}
