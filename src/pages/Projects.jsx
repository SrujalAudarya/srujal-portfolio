import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ProjectCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const projects = [
  {
    title: "WhatsApp Clone",
    description:
      "A real-time chat application inspired by WhatsApp, built using Firebase for seamless messaging experience.",
    features: [
      "Real-time messaging",
      "Email/Password, Google & Facebook authentication",
      "Profile management & status updates",
    ],
    techStack: ["Android", "Firebase", "Java", "Material Design"],
    githubUrl: "https://github.com/SrujalAudarya/WhatsApp-Clone",
  },
  {
    title: "PDF Reader App",
    description:
      "An Android application to open and read PDF files smoothly from local storage with intuitive navigation.",
    features: [
      "File picker integration",
      "Smooth PDF rendering",
      "Bookmark support",
    ],
    techStack: ["Android", "Java", "PDFView", "Material UI"],
    githubUrl: "https://github.com/SrujalAudarya",
  },
  {
    title: "Quiz Admin Panel App",
    description:
      "An admin panel application to manage quiz questions dynamically with image upload support.",
    features: [
      "Add/Edit/Delete questions",
      "Image upload support via Imgur",
      "Firebase real-time sync",
    ],
    techStack: ["Android", "Firebase", "Imgur API", "Java"],
    githubUrl: "https://github.com/SrujalAudarya",
  },
];

const ProjectsPage = () => {
  return (
    <>
      <Helmet>
        <title>Projects | Srujal Audarya</title>
        <meta
          name="description"
          content="Explore my portfolio of Android and Web development projects including WhatsApp Clone, PDF Reader, Quiz Admin Panel, and more."
        />
        <link rel="canonical" href="https://srujalaudarya.dev/projects" />
      </Helmet>

      <main className="relative min-h-screen bg-background">
        <Navbar />

        <section className="relative py-20 md:py-32 pt-32">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />

          <div className="section-container relative z-10">
            {/* Back Button */}
            <Button variant="ghost" size="sm" asChild className="mb-8">
              <Link to="/" className="inline-flex items-center gap-2">
                <ArrowLeft size={16} />
                Back to Home
              </Link>
            </Button>

            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-mono text-foreground mb-4">
                My Projects
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A collection of my work showcasing Android and Web development skills
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>

            {/* GitHub CTA */}
            <div className="mt-12 text-center">
              <a
                href="https://github.com/SrujalAudarya"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-300 font-mono"
              >
                <span>View more projects on GitHub</span>
                <span className="text-xl">→</span>
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default ProjectsPage;
