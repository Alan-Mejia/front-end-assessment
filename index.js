
let $getdata = document.querySelector("#getdata");

$getdata.addEventListener('click', function(){
    getData();
})

let arrayCountry = [];

async function getData(){
    try{
        let answer = await fetch('https://restcountries.com/v3.1/all');
        let countriesList = await answer.json();
        countriesList.forEach(element => {
            let country = {
                official_name: element.name.common,
                capital: element.capital,
                region: element.region,
                language: element.languages,
                popuation: element.population,
                flag: element.flags.svg
            }
            arrayCountry.push(country);
            
        });
    }catch (e){
        
    }
    
    arrayCountry.sort((v1,v2)=>{
        const nameCountry = v1.official_name;
        const nameCountry2 = v2.official_name;
        if(nameCountry<nameCountry2){
            return -1;
        }
        if(nameCountry>nameCountry2){
            return 1;
        }
        return 0;
    })


    for(i=0; i<arrayCountry.length;i++){
        document.querySelector('#add').innerHTML += `
        <div class="borders row">
        <div class="col-2 mt-2">
        <h4>NOMBRE</h4>
        <P>${arrayCountry[i].official_name}</P>
    </div>
    <div class="col-2 mt-2">
        <h4>CAPITAL</h4>
        <P>${arrayCountry[i].capital}</P>
    </div>
    <div class="col-2 mt-2">
        <h4>REGION</h4>
        <P>${arrayCountry[i].region}</P>
    </div>

    <div class="col-2 mt-2">
        <h4>LANGUAGE</h4>
        <P>${arrayCountry[i].languages}</P>
    </div>
    
    
    <div class="col-2 mt-2">
        <h4>POPULATION</h4>
        <P>${arrayCountry[i].popuation}</P>
    </div>

    <div class="col-2 mt-2">
        <h4>FLAG</h4>
        <img class="imageFlag" src="${arrayCountry[i].flag}" alt="">
    </div>
    </div>    
        `;

       console.log(arrayCountry[i]);
    }
}