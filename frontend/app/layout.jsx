import '../styles/globals.css';

export const metadata = {
  title: 'AIRBOOK Starter',
  description: 'Local starter with authentication only',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
