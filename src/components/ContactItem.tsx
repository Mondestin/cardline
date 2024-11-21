import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ContactItemProps {
  icon: LucideIcon;
  text: string;
  subtext: string;
  bgColor: string;
  iconColor: string;
  href?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
}

export function ContactItem({
  icon: Icon,
  text,
  subtext,
  bgColor,
  iconColor,
  href,
  onClick,
  target,
  rel,
}: ContactItemProps) {
  const content = (
    <div className="flex items-center space-x-5 mt-[15px] cursor-pointer hover:opacity-80 transition-opacity">
      <div className={`w-12 h-12 rounded-full ${bgColor} flex items-center justify-center`}>
        <Icon className={`w-6 h-6 ${iconColor}`} />
      </div>
      <div>
        <p className="text-lg text-gray-900">{text}</p>
        <p className="text-sm text-gray-500">{subtext}</p>
      </div>
    </div>
  );

  if (href) {
    return <a href={href} target={target} rel={rel}>{content}</a>;
  }

  return <div onClick={onClick}>{content}</div>;
}