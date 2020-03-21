def count_code(str):
  cnt = 0
  for i in range(len(str)-3):
    sub = str[i:i+2] + str[i+3]
    if sub == 'coe':
      cnt += 1
  return cnt
