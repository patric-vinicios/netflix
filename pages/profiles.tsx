import useCurrentUser from "@/hooks/useCurrentUser"
import { NextPageContext } from "next"
import { getSession } from "next-auth/react"
import { useRouter } from "next/router"

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}

const Profiles = () => {
  const router = useRouter()
  const { data: user } = useCurrentUser()
  return (
    <>
      <p className="text-white text-4xl">Profiles</p>
      <p onClick={() => router.push("/")}>{user?.email}</p>
    </>
  )
}

export default Profiles
