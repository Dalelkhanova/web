def xor(a, b):
	if a != b:
		return 1
	else:
		return 0


c, d = input().split()
print(xor(c, d))