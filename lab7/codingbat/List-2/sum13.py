def sum13(nums):
  sum = 0
  pos = 0
  while pos < len(nums):
    if nums[pos] == 13:
      pos += 1
    else:
      sum += nums[pos]
    pos += 1
  return sum
