import { Link } from "react-router-dom";

const footerLinks = [
  {
    heading: "Products",
    links: [
      { label: "Learning", href: "/learning" },
      { label: "Inference", href: "/inference" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Research", href: "/research" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "How It Works", href: "/how-it-works" },
      { label: "Developers", href: "/developers" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-border/40 py-16 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link
              to="/"
              className="text-lg font-medium text-foreground tracking-tight"
            >
              Altair Axis
            </Link>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed max-w-xs">
              AI tools that run locally — powered by a distributed inference
              network.
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.heading}>
              <h4 className="text-sm font-medium text-foreground mb-4">
                {group.heading}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-6 border-t border-border/40 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Altair Axis. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
