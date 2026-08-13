import './globals.css';

export const metadata = {
  title: 'Le Petit Pain | Boulangerie à Hawkesbury',
  description: 'Maquette de site pour Le Petit Pain à Hawkesbury, Ontario.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
