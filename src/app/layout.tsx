import './_css/globals.scss';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className='container bg-white overflow-x-hidden'>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}