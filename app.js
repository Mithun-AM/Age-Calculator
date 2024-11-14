let userInput = document.querySelector("#date");
let btn = document.querySelector("button");
let para = document.querySelector("#result");

userInput.max = new Date().toISOString().split("T")[0];
//  console.log(userInput.max);


btn.addEventListener("click",function(){
    let birthDate = new Date(userInput.value);
    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();
    // console.log(d1);
    // console.log(m1);
    // console.log(y1);

    let presentDate = new Date();
    // console.log(presentDate);

    let d2 = presentDate.getDate();
    let m2 = presentDate.getMonth() + 1;
    let y2 = presentDate.getFullYear();

    // console.log(d2);
    // console.log(m2);
    // console.log(y2);

    let d3,m3,y3;
    y3 = y2 - y1;

    if(m2 >= m1){
        m3 = m2 - m1;
    }
    else{
        y3--;
        m3 = 12 + m2 -m1;
    }

    if(d2 >= d1){
        d3 = d2 - d1;
    }else{
        m3--;
        d3 = getDaysInMonth(y1,m1) + d2 - d1 -1;
    }
    if(m3<0){
        m3 = 11;
        y3--;
    }
    para.innerHTML = `<i class="fa-solid fa-person"></i> You are <span>${y3}</span> years,<span> ${m3}</span> months, <span>${d3}</span> days old.`;

    console.log(y3);
    console.log(m3);
    console.log(d3);
})

function getDaysInMonth(year,month){
    return new Date(year,month,0).getDate();    
}
