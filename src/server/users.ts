'use server'

export interface User {
  id: number
  name: string
}

export async function getUsers(): Promise<User[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  return res.json() as Promise<User[]>
}

export async function createUser(user: User) {
  console.log(user)
}
