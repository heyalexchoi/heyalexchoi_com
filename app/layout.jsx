import { Footer, Layout, Navbar, ThemeSwitch } from 'nextra-theme-blog'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-blog/style.css'
import './globals.css'

export const metadata = {
  title: 'Hey Alex Choi',
  description: 'Personal website of Alex Choi',
}

export default async function RootLayout({ children }) {
  const pageMap = await getPageMap()

  return (
    <html lang="en" suppressHydrationWarning>
      <Head />
      <body>
        <Layout>
          <Navbar pageMap={pageMap}>
            <ThemeSwitch />
          </Navbar>
          {children}
          <Footer>
            © {new Date().getFullYear()} Alex Choi.
          </Footer>
        </Layout>
      </body>
    </html>
  )
}
