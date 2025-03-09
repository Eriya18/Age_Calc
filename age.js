function calculateAge()
{
let ny;
let nm;
let nd;
let  cy = parseInt(crnt.value.slice(0,4),10);
let  cm = parseInt(crnt.value.slice(5,7),10);
let  cd = parseInt(crnt.value.slice(8,10),10);

let  doby = parseInt(dob.value.slice(0,4),10);
let  dobm = parseInt(dob.value.slice(5,7),10);
let  dobd = parseInt(dob.value.slice(8,10),10);
console.log(cy,cm,cd); 
console.log(doby,dobm,dobd);

if(cd>=dobd)
    {
        nd = cd - dobd;
    }
    else
    {
        nd = cd + new Date(cy,cm,0).getDate() - dobd;
        cm--;
    }
if(cm>=dobm)
    {
        nm = cm - dobm;
        
    }
    else
    {
        nm = cm + 12 -dobm;
        cy--;
    }
    if(cy>=doby)
        {
             ny = cy - doby;
        }
    else{
            result.innerHTML = 'Date sahi dal ...';
    }
    result.innerHTML = ny + ' years ' + nm + ' Months ' + nd + ' days ';
}