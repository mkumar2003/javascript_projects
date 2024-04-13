var arr = [ 
    {
        dp:"https://plus.unsplash.com/premium_photo-1673757121102-0ca51260861f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWx8ZW58MHwxfDB8fHww",story:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHwxfDB8fHww"},
    {
        dp:"https://images.unsplash.com/photo-1531891570158-e71b35a485bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
        story:"https://images.unsplash.com/photo-1536924430914-91f9e2041b83?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D"

    },
    {
        dp:"https://images.unsplash.com/photo-1562572159-4efc207f5aff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
        story:"https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D"

    },
    {
        dp:"https://images.unsplash.com/photo-1616091093714-c64882e9ab55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
        story:"https://images.unsplash.com/photo-1589881787083-0fcfec1db918?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1611558709798-e009c8fd7706?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
        story:"https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D"
    }
]

var clutter = "";
var storiyan = document.querySelector("#storiyan");

arr.forEach(function(elem, inx) {
   clutter += `<div class="story"><img id="${inx}" src="${elem.dp}" alt=""></div>`;
});

storiyan.innerHTML = clutter;

storiyan.addEventListener("click", function(dets) {
   document.querySelector("#full-screen").style.display = "block";
   document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`;

   setTimeout(function(){
    document.querySelector("#full-screen").style.display = "none";
   },3000)
});
