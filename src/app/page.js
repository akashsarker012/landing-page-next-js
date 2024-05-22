
import Navbar from "@/components/navbar";
import Blogs from "@/components/blogs";
import Client from "@/components/client";
import Pricing from "@/components/pricing";
import Metrics from "@/components/metrics";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    
      <div className="bg-[#000000]">
      
      <Navbar></Navbar>
      <Banner></Banner>
      <Client></Client>
      <Pricing></Pricing>
      <Blogs></Blogs>
      <Metrics></Metrics>
      </div>
      
  );
}
