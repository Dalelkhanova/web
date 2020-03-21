a = int(input())

num = 1

while True:
	if num == a:
		print("YES")
		break
	if num > a:
		print("NO")
		break
	else:
		num *= 2