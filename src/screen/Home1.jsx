import { HeroSection, Services, Trusted, FeatureProduct } from '../Components';

const Home1 = () => {

  const data = {
    name: "Imran Store",
     paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias atque temporibus veniam doloribus libero ad error omnis voluptates animi! Suscipit sapiente."
  }
  return (
    <>
    <HeroSection myData={data} />
    <FeatureProduct />
    <Services />  
    <Trusted />
    </>
  )
}

export default Home1
