def min (a, b, c, d):
	min = a
	if b < min:
		min = b
	if c < min:
		min = c
	if d < min:
		min = d
	return min


a, b, c, d = input().split()

print(min(a, b, c, d))