import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch(
      'https://www.firescreener.com/api/bsc/token-metrics/0x8489c022a10a8d2a65eb5aF2b0E4aE0191e7916D',
      {
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; CatCakeToken/1.0)',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching token metrics:', error);
    return NextResponse.json(
      { error: 'Failed to fetch token metrics' },
      { status: 500 }
    );
  }
}
