import './App.css'
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Talent IQ</h1>

        <SignedOut>
          <div className="auth-buttons">
            <SignInButton mode="modal">
              <button type="button">Sign In</button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button type="button">Sign Up</button>
            </SignUpButton>
          </div>
        </SignedOut>

        <SignedIn>
          <p>You are signed in.</p>
          <UserButton />
        </SignedIn>
      </header>
    </div>
  )
}

export default App
