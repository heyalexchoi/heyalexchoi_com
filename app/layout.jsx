import { Footer, Layout, Navbar, ThemeSwitch } from 'nextra-theme-blog'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-blog/style.css'

export const metadata = {
  title: 'Hey Alex Choi',
  description: 'Personal website of Alex Choi',
}

export default async function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head  />
      <body>
        <Layout>
          <Navbar pageMap={await getPageMap()}>
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
