
const content = document.querySelector('#content');

function display() {

    const maincontent = document.createElement('div');
    const image = document.createElement('img');
    image.src = "../src/kiss_of_life_profile_s_0622.jpg";
    const title = document.createElement('h1');
    title.textContent = "Kiss of Life performing this Thursday!";
    const subtitle = document.createElement('h3');
    subtitle.textContent = "We are offering best Bulgogi in the whole Toronto. Come this Thursday and enjoy all your can eat food!"

    maincontent.appendChild(image);
    maincontent.appendChild(title);
    maincontent.appendChild(subtitle);

    return maincontent;
    
}

content.appendChild(display());