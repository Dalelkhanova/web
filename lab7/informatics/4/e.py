n = int(input())

L = [int(i) for i in input().split()]

i = 1
ok = False
for i in range(0, len(L) - 1):
	if L[i]*L[i + 1] > 0:
		ok = True
		break

if ok:
	print("YES")
print("NO")