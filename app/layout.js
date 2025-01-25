import './globals.css'
export const metadata = {
  title: "NextWikipedia",
  description: "Search for Wikipedia Summaries",
  creator: "Ryan Pfeiffer",
  keywords: ['Next.js', 'React', 'JavaScript', 'Wikipedia', 'Encyclopedia'],
  openGraph: {
    title: 'NextWikipedia',
    description: 'Search for Wikipedia Summaries',
    siteName: 'Next Wikipedia',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
