const element = document.getElementById("cookie");

function plus() {

    const output = document.getElementById("clicker__counter");
    output.textContent ++ +1;
    if (element.width === 200) {
        element.width = 220;
    } else if (element.width == 220) {
        element.width = 200;
    }
    
};

element.onclick = plus;




