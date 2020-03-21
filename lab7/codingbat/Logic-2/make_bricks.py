def make_bricks(small, big, goal):
  bigNeeded = goal // 5
  smallNeeded = goal - 5 * bigNeeded
  if bigNeeded <= big and smallNeeded <= small:
    return True
  return False
