# WHOLE [ARITHMETIC] CALCULATOR PROGRAM
# ADDING TWO NUMBERS
def add(num1,num2):
    return num1+num2
# SUBTRACTING TWO NUMBERS
def sub(num1,num2):
    return num1-num2
# MULTIPLYING TWO NUMBERS
def multi(num1,num2):
    return num1*num2
# DIVIDING TWO NUMBERS
def div(num1,num2):
    if num2==0:
        print("\nError: Cannot divide by zero")
        return None
    return num1/num2
# FLOOR DIVISION OF TWO NUMBERS
def flo_div(num1,num2):
    if num2==0:
        print("\nError: Cannot divide by zero")
        return None
    return num1//num2
# EXPONENTATION
def power(num1,num2):
    return num1**num2

def calculating_operation():
    #WHILE LOOP FOR OPTIONS
    while True:
        print("\n Select operator")
        print("1.ADD(+)")
        print("2.SUB(-)")
        print("3.MULTI(*)")
        print("4.DIVIDE(/)")
        print("5.FLODIV(//)")
        print("6.POWER(**)")
        print("7.EXIT")
        try:
        #ENTERING CHOICE
            choice=int(input("Enter Choice (1/2/3/4/5/6/7):"))
        except ValueError:
            print("\nINVALID INPUT : please enter a choice from 1 to 7")
            continue
        #CONDITION
        if choice==7:
            print("exiting calculator \nGOODBYE!")
            break
        if choice in (1,2,3,4,5,6):
            try:
                num1=float(input("Enter first number:"))
                num2=float(input("Enter second number:"))
                #PERFORMING REQUIRED CALCULATION BY CONDITION
                if choice== 1:
                    result=add(num1,num2)
                elif choice== 2:
                    result=sub(num1,num2)
                elif choice== 3:
                    result=multi(num1,num2)
                elif choice== 4:
                    result=div(num1,num2)
                elif choice== 5:
                    result=flo_div(num1,num2)
                elif choice== 6:
                    result=power(num1,num2)
                #print the result only if it's valid
                if result is not None:
                    print(f"\nResult : {result}")
                # FOR INVALID CHOICE
            except ValueError:
                print("\nINVALID CHOICE : Please enter valid choice.")
        else:
            print("\nInvalid Choice: Please enter from 1 to 7 ")

if __name__=="__main__":
    calculating_operation()