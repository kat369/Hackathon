let div1=document.createElement("div");
div1.className="hero";
document.body.append(div1);

let div2=document.createElement("div");
div2.className="navbar";
div1.append(div2);

let img=document.createElement("img");
img.setAttribute('src','https://www.names.org/images/press/names-logo.png');
img.className="logo";
div2.append(img);

let ul=document.createElement("ul");
div2.append(ul);

let list1=document.createElement("li");
ul.append(list1);

let a1=document.createElement("a");
a1.setAttribute('href','#');
a1.innerHTML="Home";
list1.append(a1);

let list2=document.createElement("li");
ul.append(list2);

let a2=document.createElement("a");
a2.setAttribute('href','https://nationalize.io/');
a2.innerHTML="About";
list2.append(a2);

let list3=document.createElement("li");
ul.append(list3);

let a3=document.createElement("a");
a3.setAttribute('href','https://nationalize.io/our-data');
a3.innerHTML="ISO code chart";
list3.append(a3);

let img2=document.createElement("img");
img2.setAttribute('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiW1NNPWJ4ZwqSvDhHYoHZXTcGcQK_JZSPFyaFD4F4gR-lAq9Cu25WjbemqntgeiTHL_o&usqp=CAU');
img2.setAttribute('class','menu-icon');
div2.append(img2);


let div4=document.createElement("div");
div4.className="banner";
div1.append(div4);

let div5=document.createElement("div");
div5.className="left-column";
div4.append(div5);

let div6=document.createElement("div");
div6.className="search-box";
div5.append(div6);

let form=document.createElement("form");
div6.append(form);

let input1=document.createElement("input");
input1.setAttribute('type','firstname');
input1.setAttribute('id','name');
form.append(input1);

let input2=document.createElement("input");
input2.setAttribute('type','button');
input2.setAttribute('class','btn btn-primary');
input2.setAttribute('value','search!');
input2.setAttribute('onclick','foo()');
form.append(input2);

let heading1=document.createElement("h1");
heading1.innerHTML="Enter a person <span>Name!</span>&#128525;"
div5.append(heading1);

let heading2=document.createElement("h3");
heading2.innerHTML="we can predict the nationality of a person by their <span>Name!</span>"
div5.append(heading2);

let div7=document.createElement("div");
div7.setAttribute('id','demo1');
div5.append(div7);

let div8=document.createElement("div");
div8.setAttribute('id','demo');
div5.append(div8);

let div9=document.createElement("div");
div9.setAttribute('class','right-columned');
div4.append(div9);


let img3=document.createElement("img");
img3.setAttribute('src','https://www.names.org/images/logo-wordle2.png');
img3.className="image";
div9.append(img3);


function foo(){
    var userinput=document.getElementById('name').value;
    
    console.log(userinput)

    getdata(userinput);
    }
   
async function getdata(userinput){
    try{
        let info=await fetch(`https://api.nationalize.io/?name=${userinput}`);
        let result= await info.json();
        let name=result.name;
        document.getElementById("demo1").innerHTML = name;
        console.log(result)
        let country=result.country;
        var list = "<ul>";
        for (let i of country) {
            list += `<li>ISO Country Code Where This Person May Belong's To -> ${i.country_id} , Probability -> ${i.probability}%`;
        }
        list += "</ul>";
        document.getElementById("demo").innerHTML = list;
        
         
    }catch(error){
       console.log(error)
    }
}