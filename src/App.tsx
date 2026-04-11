import "./App.css";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import { ExternalLink, Github, Mail } from "lucide-react";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="portfolio-app min-h-screen bg-background text-foreground antialiased">
        <a
          href="#main"
          className="focus:bg-background focus:text-foreground sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:px-3 focus:py-2 focus:shadow"
        >
          Skip to content
        </a>

        <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/70">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="relative flex h-14 items-center justify-between md:h-16">
              <a
                href="https://solarisdev.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg"
              >
                <img
                  src="/portfolio-avatar.svg"
                  className="portfolio-logo-sm h-9 w-9 shrink-0 rounded-full object-cover shadow-sm ring-1 ring-border/60 transition group-hover:ring-border"
                  alt="Solaris logo"
                />
                <span className="text-sm font-semibold tracking-tight sm:text-base">
                  Jae F.
                </span>
              </a>
              <nav
                className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-8 text-sm font-medium text-muted-foreground md:flex"
                aria-label="Page"
              >
                <a
                  href="#about"
                  className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
                >
                  About
                </a>
                <a
                  href="#projects"
                  className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
                >
                  Contact
                </a>
              </nav>
              <ModeToggle />
            </div>
            <nav
              className="flex justify-center gap-6 border-t border-border/50 py-2.5 text-sm font-medium text-muted-foreground md:hidden"
              aria-label="Page"
            >
              <a href="#about" className="transition-colors hover:text-foreground">
                About
              </a>
              <a href="#projects" className="transition-colors hover:text-foreground">
                Projects
              </a>
              <a href="#contact" className="transition-colors hover:text-foreground">
                Contact
              </a>
            </nav>
          </div>
        </header>

        <main id="main">
          <section
            className="portfolio-hero relative border-b border-border/40 overflow-hidden"
            aria-labelledby="hero-heading"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,oklch(0.55_0.18_250/0.12),transparent)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,oklch(0.55_0.15_250/0.18),transparent)]" />
            <div className="relative mx-auto grid max-w-5xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-14 md:py-20 lg:gap-16 lg:py-24">
              <div className="order-2 flex flex-col gap-4 text-center md:order-1 md:text-left">
                <div className="space-y-2">
                  <h1
                    id="hero-heading"
                    className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
                  >
                    Jae F.
                  </h1>
                  <p className="text-xl font-medium text-primary sm:text-2xl">
                    Solaris
                  </p>
                </div>
                <p className="mx-auto max-w-md text-lg text-muted-foreground italic md:mx-0 md:max-w-lg md:text-xl md:not-italic">
                  Creating for a better future
                </p>
              </div>
              <div className="order-1 flex justify-center md:order-2 md:justify-end">
                <a
                  href="https://solarisdev.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-full"
                >
                  <img
                    src="/portfolio-avatar.svg"
                    className="portfolio-logo-lg h-28 w-28 rounded-full object-cover shadow-lg ring-2 ring-border/70 transition duration-300 group-hover:-translate-y-0.5 group-hover:shadow-xl sm:h-36 sm:w-36 md:h-40 md:w-40"
                    alt="Solaris logo"
                  />
                </a>
              </div>
            </div>
          </section>

          <section
            id="about"
            className="scroll-mt-[5.5rem] border-b border-border/40 bg-muted/20 py-14 sm:scroll-mt-24 sm:px-6 sm:py-20"
            aria-labelledby="about-heading"
          >
            <div className="mx-auto max-w-3xl px-4 sm:px-0">
              <h2
                id="about-heading"
                className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground"
              >
                About
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                <p>
                  I'm a Digital Solutions Engineer with a passion for creating
                  clean and efficient solutions. I focus on building
                  user-centered applications that solve real-world problems for
                  real people.
                </p>
                <p>
                  When not coding, I enjoy exploring new technologies and
                  contributing to open-source projects.
                </p>
              </div>
            </div>
          </section>

          <section
            id="projects"
            className="scroll-mt-[5.5rem] py-14 sm:scroll-mt-24 sm:px-6 sm:py-20"
            aria-labelledby="projects-heading"
          >
            <div className="mx-auto max-w-3xl px-4 sm:px-0">
              <h2
                id="projects-heading"
                className="mb-8 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground"
              >
                Projects
              </h2>
              <Card className="overflow-hidden border-border/80 shadow-sm">
                <CardContent className="p-0">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem
                      value="stgma"
                      className="border-border/80 px-4 sm:px-6"
                    >
                      <AccordionTrigger className="py-5 text-left hover:no-underline [&[data-state=open]]:text-foreground">
                        <div className="flex flex-wrap items-center gap-2 pr-2">
                          <span className="font-semibold">STGMA Apparel</span>
                          <Badge
                            variant="secondary"
                            className="border-emerald-500/25 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300"
                          >
                            Active
                          </Badge>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pb-6 text-muted-foreground">
                        <div className="space-y-5 border-t border-border/50 pt-4">
                          <p className="leading-relaxed">
                            A company designed to spread resources and awareness
                            for mental health issues, as well as sell clothing to
                            raise money to donate to non-profit organizations that
                            support mental health initiatives.
                          </p>
                          <a
                            href="https://stgmaapparel.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto"
                          >
                            Live Website
                            <ExternalLink className="h-4 w-4 opacity-80" aria-hidden />
                          </a>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                      value="bennu"
                      className="border-border/80 px-4 sm:px-6"
                    >
                      <AccordionTrigger className="py-5 text-left hover:no-underline [&[data-state=open]]:text-foreground">
                        <div className="flex flex-wrap items-center gap-2 pr-2">
                          <span className="font-semibold">bennu</span>
                          <Badge variant="secondary" className="bg-muted text-muted-foreground">
                            Retired
                          </Badge>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pb-6 text-muted-foreground">
                        <div className="space-y-5 border-t border-border/50 pt-4">
                          <p className="leading-relaxed">
                            An AI-powered task management application designed to
                            help users organize and track their tasks and projects
                            efficiently.
                          </p>
                          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                            <a
                              href="https://bennutasks.app"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex h-10 flex-1 items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:min-w-[10rem] sm:flex-initial"
                            >
                              Live Website
                              <ExternalLink className="h-4 w-4 opacity-80" aria-hidden />
                            </a>
                            <a
                              href="https://github.com/JaellyBean/bennu"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex h-10 flex-1 items-center justify-center gap-2 rounded-md border border-border bg-background px-4 text-sm font-medium shadow-sm transition hover:bg-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:min-w-[10rem] sm:flex-initial"
                            >
                              GitHub Code
                              <Github className="h-4 w-4 opacity-80" aria-hidden />
                            </a>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </section>

          <section
            id="contact"
            className="scroll-mt-[5.5rem] border-t border-border/40 bg-muted/20 py-14 sm:scroll-mt-24 sm:px-6 sm:py-20"
            aria-labelledby="contact-heading"
          >
            <div className="mx-auto max-w-3xl px-4 sm:px-0">
              <h2
                id="contact-heading"
                className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground"
              >
                Contact
              </h2>
              <Card className="border-border/80 shadow-sm">
                <CardContent className="space-y-8 p-6 sm:p-8">
                  <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                    Reach out to me via email or check out my GitHub! You can
                    also support me on Ko-fi,
                    <br />
                    it helps me keep the lights on and the machines running!
                  </p>

                  <ul className="divide-y divide-border/80 rounded-lg border border-border/80 bg-background/50">
                    <li className="flex flex-col gap-1 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                      <span className="text-sm font-medium text-muted-foreground">
                        Email
                      </span>
                      <a
                        href="mailto:madebysolaris@proton.me"
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
                      >
                        <Mail className="h-4 w-4 shrink-0 opacity-70" aria-hidden />
                        madebysolaris@proton.me
                      </a>
                    </li>
                    <li className="flex flex-col gap-1 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                      <span className="text-sm font-medium text-muted-foreground">
                        GitHub
                      </span>
                      <a
                        href="https://github.com/JaellyBean"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
                      >
                        <Github className="h-4 w-4 shrink-0 opacity-70" aria-hidden />
                        github.com/JaellyBean
                      </a>
                    </li>
                  </ul>

                  <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <a
                      href="https://ko-fi.com/solarisdev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:min-w-[12rem] sm:flex-initial"
                    >
                      Support Me on Ko-fi!
                      <ExternalLink className="h-4 w-4 opacity-80" aria-hidden />
                    </a>
                    <a
                      href="https://madebysolaris.gumroad.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-md border border-border bg-background px-4 text-sm font-medium shadow-sm transition hover:bg-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:min-w-[12rem] sm:flex-initial"
                    >
                      Check out my Gumroad store!
                      <ExternalLink className="h-4 w-4 opacity-80" aria-hidden />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
