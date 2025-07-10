import React from "react"; import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Portfolio() { return ( <div className="min-h-screen bg-gray-100 text-gray-800 p-6"> {/* Header */} <header className="text-center mb-12"> <motion.h1 className="text-4xl font-bold mb-2" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} > Vikas Ahire </motion.h1> <p className="text-lg">React JS Developer | 7+ Years Experience | Pune, India</p> <div className="mt-4"> <Button asChild> <a href="/Vikas_AhireReactJs_7yr.pdf" download> 📄 Download Resume (PDF) </a> </Button> </div> </header>

{/* Projects Section */}
  <section className="mb-16">
    <h2 className="text-2xl font-semibold mb-4">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[
        {
          title: "Pocket Geek Auto",
          stack: "React + Redux + OKTA SSO",
          description: "Single sign-on and map integration using React ecosystem.",
          link: "#"
        },
        {
          title: "HSBC MarkTech Toolkit",
          stack: "React (Class-based) + Bootstrap",
          description: "Enterprise toolkit built with reusable components and code review processes.",
          link: "#"
        },
        {
          title: "Capital Business Solution",
          stack: "ASP.NET MVC + AngularJS",
          description: "Procurement system for finance using full stack web technologies.",
          link: "#"
        }
      ].map((project, idx) => (
        <Card key={idx} className="hover:shadow-lg">
          <CardContent className="p-4">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-500 mb-1">{project.stack}</p>
            <p className="text-sm mb-2">{project.description}</p>
            <Button asChild>
              <a href={project.link} target="_blank">View Project</a>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  </section>

  {/* Experience Section */}
  <section className="mb-16">
    <h2 className="text-2xl font-semibold mb-4">Experience</h2>
    <ul className="space-y-4">
      <li>
        <strong>Wipro India</strong> (2023 - Present) – Thames Water, HSBC MarkTech Toolkit
      </li>
      <li>
        <strong>Infosys India</strong> (2020 - 2023) – Pocket Geek Auto, Medtronic, TAKEDA
      </li>
      <li>
        <strong>Optiquall Solutions</strong> (2018 - 2020) – Capital Business Solutions
      </li>
    </ul>
  </section>

  {/* Contact Section */}
  <footer className="text-center border-t pt-6">
    <p>📧 ahire.vicky@gmail.com</p>
    <p>📍 Pune, Maharashtra</p>
    <p>
      🔗 <a href="https://github.com/vikasahire" className="text-blue-600">GitHub</a>
    </p>
  </footer>
</div>

); }

