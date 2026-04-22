'use client';

import { Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { getResponsiveAddress } from '@/lib/formatters';

interface CopyButtonProps {
  address: string;
}

export default function CopyButton({ address }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const { short: shortAddress, full: fullAddress } = getResponsiveAddress(address);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="flex flex-row gap-4 items-center bg-yellow-700 border-b-4 border-r-4 border-t-2 border-l-4 border-yellow-400 px-4 py-2 font-semibold rounded-full hover:bg-yellow-600 transition-colors"
    >
      <div className="">
        <span>CA:</span>
        <span className="hidden md:inline">{fullAddress}</span>
        <span className="md:hidden">{shortAddress}</span>
      </div>
      {copied ? (
        <Check size={15} className="text-green-500" />
      ) : (
        <Copy size={15} className="" />
      )}
    </button>
  );
}
