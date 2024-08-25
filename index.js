let btn = document.querySelector("button");
let p = document.querySelector('p');
btn.addEventListener("click",async()=>{
    let fact = await getFacts();
    p.innerText = fact;
})
let url2 = "https://catfact.ninja/fact";
async function getFacts() {
    try{
            let res = await axios.get(url2);
        return res.data.fact;
    }
    catch(e)
    {
        console.log("error",e);
        console.log("no fact found");
    }
    
}
getFacts();
let btn1 = document.querySelector("#getpic");
let img = document.querySelector("#result");
btn1.addEventListener("click",async()=>{
    let image = await getimage();
    img.setAttribute("src",image);
})
let url3 = "https://dog.ceo/api/breeds/image/random";
async function getimage() {
    try{
        let res = await axios.get(url3);
        return res.data.message;
    }
    catch(e)
    {
        console.log("error",e);
       return "/";
}
}

// give header to get api
const url4 = "https://icanhazdadjoke.com/";
async function getJokes() {
    try {
        const config = {headers: {accept:"application/json"}};
        let res = await axios.get(url4,config);
        console.log(res.data);
    }
    catch(e)
    {
        console.log("error",e);
    }
    
}

// activity using query string
let btn2 = document.querySelector('#collage');
let p3 = document.querySelector('#colres');

let url5 = "http://universities.hipolabs.com/search?name=";


btn2.addEventListener("click",async()=>{
       let country = document.querySelector("input").value;
       console.log(country);
        let colArr = await collages(country);
        console.log(colArr);
        show(colArr);
});

function show(colArr)
{
    let list = document.querySelector("#list");
    list.innerText = "";

    for(col of colArr)
    {
        console.log(col.name);
        let li = document.createElement('li');
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function collages(country) {
    try{
        let res = await axios.get(url5+country);
        return res.data;
    }
    catch(e)
    {
        console.log("error",e);
        return [];
    }
    
}
