import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import whilteLogo from '../public/assets/white_no background.png';

import instagramIcon from '../public/icons/instagram.svg';
import facebookIcon from '../public/icons/facebook.svg';
import tiktokIcon from '../public/icons/tiktok-icon.svg';

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
    { label: 'About Us', href: '#mission-statement' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'For Brands', href: '/brands' },
    { label: 'For Users', href: '/users' },
  ];

  const legalLinks = [
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Cookie Policy', href: '/cookies' },
  ];

  const contactInfo = [
    {
      label: '1111 B S Governors Ave STE 28482, Dover, Delaware 19904',
      href: '#',
    },
    { label: 'info@trukonnect.club', href: 'mailto:info@trukonnect.club' },
    { label: '+233 55 726 0016', href: 'tel:+233557260016' },
  ];

  return (
    <footer className="bg-black pt-20 pb-8">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Image
                alt="Trukonnect"
                src={whilteLogo}
                height={100}
                width={150}
                className="h-12 w-20 object-contain"
              />
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
              href="https://www.instagram.com/trukonnect.club/"
              className="text-white/70 hover:text-white transition-colors duration-200 bg-white/80 hover:bg-white w-8 h-8 p-1 rounded-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={instagramIcon}
                alt="Twitter"
                height={100}
                width={100}
                className="object-contain"
              />
            </Link>
            <Link
              href="https://web.facebook.com/profile.php?id=61573895075653"
              className="text-white/70 hover:text-white transition-colors duration-200 bg-white/80 hover:bg-white w-8 h-8 p-1 rounded-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={facebookIcon}
                alt="Twitter"
                height={100}
                width={100}
                className="object-contain"
              />
            </Link>
            <Link
              href="https://www.tiktok.com/@trukonnect.club"
              className="text-white/70 hover:text-white transition-colors duration-200 bg-white/80 hover:bg-white w-8 h-8 p-2 rounded-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={tiktokIcon}
                alt="Twitter"
                height={100}
                width={100}
                className="object-contain"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
