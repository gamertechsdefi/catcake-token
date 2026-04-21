import Image from "next/image";
import Link from "next/link";
import HowToBuy from "@/components/Howtobuy";
import Faq from "@/components/Faq";
import Tokenomics from "@/components/Tokenomics";
import { FaTelegram, FaXTwitter } from "react-icons/fa6";
import { getResponsiveAddress } from "@/lib/formatters";
import { Copy } from "lucide-react";

const CA = "0x8489c022a10a8d2a65eb5aF2b0E4aE0191e7916D";
const { short: shortCA, full: fullCA } = getResponsiveAddress(CA);

export default function Home() {

  return (
    <div>

      <main className="">
        <section className="flex flex-col items-center min-h-screen px-6">
          <div className="flex flex-col justify-between items-center justify-center">
             <Image src="/images/meme-landing.png" alt="CCT landing page meme" width={400} height={400} className="flex justify-end w-auto h-[75%] mt-8" />
            <div className="text-center flex flex-col items-center mt-8">
              <h1 className="text-yellow-400 text-6xl md:text-7xl font-bold">CATCAKE TOKEN</h1>
              {/* <p className="text-sm md:text-lg">Everyone loves CAKE. Even the CATS</p> */}
              <div className="flex flex-col md:flex-row gap-2 mt-2">

                <Link href="https://www.firescreener.com/bsc/cct" className="flex flex-row gap-4 items-center bg-yellow-700 border-b-4 border-r-4 border-t-2 border-l-4 border-yellow-400 px-4 py-2 font-semibold rounded-full">
                  <div className="">
                    <span>CA:</span>
                    <span className="hidden md:inline">{fullCA}</span>
                    <span className="md:hidden">{shortCA}</span>
                  </div>
                  <Copy size={15} className="" />
                </Link>
              </div>
            </div>

          </div>
          
        </section>

        <section className="flex justify-center px-6 py-16">
          <div className="border-t-2 border-l-2 border-b-6 border-r-6 p-6 rounded-2xl flex flex-col items-center text-center max-w-4xl w-full">
          <h1 className="text-5xl md:text-7xl text-yellow-500 mb-4">EVERYONE LOVES CAKE. EVEN THE CATS</h1>
          <p className="pb-4 md:text-lg">Built for meme lovers and community believers, it turns playful chaos into shared hype. 
            Everyone loves cake. Even the cats. With endless meme energy and a fun spirit, CatCake 
            is more than a token; it is the sweet movement. </p>
          <div className="flex gap-3">
            <Link href="" className="font-bold bg-yellow-700 border-t-2 border-b-4 border-l-4 border-r-4 border-yellow-300 px-6 py-3 rounded-2xl">APE IN TO LOVE</Link>
            <Link href=""></Link>
          </div>
          </div>
        </section>


        <Tokenomics />

        <HowToBuy />

        <Faq />

        <section className="flex flex-col items-center text-center px-6 py-16">
          <h1 className="text-3xl md:text-5xl font-bold text-yellow-400">You love Cakes too?</h1>
          <p>Join us in the Community to interact with more Cats that loves cakes</p>
          <div className="flex flex-row justify-center gap-8 mt-8">
            <Link href="https://x.com/catcaketoken clas"><FaXTwitter className="w-12 h-12 bg-yellow-100 text-black p-2" /></Link>
            <Link href="https://t.me/catcaketokencct"><FaTelegram className="w-12 h-12 bg-yellow-100 text-black p-2" /></Link>
          </div>
        </section>

      </main>
      <footer>
        <div>
          <h1>CatCake Token</h1>
          <p>© 2024 CatCake. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
