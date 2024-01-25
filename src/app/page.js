import Banner from "@/components/Banner";
import Navbar from "@/components/navbar";
import Blogs from "@/components/blogs";
import Footer from "@/components/footer";
import Client from "@/components/client";

export default function Home() {
  return (
    
      <div className="bg-[#000000]">
      
      <Navbar></Navbar>
      <Banner></Banner>
      <Client></Client>
      <Blogs></Blogs>
      <Footer></Footer>

      </div>
      
  );
}
