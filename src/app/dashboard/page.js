import Link from "next/link";
// import { useRouter } from "next/router";

export default function DashboardPage() {
  // const router = useRouter();
  // router.back();
  return (
    <>
      <h1>Dashboard page</h1>
      <Link href="/">
        Go back
      </Link>
    </>
  )
}