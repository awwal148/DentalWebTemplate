'use client';
import { useEffect } from 'react';

export default function GHLChatWidget() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://beta.leadconnectorhq.com/loader.js';
    script.async = true;
    script.setAttribute('data-resources-url', 'https://beta.leadconnectorhq.com/chat-widget/loader.js');
    script.setAttribute('data-widget-id', '68e26f349662389a78d0f3f5');
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return null;
}
