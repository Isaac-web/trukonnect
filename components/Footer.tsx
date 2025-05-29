import React from 'react';
import Link from 'next/link';

const FooterColumn = ({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) => (
  <div>
    <h3 className="text-lg font-medium mb-6">{title}</h3>
    <ul className="space-y-4">
      {items.map((item, index) => (
        <li key={index}>
          <Link
            href={item.href}
            className="text-white/70 hover:text-white transition-colors duration-200"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const quickLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'For Brands', href: '/brands' },
    { label: 'For Users', href: '/users' },
  ];

  const legalLinks = [
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Cookie Policy', href: '/cookies' },
  ];

  const contactInfo = [
    { label: 'Accra, Ghana', href: '#' },
    { label: 'info@hqapp.com', href: 'mailto:info@hqapp.com' },
    { label: '+233 20 000 0000', href: 'tel:+233200000000' },
  ];

  return (
    <footer className="bg-black pt-20 pb-8">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl">✈️</span>
              <span className="text-2xl font-bold">TruKonnect</span>
            </div>
            <p className="text-white/70 leading-relaxed">
              Connecting brands with authentic Ghanaian social media users.
            </p>
          </div>

          <FooterColumn title="Quick Links" items={quickLinks} />
          <FooterColumn title="Legal" items={legalLinks} />
          <FooterColumn title="Contact" items={contactInfo} />
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/70 text-sm">
            © 2025 Trukonnect. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="https://instagram.com"
              className="text-white/70 hover:text-white transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              📸
            </Link>
            <Link
              href="https://facebook.com"
              className="text-white/70 hover:text-white transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              📱
            </Link>
            <Link
              href="https://twitter.com"
              className="text-white/70 hover:text-white transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              🐦
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
