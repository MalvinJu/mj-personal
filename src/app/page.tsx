import Image from 'next/image'
import { Inter } from 'next/font/google'
import { LinkGroup } from '@/components/linkgroup'
import me from './img/me.jpg'
import React from 'react'
import Link from 'next/link'
import { IconLink } from '@/models'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const links: IconLink[] = [
    {
      name: "follow me on linkedin",
      url: "https://www.linkedin.com/in/malvin-j-80774511a/",
      icon: "linkedin"
    },
    {
      name: "see my github",
      url: "https://github.com/MalvinJu",
      icon: "github"
    },
    {
      name: "keep in touch",
      url: "mailto:malvinju@gmail.com",
      icon: "mail"
    }
  ]
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">Malvin</h1>
      <h1 className="font-bold text-3xl font-serif ml-8">Juanda</h1>
      <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
        <Image
          alt="Hi, it's me Malvin. Nice to meet you!"
          className="rounded-full"
          src={me}
          placeholder="blur"
          width={100}
          priority
        />
        <p className="mt-8 max-w-[480px] md:mt-0 ml-0 md:ml-6 space-y-2 text-neutral-800 dark:text-neutral-200">
          Hi, I'm Malvin Juanda. A
          <Link href="/about">
            <button className="rounded-lg px-2 py-0.5 ml-1 my-1 bg-gray-200 dark:bg-zinc-900 hover:bg-gray-600 hover:text-neutral-100 duration-300">
              fullstack software engineer
            </button>
          </Link>, part-time designer, and 
          <Link href="/film">
            <button className="rounded-lg px-2 py-0.5 mx-1 my-1 bg-gray-200 dark:bg-zinc-900 hover:bg-gray-600 hover:text-neutral-100 duration-300">
              amateur 35mm photography
            </button>
          </Link>
          capturing the moment.
        </p>
      </div>
      <hr
        className="my-8 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" 
      />
      <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
        With a solid background of 5 years in full-stack web development, I have my expertise in Vue, Angular, .Net, and Node.js, bringing a touch of elegance to every project.
        At my current workplace, I am engaged in an IT transformation project where I am involved in the migration from a monolithic architecture to a microservices architecture. 
        Additionally, I have implemented a generic service-repository pattern and designed a middleware for multi-tenant aarchitecture.
      </p>
      <LinkGroup links={links}/>
    </section>
  )
}
