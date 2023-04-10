const btn = document.getElementById("button")
const menu = document .getElementById("menu")


menu.style.left="-400px"

btn.addEventListener("click",() => {
    if(menu.style.left == "-400px"){
        menu.style.left = "0px"
    } else {
        menu.style.left = "-400px"
    }
})

