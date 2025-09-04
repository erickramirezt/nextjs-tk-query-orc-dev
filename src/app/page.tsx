'use client'

import { Button } from '@/components/ui/button'
import { createUser, getUsers } from '@/server/users'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

export default function Page() {
  const query = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  })
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['users'],
      })
    },
  })

  // console.log(query.data)

  if (query.isLoading) {
    return <div>Loading...</div>
  }

  return (
    <main className='grid items-center justify-center min-h-screen gap-2'>
      <Button
        onClick={() =>
          mutation.mutate({
            id: 1,
            name: 'Test User',
          })
        }
      >
        Create User
      </Button>
      {query.data?.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </main>
  )
}
