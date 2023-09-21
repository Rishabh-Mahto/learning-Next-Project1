import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="mx-32 my-12">
        {children}
      </body>
    </html>
  )
}
