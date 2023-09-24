const btnEl = document.getElementById("btn")
const jokeEl = document.getElementById("joke")

const apiKey = "3+iSkY4/j4Va78+IniM1vw==KnhxewBS3ELWofeY"

const options = {
    method: 'GET',
    headers: {
        "X-Api-Key": apiKey,
    },
}

const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1"


async function getJoke (){
 
    try{

   
    //loading effects
    jokeEl,innerText = "Loading..."
    btnEl.disabled = true;
    btnEl.innerText = "Loading"


    //generating joke
    const response = await fetch(apiUrl, options)

    const data = await response.json()



    //returning
    btnEl.disabled = false
    btnEl.innerText = "Tell me a joke!"

    jokeEl.innerText = data[0].joke

}  catch (error) {

    jokeEl.innerText = "An error happened, try again later"

    //returning
    btnEl.disabled = false
    btnEl.innerText = "Tell me a joke!"

}

}


btnEl.addEventListener("click", getJoke)