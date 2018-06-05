$(document).ready(function(){
    
    // Init ScrollMagic
	var controller = new ScrollMagic.Controller();
    
    // pin the header
	var pinIntroScene = new ScrollMagic.Scene({
		triggerElement: '#header',
		triggerHook: 0,
		duration: '60%'
	})
	.setPin('#round', {pushFollowers: true})
//    .addIndicators({name:'pin'})
	.addTo(controller);
    
    
    // loop through each .project element
	$('.fadeIn,.fadeInQuick').each(function(){
        var fadeIn = new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: 0.5
            })
            .setClassToggle(this, 'fadedIn') // add class to project01
//            .addIndicators({
//                name: 'fade scene',
//                colorTrigger: 'black',
//                colorStart: '#75C695',
//                colorEnd: 'pink'
//            }) 
            .addTo(controller)
    })
    
    
     var sickleScene = new ScrollMagic.Scene({
            triggerElement: '#sickle',
                triggerHook: 0.7,
//                duration: 200
        })
        .setTween('#sickle',.7, {y: '-33%'})
//            .addIndicators({name: "death"}) 
        .addTo(controller);
    
    
    
     var lookChipScene = new ScrollMagic.Scene({
            triggerElement: '#base5'    ,
                triggerHook: 0.3,
        })
        .setTween('#chip_eyeball',.7, {x: '-90%'})
//            .addIndicators({name: "death"}) 
        .addTo(controller);
    
    
     var removeChipScene = new ScrollMagic.Scene({
            triggerElement: '#chip_lid',
                triggerHook: 0.1
        })
        .setTween('#chip_lid',.7, {x: '90%'})
//            .addIndicators({name: "death"}) 
        .addTo(controller);
    
    
    
    
     var deathScene = new ScrollMagic.Scene({
                triggerElement: '#death',
//                triggerHook: 0.7,
//                duration: 200
            })
            .setTween('#death',.7, {y: '15%'})
//            .addIndicators({name: "death"}) 
            .addTo(controller);
    
    
    
        var popUp = new ScrollMagic.Scene({
                triggerElement: '#look_behind',
                triggerHook: 0.7,
                duration:'30%'
            })
            .setTween('#look_behind', {scale:1})
//            .addIndicators({name: "look_behind"}) 
            .addTo(controller);
    
//    var tween = TweenMax.fromTo();
    var popUp2 = new ScrollMagic.Scene({
                triggerElement: '#bang',
                triggerHook: 0.7,
                duration:'30%'
            })
            .setTween('#bang', {scale:1})
//            .addIndicators({name: "bang"}) 
            .addTo(controller);

     var misteriesScene = new ScrollMagic.Scene({
            triggerElement: '#base6',
                triggerHook: 0.8,
//                duration: 200
        })
        .setTween('#misteries',.7, {y: '-165%'})
//            .addIndicators({name: "death"}) 
        .addTo(controller);
    
    
    var mouthScene = new ScrollMagic.Scene({
            triggerElement: '#mouth',
                triggerHook: 0.7,
//                duration: 200
        })
        .setTween('#mouth',.7, {scale:1})
//            .addIndicators({name: "death"}) 
        .addTo(controller);
    
    var eyeRollScene = new ScrollMagic.Scene({
            triggerElement: '#eyeballs',
                triggerHook: 0.3,
//                duration: 200
        })
        .setTween('#eyeballs',.7, {y:'-15%', x:'-15%"'})
//            .addIndicators({name: "death"}) 
        .addTo(controller);
    
})

    
    function topFunction(){
        window.scrollTo(0, window.innerHeight*2.1);
    }