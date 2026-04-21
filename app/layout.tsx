export default function RootLayout({
  children,
  modal, 
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        {children}
        {modal}
      </body>
    </html>
  );
}