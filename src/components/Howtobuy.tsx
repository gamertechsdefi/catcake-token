// components/HowToBuy.tsx
import { FC, JSX } from "react";
import { Wallet, ArrowLeftRight, Coins } from "lucide-react";

type Step = {
  title: string;
  description: string;
  icon: JSX.Element;
  footer: string;
};

const steps: Step[] = [
  {
    title: "ACQUIRE BNB",
    description:
      "Ensure you have BNB in your wallet by transferring or purchasing it from an exchange.",
    icon: <Wallet className="w-10 h-10 text-amber-800" />,
    footer: "WALLET",
  },
  {
    title: "SWAP BNB FOR $CCT",
    description:
      "Go to PancakeSwap, select BNB and $CCT, and execute the swap.",
    icon: <img src="/images/logo.jpg" alt="token icon" className="w-10 h-10 text-amber-800 rounded-full" />,
    footer: "$CCT",
  },
  {
    title: "EARN $CAKE",
    description:
      "Hold your $CCT tokens and watch your $CAKE rewards accumulate over time.",
    icon: <Coins className="w-10 h-10 text-amber-800" />,
    footer: "CAKE",
  },
];

const HowToBuy: FC = () => {
  return (
    <section className="bg-yellow-100 py-12">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Header */}
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
          HOW TO BUY
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-10">
          LET ME SHARE THE DETAILS TO YOU ON HOW TO BUY YOUR BELOVED $BULL
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-between border border-gray-200"
            >
              <div className="flex flex-col items-center">
                <div className="mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold text-amber-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
              <div className="mt-6 text-sm font-semibold text-amber-500">
                {step.footer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;
