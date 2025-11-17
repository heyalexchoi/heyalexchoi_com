import { useMDXComponents as getThemeComponents } from 'nextra-theme-blog'

export function useMDXComponents(components) {
  const themeComponents = getThemeComponents()
  
  return {
    ...themeComponents,
    ...components,
    wrapper: ({ children, metadata, ...props }) => {
      const Wrapper = themeComponents.wrapper
      
      // Check if we're on the landing page using metadata
      const isHomePage = metadata?.filePath === 'app/page.mdx'
      
      if (isHomePage) {
        // Custom home page layout with avatar
        return (
          <>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginBottom: '2rem', 
              borderRadius: '1rem',
              maxWidth: '800px',
              }}>
              <img 
                src="images/my_gravatar.png" 
                alt="Alex Choi"
                style={{ width: '100px', height: '100px', borderRadius: '50%', marginInline: 'unset' }}
              />
              <div style={{ marginLeft: '1.5rem' }}>
                <h2 style={{ margin: 0 }}>{metadata.title}</h2>
              </div>
            </div>
            {children}
          </>
        )
      }
      
      // Use default Nextra wrapper for all other pages (blog posts, etc.)
      return <Wrapper metadata={metadata} {...props}>{children}</Wrapper>
    }
  }
}
