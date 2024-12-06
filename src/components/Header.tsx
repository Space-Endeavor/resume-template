import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-4xl font-bold mb-2">John Doe</h1>
            <h2 className="text-xl text-gray-400">Senior Software Engineer</h2>
            <p className="mt-4 text-gray-300 max-w-xl">
              Passionate software engineer with 5+ years of experience in building scalable web applications
              and leading development teams.
            </p>
          </div>
          <div className="flex gap-4">
            <a href="https://github.com" className="hover:text-blue-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" className="hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:john@example.com" className="hover:text-blue-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}