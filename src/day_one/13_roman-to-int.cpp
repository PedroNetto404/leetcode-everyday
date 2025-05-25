#include <iostream>
#include <string>

using namespace std;

int getValue(char d) {
  if (d == 'I') return 1;
  if (d == 'V') return 5;
  if (d == 'X') return 10;
  if (d == 'L') return 50;
  if (d == 'C') return 100;
  if (d == 'D') return 500;
  if (d == 'M') return 1000;
  //If it is out of Roman chars
  return -1;
}

class Solution {
 public:
  int romanToInt(string s) {
    // 1. Iterate over each char.
    // 2. If the next char is a symbol greater than the current, get the next char value and subtract the current and add +1 over the iterator.
    int counter = 0;
    for (int i = 0; i <= s.size() - 1; i++) {
      if (i == (s.size() - 1)) {
        counter += getValue(s[i]);
        continue;
      }
      if (getValue(s[i + 1]) > getValue(s[i])) {
        counter += getValue(s[i + 1]) - getValue(s[i]);
        i += 1;
      } else {
        counter += getValue(s[i]);
      }
    }

    return counter;
  }
};

int main() {
  Solution t = *new Solution();
  cout << t.romanToInt("III");
  return 0;
}
