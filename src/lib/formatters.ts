/**
 * Shortens a wallet address for display on mobile devices
 * @param address - Full wallet address
 * @param charCount - Number of characters to show from start and end (default: 4)
 * @returns Shortened address (e.g., "0x84...7916D")
 */
export function shortenAddress(address: string, charCount: number = 4): string {
  if (address.length <= charCount * 2 + 3) {
    return address;
  }
  const start = address.slice(0, charCount);
  const end = address.slice(-charCount);
  return `${start}...${end}`;
}

/**
 * Returns shortened address for mobile, full address for desktop
 * For use in responsive components - return both variants and use CSS to show/hide
 */
export function getResponsiveAddress(address: string) {
  return {
    short: shortenAddress(address, 8),
    full: address,
  };
}
