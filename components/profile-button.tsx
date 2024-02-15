import Link from "next/link";
import { Button } from "./ui/button";

export default function ProfileButton() {

  return (
    <Link href="/login">
        <Button>Login</Button>
    </Link>
  )
}
