let horas, tipo, salario, nombre, sb, bonos, de, h ;

h=6000

nombre=(prompt('ingrese nombre del trabajador'));
tipo=Number(prompt('ingrese tipo de trabajo (fijo=1 temporar=2)'));
horas=Number(prompt('ingrese horas de trabajo'));

if (tipo==1)
{
    de=Number(prompt('ingrese deducciones'));
    bonos=Number(prompt('ingrese bonificaciones'));
    sb=(horas*h)-de
    salario=sb+bonos
    alert('su nombre es: '+nombre);

    alert('sus deducciones: '+de);
    alert('sus bonificaciones: '+bonos);
    alert('su salario total es: '+salario);
}
else if (tipo==2)
{
    salario=horas*h
    alert('su nombre total es: '+nombre);
    alert('su salario total es: '+salario);
}