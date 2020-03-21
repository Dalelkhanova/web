n = int(input())

L = [int(i) for i in input().split()]

cnt = 0
for i in range(1, len(L) - 1):
	if L[i - 1] < L[i] and L[i + 1] < L[i]:
		cnt += 1

print(cnt)