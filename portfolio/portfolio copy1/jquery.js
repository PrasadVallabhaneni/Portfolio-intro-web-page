$(function(){

    var t1 = new TimelineLite();
    var letter = $('.letter-inner');
    var letter2 = $('.letter-inner2');
    var line1 = $('.line1');
    var line2 = $('.line2');
    var line3 = $('.line3');
    var line4 = $('.line4');
    var circle=$('.arrow');
    t1.from(letter, 1.2, { x: -70, ease: Power1.easeOut }, '+=0.3')
    t1.from(letter2, 1.2, { x: 70, ease: Power1.easeOut }, '-=1');
    
    t1.from(line1, 0.1, { x: 50, autoAlpha: 0, ease: Power1.easeIn },'-=0.5')
    t1.from(line2, 0.2, { x: 50, autoAlpha: 0, ease: Power1.easeIn }, '-=0.5')
    t1.from(line3, 0.3, { x: 50, autoAlpha: 0, ease: Power1.easeIn }, '-=0.5')
    t1.from(line4, 0.4, { x: 50, autoAlpha: 0, ease: Power1.easeIn }, '-=0.5')
    t1.from(circle, 1, { autoAlpha: 0, ease: Power1.easeOut });
    

    var controller = new ScrollMagic.Controller();


    // scene1//
    var t1scroll = new TimelineMax();

    t1scroll
        .set('.content', {opacity:1  })
        .to('.content', 2, { opacity:0 })

    var scene1 = new ScrollMagic.Scene({
        triggerElement: '.line3',
        duration: "150px",
        triggerHook: "0.27"
    })

        .setTween(t1scroll)
        

        .addIndicators(
            {
                name:'fadeout',
                colorStart:'green',
                colorEnd:'red',
                indent:200
            }

        )
        .addTo(controller);
    

    

    //scene2//
    var t2scroll = new TimelineMax();

    t2scroll
        .set('#projects', { opacity: 0 })
        .to('#projects',5, { opacity: 0.00001 })
        
        .to('#projects', 5, { opacity: 0.3 })
        .to('#projects', 5, { opacity: 0.4 })
        .to('#projects', 5, { opacity: 0.5 })
        .to('#projects', 5, { opacity: 0.6 })
        
        .to('#projects', 10, { opacity: 1 })
    var scene2 = new ScrollMagic.Scene({
        triggerElement: '.line4',
        duration: "300px",
        triggerHook: "0.55"
    })

        .setTween(t2scroll)


        .addIndicators({
            name: 'projects',
            colorStart: 'green',
            colorEnd: 'red',
            indent: 100
        })
        .addTo(controller);

// //scene3//
    var t3scroll = new TimelineMax();

    t3scroll
        .set('.container-fluid', { background:'whitesmoke', })
        // .to('.container-fluid', { background: 'white',scaleY:0 })

        .to('.container-fluid', 10, { background:' #A72424',})
        .to('.name', 1, { color: ' white', })
        // .to('#works', 1, { color: ' white', })
    var scene6 = new ScrollMagic.Scene({
        triggerElement: '.line4',
        duration: "100px",
        triggerHook: "0.27"
    })

        .setTween(t3scroll)
     

        .addIndicators({
            name: 'red',
            colorStart: 'green',
            colorEnd: 'red',
            indent: 30
        })
        .addTo(controller);


    var t4scroll = new TimelineMax();

    t4scroll
        .set('.container-fluid', { background: 'whitesmoke', })
        // .to('.container-fluid', { background: 'white',scaleY:0 })

        .to('.container-fluid', 10, { background: ' #A72424', })
    var scene4 = new ScrollMagic.Scene({
        triggerElement: '.line4',
        duration: "100px",
        triggerHook: "0.27"
    })

        .setTween(t4scroll)


        .addIndicators({
            name: 'red',
            colorStart: 'green',
            colorEnd: 'red',
            indent: 30
        })
        .addTo(controller);

        // scene5/
    var t5scroll = new TimelineMax();

    t5scroll
        .set('#about', { rotate:0 })
        // .to('.container-fluid', { background: 'white',scaleY:0 })

        .to('#about', 10, {  rotate:-360 })
    var scene5 = new ScrollMagic.Scene({
        triggerElement: '.line1',
        duration: "400px",
        triggerHook: "0.27"
    })

        .setTween(t5scroll)


        .addIndicators({
            name: 'rotate',
            colorStart: 'green',
            colorEnd: 'red',
            indent: 300
        })
        .addTo(controller);


    // scrolling function  //
    const circleType = new CircleType(
        document.getElementById("rotated")
    ).radius(40);
    $(window).scroll(function () {
        var offset = $(window).scrollTop();
        offset = offset * 0.1;
        $(".circular-text").css({
            "-moz-transform": "rotate(" + offset + "deg)",
            "-webkit-transform": "rotate(" + offset + "deg)",
            "-o-transform": "rotate(" + offset + "deg)",
            "-ms-transform": "rotate(" + offset + "deg)"
        })
    });

    // let container =document.getElementById("prasad");
    // const text=new Blotter.Text("PRASAD VALLABHANENI",{
    //     family:' Monument Extended Light, Helvetica Neue, Helvetica, Arial, sans- serif',
    //     size:20,
    //     fill:"black"
    // });
    // let material=new Blotter.LiquidDistortMaterial();
    // material.uniforms.uSpeed.value=0.3;
    // material.uniforms.uVolatility.value=0.1;
    // material.uniforms.uSpeed.value=0.1;
    // let blotter=new Blotter(material,{
    //     texts:text
    // });
    // let scope=blotter.forText(text);
    // scope.appendTo(container);

})
