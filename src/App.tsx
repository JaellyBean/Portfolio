import "./App.css";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <>
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-900 relative py-5">
          <div className="absolute top-4 right-4">
            <ModeToggle />
          </div>
          <a href="https://solarisdev.vercel.app" target="_blank">
            <img
              src="/portfolio-avatar.svg"
              className="logo"
              alt="Solaris logo"
            />
          </a>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100">
            Jae F.
          </h1>
          <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">
            Solaris Rex
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 italic">
            Creating for a better future
          </p>
        </div>

        {/* Content Section */}
        <div className="min-h-screen bg-gray-50 dark:bg-gray-800 p-4 md:p-8">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* About Card */}
            <Card className="w-full">
              <CardHeader>
                <CardTitle>About</CardTitle>
              </CardHeader>
              <CardContent>
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
              </CardContent>
            </Card>

            {/* Projects Card */}
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="stgma">
                    <AccordionTrigger className="text-left">
                      <div className="flex items-center gap-2">
                        <span>STGMA Apparel</span>
                        <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-emerald-100 text-emerald-800 rounded-full dark:bg-emerald-900 dark:text-emerald-200 no-underline">
                          Active
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <p>
                          A company designed to spread resources and awareness
                          for mental health issues, as well as sell clothing to
                          raise money to donate to non-profit organizations that
                          support mental health initiatives.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-2">
                          <a
                            href="https://stgma.online"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors"
                          >
                            Live Website
                          </a>
                          <a
                            href="https://github.com/JaellyBean/STGMA"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-4 py-2 bg-slate-700 text-white rounded-md hover:bg-slate-800 transition-colors"
                          >
                            GitHub Code
                          </a>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="bennu">
                    <AccordionTrigger className="text-left">
                      <div className="flex items-center gap-2">
                        <span>bennu</span>
                        <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-emerald-100 text-emerald-800 rounded-full dark:bg-emerald-900 dark:text-emerald-200 no-underline">
                          Active
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <p>
                          An AI-powered task management application designed to
                          help users organize and track their tasks and projects
                          efficiently.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-2">
                          <a
                            href="https://bennutasks.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors"
                          >
                            Live Website
                          </a>
                          <a
                            href="https://github.com/JaellyBean/bennu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-4 py-2 bg-slate-700 text-white rounded-md hover:bg-slate-800 transition-colors"
                          >
                            GitHub Code
                          </a>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            {/* Contact Card */}
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Contact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Contact Information */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-600 dark:text-gray-400">
                        Email:
                      </span>
                      <a
                        href="mailto:your.email@example.com"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        solarisrex@pm.me
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-600 dark:text-gray-400">
                        GitHub:
                      </span>
                      <a
                        href="https://github.com/JaellyBean"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        github.com/JaellyBean
                      </a>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2">
                    <a
                      href="https://ko-fi.com/solarisdev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors"
                    >
                      Support Me!
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
