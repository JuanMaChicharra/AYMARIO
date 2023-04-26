let n,n1,n2,n3,n4,nf
n=prompt('nombre del estudiante')
n1=Number(prompt('ingrese nota 1'))
n2=Number(prompt('ingrese nota 2'))
n3=Number(prompt('ingrese nota 3'))
n4=Number(prompt('ingrese nota 4'))
nf=(n1+n2+n3+n4)/4
if (nf<3 && nf >0) {
    alert('PIERDE')
}else if (nf<5 && nf>3) {
    alert('GANA')
}else if (nf>5) {
    alert('ingrese bien sus notas')
}