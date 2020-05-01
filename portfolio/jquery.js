$(function(){

    var t1 = new TimelineLite();
    var letter = $('.letter-inner');
    var letter2 = $('.letter-inner2');
    var description = $('.description');
    t1.from(description, 1, { y: 50, autoAlpha: 0, ease: Power1.easeIn })
    t1.from(letter, 1.2, { x: -70, ease: Power1.easeOut }, '+=0.3')
    t1.from(letter2, 1.2, { x: 70, ease: Power1.easeOut }, '-=1');


    // var controller = new ScrollMagic.Controller();

    // // scene1//
    
    // var scene3=new ScrollMagic.Scene({
    //     triggerElement:'.line4',
    //     // duration:"100",
    //     triggerHook:"0.27"
    // })
        
    //     .setClassToggle(".intro","bck1")
     
    //     // .setPin('.content')

    //     .addIndicators()
    //     .addTo(controller);



var t1Firstscroll=new TimelineMax();

t1Firstscroll
    .set('.name', { scale: 1, })
    .to('.name', 5, { scale: 0.7, x: '-90px'})
    
 
    
        



    var controller = new ScrollMagic.Controller();

    // scene1//
    var scene1=new ScrollMagic.Scene({
        triggerElement:'.name',
        duration:"70",
        triggerHook:"0.27"
    })
       
        .setTween(t1Firstscroll)
        // .setPin('.name')
        // .setPin('.name2')
        
        .addIndicators()
        .addTo(controller);

       // scene 2//
    var t2scroll = new TimelineMax();

    t2scroll
        .set('#name2', { scale: 1, })
        
        .to('#name2', 5, { scale: 1.2, x: '-90px' })
        
    var scene2 = new ScrollMagic.Scene({
        triggerElement: '.name',
        duration: "70",
        triggerHook: "0.27"
    })

        .setTween(t2scroll)
        

        .addIndicators()
        .addTo(controller);

    // scene 3//
    // var t3scroll = new TimelineMax();

    // t3scroll
    //     .set('#work', { scale: 1, })
    //     .to('#work', 1, { scale:1  })




    // var controller = new ScrollMagic.Controller();

    // // scene3//
    // var scene3 = new ScrollMagic.Scene({
    //     triggerElement: '.line7',
    //     duration: "100%",
    //     triggerHook: "0.27"
    // })

    //     .setTween(t3scroll)
    //     .setPin('#work')

    //     .addIndicators()
    //     .addTo(controller);


    // scene4//
    var t4scroll = new TimelineMax();

    t4scroll
        .set('.intro', {opacity:1  })
        .to('.intro', 2, { opacity:0 })

    var scene4 = new ScrollMagic.Scene({
        triggerElement: '.line3',
        duration: "150px",
        triggerHook: "0.27"
    })

        .setTween(t4scroll)
        

        .addIndicators()
        .addTo(controller);
    

    

    //scene5//
    var t5scroll = new TimelineMax();

    t5scroll
        .set('#projects', { opacity: 0 })
        .to('#projects',5, { opacity: 0.00001 })
        .to('#projects', 5,{ opacity: 0.00002 })
        .to('#projects',5, { opacity: 0.00003 })
        .to('#projects',5, { opacity: 0.00004 })
        .to('#projects', 5,{ opacity: 0.0005 })
        .to('#projects',5, { opacity: 0.0005 })
        .to('#projects', 5, { opacity: 0.1 })
            .to('#projects', 5, { opacity: 0.2 })
        .to('#projects', 5, { opacity: 0.3 })
        .to('#projects', 5, { opacity: 0.4 })
        .to('#projects', 5, { opacity: 0.5 })
        .to('#projects', 5, { opacity: 0.6 })
        
        .to('#projects', 10, { opacity: 1 })
    var scene5 = new ScrollMagic.Scene({
        triggerElement: '.name',
        duration: "300px",
        triggerHook: "0.30"
    })

        .setTween(t5scroll)


        .addIndicators()
        .addTo(controller);

// //scene6//
    // var t6scroll = new TimelineMax();

    // t6scroll
    //     .set('.container-fluid', { background:'whitesmoke', })
    //     // .to('.container-fluid', { background: 'white',scaleY:0 })

    //     .to('.container-fluid', 10, { background:' #A72424',})
    // var scene6 = new ScrollMagic.Scene({
    //     triggerElement: '.line1',
    //     duration: "100px",
    //     triggerHook: "0.27"
    // })

    //     .setTween(t6scroll)
     

    //     .addIndicators()
    //     .addTo(controller);
   
    var scene7 = new ScrollMagic.Scene({
        triggerElement: '.line2',

        triggerHook: "0.1"
    })

        .setClassToggle('.color', 'color1')


        .addIndicators(
            {
                name: 'color',
                colorStart: 'green',
                colorEnd: 'red',
                indent: 200
            }

        )
        .addTo(controller);
})
