a = int(input())

L = [int(i) for i in input().split()]

i = 0
for x in L:
	if i % 2 == 0:
		print(x)
	i += 1