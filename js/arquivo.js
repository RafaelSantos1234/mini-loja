window.addEventListener("load",eventos);

function eventos(){
    for(c=0;c<document.querySelectorAll(".rad").length;c++){
    (function (index){
        
            document.querySelectorAll(".rad")[c].addEventListener("click",function(){
                
                for(i=0;i<document.querySelectorAll(".content").length;i++){
                    document.querySelectorAll(".content")[i].classList.add("none");
                }

                document.querySelectorAll(".content")[index].classList.remove("none");
            });
        
    })(c);
}
   
}

