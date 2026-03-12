'use client';

import { Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from '@/components/ui/dialog';
export default function Footer() {
  return (
    <footer className="py-8 sm:py-12 px-4 sm:px-6 bg-slate-900 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent px-4">
            Trained by trials, driven by passion. <br className="hidden sm:block" />Let&apos;s Build Something Amazing Together.
          </h3>
          <p className="text-sm sm:text-base text-slate-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            I&apos;m always excited to work on innovative projects and collaborate with talented teams. Feel free to reach
            out if you&apos;d like to discuss opportunities or just chat about tech!
          </p>

          <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-4 justify-center mb-6 sm:mb-8 px-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="default"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-sm sm:text-base"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                  Get In Touch
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md mx-4">
                <DialogHeader>
                  <DialogTitle>Contact Me</DialogTitle>
                  <DialogDescription className="mt-2 text-sm sm:text-base lg:text-lg font-medium break-all">
                    📧 delrosario.gladwinferdz.infante@gmail.com
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>

            <Button
              variant="outline"
              size="default"
              className="bg-transparent border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-white text-sm sm:text-base"
              onClick={() => window.open('https://github.com/gfdelrosario12', '_blank')}
            >
              <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
              GitHub
            </Button>

            <Button
              variant="outline"
              size="default"
              className="bg-transparent border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-white text-sm sm:text-base"
              onClick={() => window.open('https://linkedin.com/in/gladwindr', '_blank')}
            >
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
              LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
