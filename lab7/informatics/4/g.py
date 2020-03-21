import math
n = int(input())

L = [int(i) for i in input().split()]

for i in range(0, math.floor(len(L)/2)):
	L[i], L[n - i - 1] = L[n - i - 1], L[i]

for i in range(0, len(L)):
	print(L[i])