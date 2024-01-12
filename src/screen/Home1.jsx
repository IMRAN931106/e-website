import { HeroSection, Services, Trusted, FeatureProduct } from '../Components';
import { useProductContext } from "../Context/ProductContaxt";
import { HashLoader } from "react-spinners";
const Home1 = () => {

  const data = {
    name: "Imran Store",
     paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias atque temporibus veniam doloribus libero ad error omnis voluptates animi! Suscipit sapiente."
  }
  const { isLoading} = useProductContext();

  if (isLoading) {
    return (
      <HashLoader
        color="#CDCBCF"
        size={70}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
        }}
      />
    );
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
