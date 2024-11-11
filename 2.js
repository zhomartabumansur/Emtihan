var num1 = prompt("Кез келген бірінші санды енгізіңіз:")
var num2 = prompt("Кез келген екінші санды енгізіңіз:")
var num3 = prompt("Кез келген үшінші санды енгізіңіз:") 

if (num1 > num2 || num1 > num3 || num2 > num1 || num2 > num3 || num3 > num1 || num3 > num2) {
    alert(num1 > num2 + num3 > num1 + "бірінші сан екінші саннан үлкен") 
} else ("Дұрыс жазыңыз")