/* 
// DOM 1

var element = document.getElementById(`par`);
console.log(element);

// OU alert(element)


var element1 = document.querySelector('#parpar');
console.log(element1)
element1.innerText = 'Modif en cours';





//DOM 2

var element = document.querySelector('#target');
console.log(element.innerText.length);


var element1 = document.querySelector(`#counterLength`);
element1.innerText = element.innerText.length;





//DOM 3

var element = document.querySelectorAll('p');
console.log(element, element.length);

for (i=0; i<element.length; i++)
{
    alert(element[i].innerHTML);
}


var element = document.querySelectorAll('p');
console.log(element, element.length);

for (i=0; i<element.length; i++)
{
    alert(element[i].innerHTML);

    if (element[i].innerText.length >= 15)
    {
        alert("");
    }
    else
    {
        alert(element[i].innerText.length);
    }
}




// DOM 4

var element = document.querySelector(".myFirstDiv");
console.log(element);


var element1 = document.querySelector(".mySecondDiv .paragraphe:last-child");
console.log(element1);


var element = document.querySelectorAll(".paragraphe");

for (i=0; i<element.length; i++)
{
    alert(element[i].innerText);
}


var temp = document.querySelector(".myFirstDiv").innerHTML;
document.querySelector(".myFirstDiv").innerHTML = document.querySelector(".mySecondDiv").innerHTML;         
document.querySelector(".mySecondDiv").innerHTML = temp;



//DOM 5

var element = document.querySelector('#secondTitle');
console.log(element.innerText);


var element = document.querySelector('#container .paragraphe');
console.log(element.innerText);




//DOM 6


var container = document.querySelectorAll('ul li');
console.log(container);

for (i=0; i<container.length; i++)
{
    console.log(container[i].innerText);
}


var container = document.querySelectorAll('.alreadyBuy');
console.log(container);
for (i=0; i<container.length; i++)
{
    console.log(container[i].innerText);
}


const container = document.querySelectorAll('li');

for (i=0; i<container.length; i++)
{
    container[i].addEventListener('click', function(){
        if (this.className == 'alreadyBuy'){
            this.className = "";
        }
        else
        {
            this.className = 'alreadyBuy'
        }
    });
};




//DOM 7

const clic = document.querySelector('#myButton')

clic.addEventListener('click', function()
{
    alert('Vous avez appuyé sur le bouton')
})


const clic = document.querySelector('#myButton')

clic.addEventListener('click', function()
{
    var count = document.querySelector('span');
    var countvalue = parseInt(count.innerText);
    countvalue++;
    count.innerText = countvalue
})
*/


    

