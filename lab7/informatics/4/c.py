a = int(input())

L = [int(i) for i in input().split()]

pos = 0
for x in L:
	if x > 0:
		pos += 1

print(pos)