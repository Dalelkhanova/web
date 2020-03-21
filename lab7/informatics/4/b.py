a = int(input())

L = [int(i) for i in input().split()]

for x in L:
	if x % 2 == 0:
		print(x)