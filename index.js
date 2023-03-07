document.addEventListener('DOMContentLoaded', (event) => {
    fetch("https://dog.ceo/api/breeds/image/random")
            .then((response) => response.json())
            .then((data) => {
                let dogPics = document.createElement("img")
                dogPics.setAttribute("src", data.message)  
                dogPics.setAttribute("id" , "dogs")   
                document.getElementById("body").append(dogPics)
            })
        
        let breedList = document.createElement('ul')
        document.getElementById("body").append(breedList)  
            
        fetch("https://dog.ceo/api/breeds/list/all")
            .then((response) => response.json())
            .then((data) => {
                    console.log(data)
                for (const breed in data.message) {
                    let x = document.createElement("button")
                    x.innerHTML = breed
                    let listItem = document.createElement('li')
                    listItem.append(x)
                    breedList.append(listItem)
                    x.addEventListener("click", () => fetchBreed(breed))
                }
            })
    
        function fetchBreed(dog){
            fetch(`https://dog.ceo/api/breed/${dog}/images/random`)
            .then((response) => response.json())
            .then((data) => {
                let breedPics = document.createElement("img")
                breedPics.setAttribute("src", data.message)
                document.getElementById("body").append(breedPics)  
            })
        }
    })