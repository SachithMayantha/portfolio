import { Github, Linkedin, FileText } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t py-8 mt-12">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <p className="text-sm text-muted-foreground">&copy; {currentYear} Sachith Fernando. All rights reserved.</p>
          <p className="text-xs text-muted-foreground mt-1">Built with passion using modern web technologies.</p>
        </div>

        {/* <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/sachith-mayantha-fernando/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/SachithMayantha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://dev.to/sachithmayantha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Blog"
          >
            <FileText className="h-5 w-5" />
          </a>
        </div> */}
      </div>
    </footer>
  )
}
