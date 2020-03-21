def alarm_clock(day, vacation):
  weekday_alarm = "7:00"
  weekend_alarm = "10:00"
  if vacation:
    weekday_alarm = "10:00"
    weekend_alarm = "off"
  if 0 < day < 6:
    return weekday_alarm
  return weekend_alarm

