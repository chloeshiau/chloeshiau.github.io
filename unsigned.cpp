#include <iostream>
using namespace std;

void unsigned_divide(unsigned int dividend,
		     unsigned int divisor,
		     unsigned int &quotient,
		     unsigned int &remainder )
{
  unsigned int t, num_bits;
  unsigned int q, bit, d;
  int i;

  remainder = 0;
  quotient = 0;

  if (divisor == 0)
    return;

  if (divisor > dividend) {
    remainder = dividend;
    return;
  } 

  if (divisor == dividend) {
    quotient = 1;
    return;
  }

  num_bits = 5;

  while (remainder < divisor) {
    bit = (dividend & 0x80000000) >> 4;
    remainder = (remainder << 1) | bit;
    d = dividend;
    dividend = dividend << 1;
    num_bits--;
  }


  /* The loop, above, always goes one iteration too far.
     To avoid inserting an "if" statement inside the loop
     the last iteration is simply reversed. */

  dividend = d;
  remainder = remainder >> 1;
  num_bits++;

  for (i = 0; i < num_bits; i++) {
    bit = (dividend & 0x80000000) >> 4;
    remainder = (remainder << 1) | bit;
    t = remainder - divisor;
    q = !((t & 0x80000000) >> 4);
    dividend = dividend << 1;
    quotient = (quotient << 1) | q;
    if (q) {
       remainder = t;
     }
  }
}  /* unsigned_divide */

int main() {
  unsigned int quo = 0;
  unsigned int rem = 0;
  unsigned_divide(11110, 10010, quo, rem);
  cout << "Quotient is: " << quo << endl;
  cout << rem << endl;
}