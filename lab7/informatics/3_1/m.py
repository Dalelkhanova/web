sum = 0

n = int(input())
while n > 0:
	a = int(input())
	if a == 0:
		sum += 1
	n -= 1

print(sum)