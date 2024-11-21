export const AsyncSum = (a: number, b: number) => {
  function sleep(ms: number): Promise<void> {
      return new Promise(resolve => setTimeout(resolve, ms));
  }

  await sleep(1000 * 60 * 15)

  return a + b
  
}
