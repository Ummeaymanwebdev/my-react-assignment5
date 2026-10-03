const productLinks = ["Home", "Technologies", "Projects"];
const companyLinks = ["About", "Contact", "Careers"];
const legalLinks = ["Privacy Policy", "Terms of Service"];
const socialLinks = ["GitHub", "Twitter", "LinkedIn"];

type LinkGroupProps = {
  title: string;
  links: string[];
};

const LinkGroup = ({ title, links }: LinkGroupProps) => (
  <div>
    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900">
      {title}
    </h4>
    <ul className="mt-4 space-y-3">
      {links.map((link) => (
        <li key={link}>
          <span className="cursor-pointer text-sm text-slate-500 transition hover:text-pink-600">
      {link}
          </span>
       </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="border-t border-slate-100 bg-white px-6 pt-12 pb-6 md:px-16">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">

        {/* Brand */}

        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-purple-600 to-pink-500 text-xs font-bold text-white">
              DS
            </span>
            <span className="text-lg font-bold text-slate-900">
              Dev <span className="text-pink-600">Stack</span>
            </span>
          </div>

          <p className="mt-4 max-w-xs text-sm leading-6 text-slate-500">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>

          <div className="mt-5 flex gap-4">
            {socialLinks.map((social) => (
              <span
                key={social}
                className="cursor-pointer text-sm font-medium text-slate-700 transition hover:text-pink-600"
              >
               {social}
              </span>
            ))}
          </div>
        </div>

        {/* Link */}

        <LinkGroup title="Product" links={productLinks} />
        <LinkGroup title="Company" links={companyLinks} />
        <LinkGroup title="Legal" links={legalLinks} />
        </div>
 
      {/* bar */}

      <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-slate-100 pt-6 sm:flex-row">
        <p className="text-sm text-slate-400">
          © 2026 Dev Stack. All rights reserved.
        </p>
         <div className="flex gap-6">
          <span className="cursor-pointer text-sm text-slate-400 transition hover:text-pink-600">
            Privacy
          </span>
          <span className="cursor-pointer text-sm text-slate-400 transition hover:text-pink-600">
            Terms
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;