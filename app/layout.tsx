export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning> 
        {children}
        <div id="modal-root"></div>
      </body>
    </html>
  );
}