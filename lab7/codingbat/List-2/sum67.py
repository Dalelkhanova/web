def sum67(nums):
  sum = 0
  sumbrake = False

  for i in nums:
    if i != 6 and sumbrake == False:
      sum += i
    else:
      sumbrake = True

    if i == 7:
      sumbrake= False

  return sum
