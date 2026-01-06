import { Mail, Github, Linkedin, Code2 } from "lucide-react";
import GlassCard from "./GlassCard";
import SectionTitle from "./SectionTitle";
import ContactForm from "./ContactForm";

const contactLinks = [
  {
    name: "GitHub",
    url: "https://github.com/SrujalAudarya",
    icon: Github,
    username: "@SrujalAudarya",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/srujal-audarya-172b59248/",
    icon: Linkedin,
    username: "Srujal Audarya",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/SrujalAudarya/",
    icon: Code2,
    username: "@SrujalAudarya",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 md:py-40">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="section-container relative z-10">
        <SectionTitle
          title="Get In Touch"
          subtitle="Let's connect and create something amazing"
        />

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left side - Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Right side - Info & Social Links */}
            <div>
              <GlassCard className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="text-primary" size={24} />
                  <h3 className="text-xl font-mono font-semibold text-foreground">
                    Let's Collaborate
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  Feel free to reach out for collaborations, opportunities, or just to say hello. 
                  I'm always open to discussing new projects and creative ideas.
                </p>
              </GlassCard>

              {/* Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
                {contactLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <GlassCard className="flex items-center gap-4 py-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-primary/10 border border-primary/20 group-hover:border-primary/50 transition-all duration-300">
                        <link.icon size={20} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-mono font-semibold text-foreground text-sm">
                          {link.name}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {link.username}
                        </p>
                      </div>
                    </GlassCard>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
