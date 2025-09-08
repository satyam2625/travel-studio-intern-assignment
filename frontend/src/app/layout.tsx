import './globals.css';
import { Providers } from './providers'; // or default based on your export

export const metadata = {
  title: 'Travel Studio Dashboard',
  description: 'Guest request logging system',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
