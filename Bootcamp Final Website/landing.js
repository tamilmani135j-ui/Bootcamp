const con = document.getElementById('container')
const arr=["./assets/nykaa-1.webp",
   "./assets/nykka2.jpg",
   "./assets/nykka 3.jpg",
   "./assets/nykka4.jpg",
   "./assets/nykka5.jpg" 
]
let i=0;
let changeimg=()=>{
       i++;
   if(i==arr.length)
   {
      i=0;
   }
   con.style.backgroundImage=`url('${arr[i]}')`;
 
}

let changeimg1=()=>{
    i--;
   if(i==-1)
   {
      i=0;
   }
    
   con.style.backgroundImage=`url('${arr[i]}')`;
    
}
let change=(a)=>{
    con.style.backgroundImage=url('${arr[a]}');
}

setInterval(() => {
    changeimg()
},2000);

