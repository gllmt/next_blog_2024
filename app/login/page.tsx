import PageContainer from "@/components/page-container"
import PageTitle from "@/components/page-title"
import { Button } from "@/components/ui/button"
import { Github, Mail } from "lucide-react"

export default function LoginPage() {
  return (
    <PageContainer>
      <div className="p-10">
        <PageTitle title="Login or Register" />
        <div className="flex flex-col gap-4 mx-auto max-w-xs">
          <Button>
            <Github size={24} className="mr-3" />
            Signin with Github
          </Button>
          <Button>
            <Mail size={24} className="mr-3" />
            Signin with Google
          </Button>
        </div>
      </div>
    </PageContainer>
  )
}
