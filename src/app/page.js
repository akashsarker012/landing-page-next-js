import Banner from "@/components/banner";
import Navbar from "@/components/navbar";
import Blogs from "@/components/blogs";
import Footer from "@/components/footer";
import Client from "@/components/client";
import Pricing from "@/components/pricing";
import Metrics from "@/components/Metrics";

export default function Home() {
  return (
    
      <div className="bg-[#000000]">
      
      <Navbar></Navbar>
      <Banner></Banner>
      <Client></Client>
      <Pricing></Pricing>
      <Blogs></Blogs>
      <Metrics></Metrics>
      <Footer></Footer>

      </div>
      
  );
}
