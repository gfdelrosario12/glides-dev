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
} from '@/components/ui/dialog'; // ✅ Use your shadcn/ui dialog

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-slate-900 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Trained by trials, driven by passion. <br />Let's Build Something Amazing Together.
          </h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            I'm always excited to work on innovative projects and collaborate with talented teams. Feel free to reach
            out if you'd like to discuss opportunities or just chat about tech!
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            {/* Contact Dialog */}
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get In Touch
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Contact Me</DialogTitle>
                  <DialogDescription className="mt-2 text-lg font-medium">
                    📧 delrosario.gladwinferdz.infante@gmail.com
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>

            {/* GitHub Button */}
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-white"
              onClick={() => window.open('https://github.com/gfdelrosario12', '_blank')}
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>

            {/* LinkedIn Button */}
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-white"
              onClick={() => window.open('https://linkedin.com/in/gladwindr', '_blank')}
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
