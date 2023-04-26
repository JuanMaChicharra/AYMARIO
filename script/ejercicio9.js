
let n1,n2,n3;


n1=Number(prompt("Ingrese el numero 1"));
n2=Number(prompt("Ingrese el numero 2"));
n3=Number(prompt("Ingrese el numero 3"));


if (n1<n2 && n2<n3){
    alert("el orden es"+n1+n2+n3);
}else if (n1>n2 && n2>n3 ){
    alert("el orden es"+n3+n2+n1);
}else if (n2<n1 && n1<n3){
    alert("el orden es"+n2+n1+n3);
} else if (n3<n1 && n2>n1){
    alert("el orden es"+n3+n1+n2);

} else if (n2<n3 && n1>n3){
    alert("el orden es"+n2+n3+n1);
}else if(n2>n3 && n1<n3){
    alert("el orden es"+n1+n3+n2);
}