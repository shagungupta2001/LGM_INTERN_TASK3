let list1 = [];
let list2 = [];
let list3 = [];
let list4 = [];
let list5 = [];

let n=1;
let x=0;

function AddRow(){
    let AddRown=document.getElementById('show');
    let NewRow=AddRown.insertRow(n);

    list1[x] = document.getElementById("name").value;
    list2[x] = document.getElementById("Fname").value;
    list3[x] = document.getElementById("age").value;
    list4[x] = document.getElementById("NO").value;
    list5[x] = document.getElementById("email").value;

    let cel1 = NewRow.insertCell(0);
    let cel2 = NewRow.insertCell(1);
    let cel3 = NewRow.insertCell(2);
    let cel4 = NewRow.insertCell(3);
    let cel5 = NewRow.insertCell(4);
    

    cel1.innerHTML = list1[x];
    cel2.innerHTML = list2[x];
    cel3.innerHTML = list3[x];
    cel4.innerHTML = list4[x];
    cel5.innerHTML = list5[x];    
    n++;
    x++;
}
