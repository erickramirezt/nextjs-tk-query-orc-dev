'use server'

import { cookies } from 'next/headers'

export interface User {
  id: number
  name: string
}

export async function getUsers(): Promise<User[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  return res.json() as Promise<User[]>
}

export async function createUser(user: User) {
  const cookiesStore = await cookies()

  const x = cookiesStore.get('x')

  console.log(x)
  console.log(user)
}
