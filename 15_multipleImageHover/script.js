const elem = document.querySelectorAll(".elem")

elem.forEach(function(val){

    //val.childNodes[3] selects img tag
    //every alternate child is text means empty
    val.addEventListener("mouseenter",function(){
        val.childNodes[3].style.opacity = 1
    })
    val.addEventListener("mouseleave",function(){
        val.childNodes[3].style.opacity = 0
    })
    val.addEventListener("mousemove",function(det){
        val.childNodes[3].style.left = det.x + "px"
        val.childNodes[3].style.top = det.y + "px"
    })
})