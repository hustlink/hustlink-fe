'use client';

import React, { ReactNode } from "react";
import { Button } from "@/app/shared/components/ui/button";

interface FooterProfileProps {
  rightContent?: ReactNode; 
}

export default function FooterProfile({ rightContent }: FooterProfileProps) {
  return (
    <footer className="w-full border-t border-gray-200 shadow-md z-50 bg-white py-4 px-6 flex items-center justify-between">
      {/* Left side */}
      <Button
      className="text-base" 
      size='lg'
      variant='ghost'>Back</Button>

      {/* Right side (custom) */}
      <div>{rightContent}</div>
    </footer>
  );
}
export { FooterProfile };