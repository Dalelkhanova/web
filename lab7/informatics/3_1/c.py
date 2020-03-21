import math

a = int(input())
b = int(input())
for i in range(a, b+1):
    n = int(math.sqrt(i))
    if (i == n*n):
        print(i, end= " ")
