# x = int(input("Input the Size of Diamond:- "))
# for i in list (range(x)) + list(reversed(range(x-1))):
#  print('{:<{w1}}{:*<{w2}}'.format('','',w1=x-i-1, w2=i*2+1))
#  print()

# def star():
#      J = 10; K = 10; P = 1
# for i in range(10):
#   print(" " * K, " *" * i)
#   k -= 1
# while j > 1:
#   j -= 1
#   print(" " * p, "*#" * j)
#   p += 1

# star()  

row = 20
column = 30
for i in range(row):
 for j in range(column):
  if(i == 0 or i == row -1 or j == 0 or j == column -1):
   print('*', end = '')
  else:
   print('', end = ' ')
 print()
