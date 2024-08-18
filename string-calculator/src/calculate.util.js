const Add = (input) => {
  if (input === '') return 0;

  let delimiter = /,|\n/;
  if (input.startsWith('//')) {
    const delimiterMatch = input.match(/^\/\/(.+)\n/);
    if (delimiterMatch) {
      delimiter = new RegExp(delimiterMatch[1]);
      input = input.slice(delimiterMatch[0].length);
    }
  }

  const allNumbers = input.match(/-?\d+/g);
  const numArray = allNumbers && allNumbers.map(Number) || input.split(delimiter).map(Number);
  const negatives = numArray.filter((num) => num < 0);

  if (negatives.length > 0) {
    throw new Error(`Negative input not allowed: ${negatives.join(', ')}`);
  }

  return numArray.reduce((sum, num) => sum + num, 0);
};

export default Add;
