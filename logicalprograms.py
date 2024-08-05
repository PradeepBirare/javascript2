"""
Swap using 3 variable
a=5
b=6
temp=0

print("numbers before swapping",a,b)

temp=a
a=b
b=temp
print("numbers after swapp", a, b)
"""

'''a=5
b=6

print("no befor swap",a ,b)
a=a+b
b=a-b
a=a-b
print ("no after swap",a,b)'''


'''a=int(input("enter a no:"))
fact=1

for i in range(1,a+1):
  
    fact=i*fact
    print("factorial:",fact)'''



'''prime no'''
'''a=int(input("enter a no"))

for i in range(2,a):
   if a%i==0:
     print ("not prime ")
     break
else:
  print("is prime") '''
  

'''start= int(input ("Enter start no"))

stop =int(input("Enter a no :"))

for num in range(start,stop+1):

 if num > 1:
  for i in range(2,num):
    if num%i==0:
     break
  else:
     print (num)'''

'''def prime():
    num=int(input("enter a no:"))
    f=0


    for i in range(2,int (num/2)+1):
        if num%i==0:
            f=1
            break
    if f==0:   
             
        print (num,"is  prime")
    else:
        print(num,"is composite ")   
prime()        
    
        '''


'''palindrome'''

'''x='this'
w=''
for i in x:
    w+=i
if (x==w):
    print ('yes')
else:
    print('not')  '''


'''fibonnaci series'''

'''def fibonnaci():
 a=0
 b=1
 c=0
 d=int(input("enter a no till you want to see fibonnaci series "))
 for i in range(0,d):
  """for j in range(i,c):"""
  c= c+a
  print(c)
  a=b
  b=c
fibonnaci()  '''

# Python program to demonstrate working
# of map.

# Return double of n
'''def addition(n):
    return n + n

# We double all numbers using map()
a = (1, 2, 3, 4)
result = map(addition, a)
print(list(result))'''



     

