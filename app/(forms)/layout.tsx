export default function FormsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="w-1/4 m-auto mt-10">{children}</body>
    </html>
  )
}