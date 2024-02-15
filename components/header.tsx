import React from 'react'
import PageContainer from './page-container'
import { HeaderNavigation } from './header-navigation'
import Link from 'next/link'
import ProfileButton from './profile-button'

export default function Header() {
  return (
    <header className="p-4 border-b">
        <PageContainer>
          <div className="flex items-center justify-between w-full">
            <div>
                {/* menu responsive */}
                <Link className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-emerald-500" href="/">NextBlog</Link>
                {/* <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-emerald-500">NextBlog</h1> */}
            </div>
            {/* navigation */}
            <HeaderNavigation />
            {/* buttons */}
            <div className="flex items-center">
              <ProfileButton />
            </div>
          </div>
        </PageContainer>
    </header>
  )
}
