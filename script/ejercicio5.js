
let a, b, ruta, placa, usuarios, total, total2;

ruta=Number(prompt('ingrese la ruta del servicio (a=1 b=2) '));
placa=(prompt('ingrese placa del vehiculo'));
usuarios=Number(prompt('ingrese numero de usuarios'));


if (ruta==1){
    total=usuarios*1200
    
}
else 
{
    if(ruta==2)
    total=usuarios*1000
   
}
alert(total)