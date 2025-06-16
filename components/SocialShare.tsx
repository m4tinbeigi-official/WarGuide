import React from 'react';
import { Section } from './Section'; // Assuming Section component is in the same directory or adjust path

export const SocialShare: React.FC = () => {
  const pageUrl = typeof window !== 'undefined' ? window.location.href : 'https://example.com/crisis-guide-iran'; // Fallback URL
  const pageTitle = "راهنمای جامع آمادگی و بقا در شرایط بحران: ویژه شهروندان ایرانی";
  const shareText = `اطلاع‌رسانی حیاتی است! این راهنمای آمادگی در بحران را با دوستان و خانواده خود به اشتراک بگذارید: ${pageTitle}`;

  const platforms = [
    {
      name: "واتس‌اپ",
      url: `https://wa.me/?text=${encodeURIComponent(shareText + "\n" + pageUrl)}`,
      bgColor: "bg-green-500",
      hoverBgColor: "hover:bg-green-600",
      icon: ( // Simple SVG for WhatsApp
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.717-.981zm7.361-7.582c-.07-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      )
    },
    {
      name: "تلگرام",
      url: `https://t.me/share/url?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(shareText)}`,
      bgColor: "bg-sky-500",
      hoverBgColor: "hover:bg-sky-600",
      icon: ( // Simple SVG for Telegram
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 0l-6 22-8.5-6-1.5 6-2.5-4-6.5-2.5 24-15.5zm-11 12.5l5.5-5.5-17 10 3.5 2.5 8-7z"/>
        </svg>
      )
    },
    {
      name: "توییتر (X)",
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(pageUrl)}`,
      bgColor: "bg-gray-800",
      hoverBgColor: "hover:bg-gray-900",
      icon: ( // Simple SVG for X (Twitter)
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" fill="currentColor">
          <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.602.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
        </svg>
      )
    },
    {
      name: "ایمیل",
      url: `mailto:?subject=${encodeURIComponent(pageTitle)}&body=${encodeURIComponent(shareText + "\n\n" + pageUrl)}`,
      bgColor: "bg-red-500",
      hoverBgColor: "hover:bg-red-600",
      icon: ( // Simple SVG for Email
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
        </svg>
      )
    }
  ];

  return (
    <Section title="این راهنما را به اشتراک بگذارید و جان‌ها را نجات دهید!">
      <p className="text-base md:text-lg leading-relaxed mb-6 text-center">
        آگاهی و آمادگی در شرایط بحرانی می‌تواند تفاوت بین مرگ و زندگی باشد. با به اشتراک گذاشتن این راهنما با دوستان، خانواده و هموطنان خود، به گسترش این دانش حیاتی کمک کنید. هر اشتراک شما می‌تواند به نجات جان یک انسان کمک کند. لطفاً در difusión این اطلاعات یاری‌رسان باشید.
      </p>
      <div className="flex flex-wrap justify-center gap-3 md:gap-4">
        {platforms.map((platform) => (
          <a
            key={platform.name}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center text-white font-medium py-2 px-4 rounded-lg shadow-md transition-colors duration-150 ease-in-out ${platform.bgColor} ${platform.hoverBgColor}`}
            aria-label={`اشتراک‌گذاری در ${platform.name}`}
          >
            {platform.icon && <span className="mr-2">{platform.icon}</span>}
            {platform.name}
          </a>
        ))}
      </div>
    </Section>
  );
};
