gsap.to("#image img",{


    scrollTrigger : {
        trigger : "#page5" ,
        start :  "top 40%" ,
        // markers : true , 
        scrub  : 2 , 
        scroller : "#main" ,
        // pin : true ,
         
        end : "top 0%"

    },

    width : "40%",
    x : 87 ,
    y : 35 , 
    ease : Expo.ease ,
    // display : block ,
})


gsap.to("#image img",{


    scrollTrigger : {
        trigger : "#page6" ,
        start :  "top 60%" ,
        // markers : true , 
        scrub  : 2 , 
        scroller : "#main" ,
        // pin : true ,
         
        end : "top 30%"

    },

    opacity : 0 ,

    // width : "40%",
    ease : Expo.ease ,
    // display : block ,
})


gsap.to("#bottle1 ,#bottle2 ,#bottle3 ,#bottle4",{


    scrollTrigger : {
        trigger : "#page6" ,
        start :  "top 100%" ,
        // markers : true , 
        scrub  : 2 , 
        scroller : "#main" ,
        // pin : true ,
         
        end : "top 60%"

    },
    // opacity : 0 ,

    ease : Expo.ease ,
    marginTop : "-20%" ,
    // stagger : 1 ,
})










gsap.to("#image img",{
    
    scrollTrigger : {
        trigger : "#center h1",
        start : "top 10%" ,
        scroller : "#main" ,
        // markers : true ,

        scrub : 4,
        pin : true , 
        end : "top 30%" 

    
    },

    transform : "rotate(0deg)",
    ease : Expo.easeInOut
})