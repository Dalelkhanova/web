def power(a, n):
	pow = 1
	for i in range(1, n + 1):
		pow *= a
	return pow


m, p = input().split()
print(power(float(m), int(p)))