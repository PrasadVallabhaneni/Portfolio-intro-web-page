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


    // // scene1//
   

    var scene1 = new ScrollMagic.Scene({
        triggerElement: '.line3',
    
        triggerHook: "0.1"
    })

      .setClassToggle('.color','color1')
        

        .addIndicators(
            {
                name:'color',
                colorStart:'green',
                colorEnd:'red',
                indent:200
            }

        )
        .addTo(controller);
    
        // scene2//
    var t1scroll = new TimelineMax();

    t1scroll
        .set('.content', { opacity: 1 })
        .to('.content', 2, { opacity: 0 })

    var scene2 = new ScrollMagic.Scene({
        triggerElement: '.line2',
         duration:'300px',
        triggerHook: "0.25"
    })

        .setTween(t1scroll)


        .addIndicators(
            {
                name: 'fadeout',
                colorStart: 'green',
                colorEnd: 'red',
                indent: 200
            }

        )
        .addTo(controller);

    

   
    // scrolling function  //
    // const circleType = new CircleType(
    //     document.getElementById("rotated")
    // ).radius(40);
    // $(window).scroll(function () {
    //     var offset = $(window).scrollTop();
    //     offset = offset * 0.1;
    //     $(".circular-text").css({
    //         "-moz-transform": "rotate(" + offset + "deg)",
    //         "-webkit-transform": "rotate(" + offset + "deg)",
    //         "-o-transform": "rotate(" + offset + "deg)",
    //         "-ms-transform": "rotate(" + offset + "deg)"
    //     })
    // });

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
