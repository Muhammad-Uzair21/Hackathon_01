import Categories from '@/components/Categories/Categories'
import Hero from '@/components/Hero/Hero'
import ImageGrid from '@/components/ImageGrid/ImageGrid'
import OurProducts from '@/components/OurProducts/OurProducts'
import Products from '@/components/Products/Products'

export default function Home() {
  return (
    <main >
      <Hero />
      <Products />
      <Categories />
      <ImageGrid />
      <OurProducts />
    </main>
  )
}
