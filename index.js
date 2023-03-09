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
                const breedPics = document.getElementById("dogs")
                breedPics.setAttribute("src", data.message) 
            })
        }

    let post = document.getElementById("post");
    post.addEventListener("click", function () {
      let commentBoxValue = document.getElementById("comment-box").value;
    
      let li = document.createElement("li");
      let text = document.createTextNode(commentBoxValue);
      li.appendChild(text);
      document.getElementById("unordered").appendChild(li);
    });
    })