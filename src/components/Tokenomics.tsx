'use client';

import { useEffect, useState } from 'react';

interface TokenMetrics {
  totalSupply?: string;
  circulatingSupply?: string;
  burnedSupply?: string;
}

const BUY_TAX = 3;
const SELL_TAX = 5;

export default function Tokenomics() {
  const [metrics, setMetrics] = useState<TokenMetrics>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTokenMetrics = async () => {
      try {
        const response = await fetch('/api/token-metrics');
        
        if (!response.ok) {
          throw new Error('Failed to fetch token metrics');
        }
        
        const data = await response.json();
        
        // Map API response to our metrics
        setMetrics({
          totalSupply: data.totalSupply,
          circulatingSupply: data.circulatingSupply,
          burnedSupply: data.burnedSupply,
        });
      } catch (err) {
        console.error('Error fetching token metrics:', err);
        setError(err instanceof Error ? err.message : 'Failed to load metrics');
      } finally {
        setLoading(false);
      }
    };

    fetchTokenMetrics();
  }, []);

  const formatNumber = (num?: string): string => {
    if (!num) return '0';
    const numValue = parseFloat(num);
    if (numValue >= 1_000_000_000_000) return (numValue / 1_000_000_000_000).toFixed(2) + 'T';
    if (numValue >= 1_000_000_000) return (numValue / 1_000_000_000).toFixed(2) + 'B';
    if (numValue >= 1_000_000) return (numValue / 1_000_000).toFixed(2) + 'M';
    if (numValue >= 1_000) return (numValue / 1_000).toFixed(2) + 'K';
    return numValue.toFixed(0);
  };

  return (
    <section className="bg-yellow-200 flex flex-col items-center px-6 py-32" id='tokenomics'>
      <h1 className="text-5xl md:text-6xl text-amber-800">TOKENOMICS</h1>
      
      
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-amber-700 border-b-4 border-r-4 border-amber-500 px-4 py-2 rounded-lg shadow-md text-center">
          <h2 className="mb-2 text-xl md:text-2xl">
            Total Supply: {formatNumber(metrics.totalSupply)}
          </h2>
        </div>
        
        <div className="bg-amber-700 border-b-4 border-r-4 border-amber-500 px-4 py-2 rounded-lg shadow-md text-center">
          <h2 className="mb-2 text-xl md:text-2xl">
            Burned: {formatNumber(metrics.burnedSupply)}
          </h2>
        </div>
        
        <div className="bg-amber-700 border-b-4 border-r-4 border-amber-500 px-4 py-2 rounded-lg shadow-md text-center">
          <h2 className="mb-2 text-xl md:text-2xl">
            Circulating Supply: {formatNumber(metrics.circulatingSupply)}
          </h2>
        </div>
      </div>
      
      <div className="text-black flex flex-col md:flex-row justify-center gap-8 mt-8">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl">{BUY_TAX}/{SELL_TAX}%</h1>
          <p className="text-lg">BUY/SELL TAX</p>
        </div>

        <div className="flex flex-col items-center">
          <h1 className="text-3xl">$CAKE</h1>
          <p className="text-lg">REWARDS</p>
        </div>
      </div>
    </section>
  );
}