
    const container = document.querySelector("div");
    const image=document.createElement("img")
    const pictures=['images/image1.jpg','images/image2.jpg','images/image3.jpg','images/image4.jpg','images/image5.jpg','images/image6.jpg','images/image7.jpg']
    container.appendChild(image)
    const number = Math.floor(Math.random() * pictures.length);
    console.log(number)
    image.setAttribute("src", `${pictures[number]}`);
    console.log(image)


