module.exports = function toReadable(number) {
  const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const teens = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  const convert_hundreds = (number) => {
    if (number % 100 === 0) {
      return ones[Math.floor(number / 100)] + " hundred";
    } else if (number > 99) {
      return ones[Math.floor(number / 100)] + " hundred " + convert_tens(number % 100);
    } else {
      return convert_tens(number);
    }
  }
  
  const convert_tens = (number) => {
    if (number < 10) {
      return ones[number];
    } else if (number % 10 === 0) {
      return tens[Math.floor(number / 10)];
    } else if (number > 10 && number < 20) {
      return teens[number - 10];
    } else {
      return tens[Math.floor(number / 10)] + " " + ones[number % 10];
    }
  }
  
  if (typeof number !== 'number') {
    alert('Not number!')
  } else if (number == 0) {
    return "zero";
  } else {
    return convert_hundreds(number);
  }
}
