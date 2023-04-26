let num1, num2, num3;

num1=Number(prompt('ingrese numero 1'));
num2=Number(prompt('ingrese numero 2'));
num3=Number(prompt('ingrese numero 3'));

if (num1>num2 && num1>num3)
{
    alert('el numero mayor es'+num1)
}
else if (num2>num1 && num2>num3) 
{
    alert('el numero mayor es'+num2)
}  
else if (num3>num2 && num3>num1)
{
    alert('el numero mayor es'+num3)
}