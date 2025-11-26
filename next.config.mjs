import nextra from 'nextra'

const withNextra = nextra({})

export default withNextra({
  output: 'export',
  images: { 
    unoptimized: true,
  },
  trailingSlash: true, // Optional but often helps with routing (claude says)
})

