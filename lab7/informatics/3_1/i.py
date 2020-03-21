import math

a = int(input())

b = 0
for x in range(1, math.floor(math.sqrt(a))):
	if a % x == 0:
		b = b + 1

b = 2*b

if a % math.sqrt(a) == 0:
	b = b + 1

print(b)