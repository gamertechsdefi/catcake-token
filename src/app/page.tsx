import Image from "next/image";
import Link from "next/link";
import HowToBuy from "@/components/Howtobuy";
import Faq from "@/components/Faq";
import { FaTelegram, FaXTwitter } from "react-icons/fa6";
import Header from "@/components/Header";

export default function Home() {

  return (
    <div>
      <Header />
      <main>
        <section className="flex flex-col items-center min-h-screen px-6">
          <div className="flex justify-between items-center w-full max-w-2xl">
            <Image src="/images/element.png" alt="element" width={200} height={200} className="w-auto h-48" />
            <div className="text-center flex flex-col items-center mt-4">
              <h1 className="text-yellow-400 text-5xl md:text-7xl font-bold">CAT CAKE</h1>
              <p className="text-sm md:text-lg">Everyone loves CAKE. Even the CATS</p>
              <div className="flex flex-col md:flex-row gap-2 mt-2">
                <Link href="https://pancakeswap.finance/swap?chain=bsc&inputCurrency=BNB&outputCurrency=0x8489c022a10a8d2a65eb5aF2b0E4aE0191e7916D&exactAmount=&exactField=OUTPUT" target="_blank" rel="noopener noreferrer" className="bg-yellow-400 text-white px-6 py-2 rounded-full text-lg font-semibold">
                  Buy
                </Link>
                <Link href="https://www.firescreener.com/bsc/cct" className="border-2 border-yellow-400 px-4 py-2 font-semibold rounded-full">Chart</Link>
              </div>
            </div>
            <Image src="/images/element.png" alt="element" width={200} height={200} className="w-auto h-48" />
          </div>
          <Image src="/images/meme-01.png" alt="element" width={400} height={400} className="flex justify-end w-auto md:h-96  mt-8" />
        </section>

        <section>
          <h1>About CatCake</h1>
          <p></p>
        </section>

        <HowToBuy />

        <section className="flex flex-col items-center px-6 py-16">
          <h1 className="text-3xl md:text-5xl font-bold"> TOKENOMICS</h1>
          <div className="flex flex-col gap-4 mt-4 ">
            <div className="bg-amber-500 border-b-4 border-r-4 border-amber-300 px-4 py-2 rounded-lg shadow-md text-center">
              <h2 className="mb-2 text-xl md:text-2xl">Total Supply: 10T</h2>
            </div>
            <div className="bg-amber-500 border-b-4 border-r-4 border-amber-300 px-4 py-2 rounded-lg shadow-md text-center">
              <h2 className="mb-2 text-xl md:text-2xl">Initial Burnt: 2T</h2>
            </div>
            <div className="bg-amber-500 border-b-4 border-r-4 border-amber-300 px-4 py-2 rounded-lg shadow-md text-center">
              <h2 className="mb-2 text-xl md:text-2xl">Circulatory Supply: 8T</h2>
            </div>
          </div>
          <div className="flex flex-row justify-center gap-8 mt-8">
            <div className="flex flex-col items-center">
              <h1 className="text-2xl">4/8%</h1>
              <p className="text-lg">BUY/SELL TAX</p>
            </div>

            <div className="flex flex-col items-center">
              <h1 className="text-2xl">$CAKE</h1>
              <p className="text-lg">REWARDS</p>
            </div>
          </div>
        

        </section>

        <Faq />

        <section className="flex flex-col items-center text-center px-6 py-16">
          <h1 className="text-3xl md:text-5xl font-bold text-yellow-400">You love Cakes too?</h1>
          <p>Join us in the Community to interact with more Cats that loves cakes</p>
          <div className="flex flex-row justify-center gap-8 mt-8">
            <Link href="https://x.com/catcaketoken clas"><FaXTwitter className="w-12 h-12 bg-yellow-100 text-black p-2"/></Link>
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
