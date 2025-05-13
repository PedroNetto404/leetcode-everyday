from collections import deque

class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0: return False
        dq = deque(int(d) for d in str(x))
        for n in range(dq.__len__()):
            if dq.__len__() == 0:
              return True
            if(dq[0] != dq[-1]):
                return False
            if(dq.__len__() > 1):
              dq.popleft()
            dq.pop()
        return True