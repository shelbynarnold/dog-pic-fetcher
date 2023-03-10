document.addEventListener('DOMContentLoaded', (event) => {
    fetch("https://dog.ceo/api/breeds/image/random")
            .then((response) => response.json())
            .then((data) => {
                let dogPics = document.createElement("img")
                dogPics.setAttribute("src", data.message)  //info abt breeds and random pic
                dogPics.setAttribute("id" , "dogs")   
                document.getElementById("pics").append(dogPics)
            })
        
        let breedList = document.createElement('ul')
        document.getElementById("pics").append(breedList)  
            
        fetch("https://dog.ceo/api/breeds/list/all")
            .then((response) => response.json())
            .then((data) => {
                for (const breed in data.message) {
                    let x = document.createElement("button") //breed button
                    x.setAttribute("id" , "bttn")
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
                const breedPics = document.getElementById("dogs")  //replaces main pic
                breedPics.setAttribute("src", data.message) 
            })
        }
          let form = document.getElementById("form");
          form.addEventListener("submit", function (e) {
            e.preventDefault()
            let commentBoxValue = document.getElementById("comment-box").value; //creates comment
            form.reset()
          
            let li = document.createElement("li");
            let text = document.createTextNode(commentBoxValue); //appends comment
            li.appendChild(text);
            document.getElementById("unordered-list").appendChild(li);
          });

        let value = 0
        const test = document.getElementById('like-button')
        test.addEventListener('mouseover', () => {          //like button
         value ++;
         test.innerHTML = `${value} likes`
        })

        })