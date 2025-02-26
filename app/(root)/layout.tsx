import StreamVideoProvider from '@/Providers/StreamClientProvider'
import { Metadata } from 'next';
import React, { ReactNode } from 'react'
export const metadata: Metadata = {
  title: "YOOM",
  description: "VideO Calling App",
  icons:{
    icon: "/icons/logo.svg",
    
  }
};

const RootLayout = ({children}:{children:ReactNode}) => {
  return (
    <main>
       
      <StreamVideoProvider>
      {children}
      </StreamVideoProvider>
    </main>
  )
}

export default RootLayout