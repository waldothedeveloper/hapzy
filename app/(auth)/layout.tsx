import React from 'react'

function AuthLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <div className="absolute top-0 z-[-2] flex h-screen w-full items-center justify-center overflow-hidden bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]">{children}</div>
  )
}

export default AuthLayout