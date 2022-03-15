/* Global Variables */



// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();
const url ='https://api.openweathermap.org/data/2.5/weather?zip='

const apiKey = ",&appid=e0aa61d3cac9089e5ca35ad13067ea7d&units=metric"
const generate = document.getElementById('generate')

const zip = document.getElementById('zip').value;
const feeling = document.getElementById('feelings').value;



generate.addEventListener('click', async () => {
    try {
     const feelings = document.getElementById('feelings').value;
        const zipCode = document.getElementById('zip').value;
        
       
   // console.log(zipCode);
     const bUrl ='https://api.openweathermap.org/data/2.5/weather?zip='
    const response = await fetch(bUrl + zipCode + apiKey).then(res => res.json())
    //console.log(response)
    const temp = await response.main.temp
        
    //alert(temp)
       await fetch('/add', {
            method: 'POST',
            credentials: 'same-origin', 
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                newDate,
                temp:Math.round(temp),
                feelings
            })
            
       })
        //
       


        const resualtData = await fetch('/all').then(res => res.json())
        document.getElementById('date').innerHTML=`<h3>the Date is :</h3>${resualtData.date}`
        document.getElementById('temp').innerHTML=`<h3>the temperature is :</h3>${resualtData.temp}`
        document.getElementById('content').innerHTML=`<h3>you feel like :</h3>${resualtData.feelings}` 
    }
    catch (err) {
        console.log('we have an Erorr At', err)
    }
})
