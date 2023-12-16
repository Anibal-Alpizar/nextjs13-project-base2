import Users from '@/components/Users'

async function fetchUsers() {
  const res = await fetch('https://reqres.in/api/users')
  const { data } = await res.json();
  console.log(data)
  return data
}

async function Homepage() {
  return <Users users={await fetchUsers()} />
}

export default Homepage