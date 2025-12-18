'use client';

import { Button } from '@/components/Button';
import { Check, Instagram, Link, Linkedin, Mail, Share } from 'lucide-react';
import { useEffect, useState } from 'react';

export const ShareButton = ({ title }: { title: string }) => {
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isNative, setIsNative] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Now we know we are on the client
    if (typeof navigator !== 'undefined' && typeof navigator.share === 'function') {
      setIsNative(true);
    }
  }, []);

  // Prevent "Hydration Mismatch" errors by not rendering
  // browser-specific UI until mounted
  if (!mounted) return <div className="h-10" />;

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleShare = async () => {
    try {
      await navigator.share({
        title,
        text: `Check out: ${title}`,
        url: shareUrl,
      });
    } catch (err) {
      console.error('User cancelled share' + err);
    }
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-3">
      {isNative ? (
        /* Mobile View: Single Native Button */
        <Button className="p-0" onClick={handleShare} aria-label="Share Post" variant={'link'}>
          <Share className="text-[#6e717f]" size={18} />
        </Button>
      ) : (
        /* Desktop View: Individual Icons */
        <>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            className="rounded-lg bg-[#0077b5] p-2.5 text-white transition-transform hover:-translate-y-1"
          >
            <Linkedin size={20} />
          </a>

          <button
            onClick={copyToClipboard}
            className="rounded-lg bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-2.5 text-white transition-transform hover:-translate-y-1"
          >
            <Instagram size={20} />
          </button>

          <a
            href={`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(shareUrl)}`}
            className="rounded-lg bg-gray-700 p-2.5 text-white transition-transform hover:-translate-y-1"
          >
            <Mail size={20} />
          </a>

          <button
            onClick={copyToClipboard}
            className="flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 transition-colors hover:bg-gray-50"
          >
            {copied ? <Check size={18} className="text-green-600" /> : <Link size={18} />}
            <span className="text-sm font-semibold">{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </>
      )}
    </div>
  );
};
