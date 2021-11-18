var switchOn = document.getElementById("switchOn");
var switchOff = document.getElementById("switchOff");
var rolling = document.getElementById("rolling");
var airplane = document.getElementById("airplane");
var swish = document.getElementById("swish");
var wallBump = document.getElementById("wallBump");
var Flapping = document.getElementById("Flapping");
var Fan = document.getElementById("Fan");
var parachuteReady = document.getElementById("parachuteReady");
var bubblePop = document.getElementById("bubblePop");
var panic = document.getElementById("panic");
var PickMUp = document.getElementById("PickMUp");
var PutMDown = document.getElementById("PutMDown");
var appear = document.getElementById("appear");
var bubblesUp = document.getElementById("bubblesUp");
var explosion = document.getElementById("explosion");
var ballClick = document.getElementById("ballClick");
var scroll = document.getElementById("scroll");
var finalsong = document.getElementById("finalsong");


var tlFirst = anime.timeline({
  easing: 'easeOutExpo'
});

// Add children

tlFirst.add({
  targets: '#scene3Back',
  zIndex: 0,
  duration: 0
})

tlFirst.add({
  targets:".Part1Text1",
  translateY:'-15%',
})

tlFirst.add({
  targets: '.Part1Text1',
  translateX: '1.8%',
  opacity: 1,
  delay: anime.stagger(75)
})

tlFirst.add({
  targets: '.drawb',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  //duration: 1500,
  direction: 'alternate',
  loop: true
})



tlFirst.add({
  targets: '.Part1Text1',
  translateY: '-35%'
})

tlFirst.add({
targets: '.Part2Text1',
translateY: '-15%',
})

tlFirst.add({
  targets: '.Part2Text1',
  translateX: '1.8%',
  opacity: 1,
  delay: anime.stagger(75) // increase delay by 100ms for each elements.
})

tlFirst.add({
  targets: '.Part2Text1',
  translateY: '-35%'
})

tlFirst.add({
  targets: '#QMARK',
  translateY: '-35%' ,
  translateX: '1.3%',
  opacity: 1 
})

tlFirst.add({
  targets: '#QMARK',
  scale: 2,
   translateX: ['1.3%','-63%'],
   translateY: ['-35%','-12%']
})



var click = 0 ;
var hover = 0 ;

/*tlFirst.finished.then(function() {
	var x = document.getElementById("hoverBox");
  	x.addEventListener("click", meh);
  	x.addEventListener("mouseover", try1);
  	x.addEventListener("mouseout", try2);
 if((hover == 0) && (click == 0))
 {
 	var throb = anime({
 	targets: '#QMARK',
 	scale: 2.9 ,
 	loop: true ,
 	direction: 'alternate',
 	easing: 'easeInOutExpo'
	}) 
}
else{
	throb.pause() ;
}

}); */

tlFirst.finished.then(function() {
	thStart() ;
});

function thStart(){
	var x = document.getElementById("hoverBox");
	x.addEventListener("mouseover", try1);
  	x.addEventListener("mouseout", try2);
  	x.addEventListener("click", meh);
  	
 
 	var throb = anime({
    targets: '#QMARK',
    translateY: '-10%',
    direction: "alternate",
    easing:'easeOutExpo',
    duration: 600,
    loop: true

	}) 



 	function meh(){
	//document.getElementById("bod").style.backgroundColor = "#e6bd3a" ;
  x.removeEventListener("click", meh);
	click = 1 ;
	throb.pause() ;
	document.getElementById("hoverBox").style.display = "none";
  rolling.play() ;
	tlBaldrop.play() ;
	}

	function try1(){
	document.getElementById("circ1").style.backgroundColor = "#e6bd3a" ;
	document.getElementById("hoverBox").style.cursor = "pointer";
  switchOff.pause() ;
  switchOn.play() ;
	throb.pause() ;
	hover = 1 ;}

	function try2(){
	if(click == 0)
	{document.getElementById("circ1").style.backgroundColor = "#53687E" ;
  switchOn.pause() ;
  switchOff.play() ;
	throb.play() ;
 }

	document.getElementById("hoverBox").style.cursor = "auto";
}

}


var tlBaldrop = anime.timeline({
  		easing: 'easeOutExpo',
  		autoplay: false 
	});
	
	tlBaldrop.add({
 		targets: '#bod',
 		backgroundColor: '#e6bd3a' ,
 		duration: 500,
 		easing: 'easeInOutExpo'
	}) 

  tlBaldrop.add({
    targets: '#circ1',
    zIndex:-5,
    opacity:0,
    duration: 0.5
  })

  tlBaldrop.add({
    targets: '#ball3',
      translateY: '45%',
      translateX: '51%',
      duration: 20
  })


	tlBaldrop.add({
		targets: '#BALL',
  		opacity: 0 ,
  		duration: 20
  })

	tlBaldrop.add({
		targets: '#ball3',
  		opacity: 1 ,
  		duration: 300,
      scale: 2
	})

	tlBaldrop.add({
		targets: '#ball3',
  		translateY: '78%',
  		duration: 900
	})

  tlBaldrop.add({
    targets: '#ball3',
      translateX: '49.5%',
      duration: 500
  })

  tlBaldrop.add({
    targets: '#ball3',
      translateY: '80.5%',
      duration: 500
  })

  tlBaldrop.add({
    targets: '#ball3',
      translateX: '51.5',
      duration: 500
  })

  tlBaldrop.add({
    targets: '#ball3',
      translateY: '83%',
      duration: 500
  })

  tlBaldrop.add({
    targets: '#ball3',
      translateX: '49%',
      duration: 500
  })

  tlBaldrop.add({
    targets: '#ball3',
    translateY: '88%',
    duration: 500,
    zIndex: 30
  })
	
tlBaldrop.finished.then(function() {
	transition1() ;
});

function transition1(){
	var eh = anime({
 	targets: '#ball3',
 	keyframes: [
    {translateY: '92%', translateX: "40%"},
  ],
 	duration: 4000
})
anime({
 	targets: '#TEXT1',
 	translateY: -460,
  opacity:0,
 	duration: 1000
})
 anime({
 	targets: '.bulbie',
 	translateY: -1000,
  opacity: 0,
 	duration: 1000
})

eh.finished.then(function() {
	tlScene2.play() ;
});

}
	
var tlScene2 = anime.timeline({
  		easing: 'easeOutExpo',
  		autoplay: false 
});

tlScene2.add({
  targets: '#Text2Scene2 path',
  translateY: "20%"
})

tlScene2.add({
 	targets: '#Text2Scene2 path',
  translateX: '1.8%',
  opacity: 1,
  delay: anime.stagger(90)
})

tlScene2.add({
 targets: '.draw2',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1000,
  opacity: 1 
})

tlScene2.add({
  targets: '#hover1',
  translateY: '89%',
  translateX: '38%',
  duration: 0
})

tlScene2.add({
  targets: '#Text2Scene2 path',
  translateY: '0%',
  duration: 500
})

tlScene2.add({
  targets: "#clickDr",
  zIndex: 30,
  duration: 5
})

tlScene2.add({
  targets: "#paraline",
  translateY:'5%',
  duration: 5
})


tlScene2.finished.then(function() {
	anime({
 targets: '.scene2Ar',
  opacity: 1,
  delay: anime.stagger(150),
  loop: true 
})

var ballthrob =	anime({
 	targets: '#ball3',
  	scale: 3,
  	easing: 'easeInExpo',
  	direction: 'alternate',
  	duration: '650',
  	loop: true
})

var xPar = 0;
var yPar =0 ;

Draggable.create("#ball3", {
    type:"x,y", bounds:$("#newBall"),
    onDragEnd:function(e) {
        if (this.hitTest("#circlePar")) {
            this.kill();
           parlineDisplay() ;
        }
    
    }
});

  var y = document.getElementById("hover1");
  y.addEventListener("mouseenter", function(){
    document.getElementById("hover1").style.cursor = "pointer";
  parachuteReady.play() ; 

  document.getElementById("clickDr").style.zIndex = "-1" ;
  document.getElementById("ball3").style.zIndex = "16" ;
  ballthrob.pause() ;
  document.getElementById("para").style.opacity="1";});

  

});

function parlineDisplay(){
  airplane.play();
  var tlfly=anime.timeline({
    loop: 1
  });

	tlfly.add({
 	targets: '#ball3',
 	translateY: '20.5%'},0)

  tlfly.add({
    targets: '#paraline',
    translateY: '46%'},0)

  tlfly.add({
  targets: '#Text2Scene2',
  opacity: 0,
  translateY: -400,
  duration:6000},0)

  tlfly.add({
    targets: '#plane',
    opacity: 1,
    duration: 1
  },0)

  tlfly.add({
    targets: '#plane',
    translateX: ['-100%','100%'],
    translateY: ['0%', '-50%'],
    duration: 12000
  },0)

  
var stopScene2 = anime({
  targets: '#scene2Box',
  translateY: -800,
  opacity:0,
  duration: 3000
})

stopScene2.finished.then(function() {
  swish.play() ;
  startScene3() ;
})
	//tlS2To3.play() ;
}



function startScene3(){

    tlScene3.play() ;
}


var tlScene3 = anime.timeline({
      easing: 'easeOutExpo',
      autoplay: false 
});

tlScene3.add({
  targets: '.Scene3P1',
  opacity: 1,
  duration: 800,
  easing: "linear"
})

tlScene3.add({
  targets: '#para',
  rotateZ: 60,
  translateX: "100%",
  opacity:0,
  duration: 2000
})

tlScene3.add({
 targets: '#Scene3Text path',
  translateX: '1.8%',
  opacity: 1,
  delay: anime.stagger(75)
})





  
var signStopped = false ;

tlScene3.finished.then(function(){ startWall(); });

function startWall(){
var x = document.getElementById("polySign1");
x.addEventListener("mouseover", flickerStop);
x.addEventListener("mouseout", flickerStart);
x.addEventListener("click", sign1Click);
  
  function flickerStart(){
    document.getElementById("polySign1").style.cursor = "auto";
     if(signStopped == false){
      signFlicker.play() ;
    }
  }

  anime({
  targets: '#scene3Back',
  zIndex: 40})

  var signFlicker =  anime({
  targets: '#SIGN1 polygon',
  fill: '#ffffff',
  direction: 'alternate',
  opacity: 0.8,
  duration: 600,
  easing: "linear",
  loop: true})

  function flickerStop(){
    if(signStopped == false){
      document.getElementById("polySign1").style.cursor = "pointer";
      signFlicker.pause() ;
    }}

  function sign1Click(){
    x.removeEventListener("click", sign1Click);
    x.removeEventListener('mouseover', flickerStop);
    x.removeEventListener('mouseout', flickerStart);
    var signStopped = true ;
    console.log(signStopped) ;
    signFlicker.pause() ;

    anime({
        targets: '#sign2Text',
        opacity:0 })

    anime({
    targets: '#ball3',
    keyframes: [
    {translateX: '-32%', translateY: '12%', easing: "linear",duration: 600},
    {translateX: '-30%', duration: 1500}]})

    var ballWall =  anime({
    targets: '#wall',
    translateY:'-5%',
    opacity: 1,
    delay: 550,
    duration: 1000})

    wallBump.play() ;

    ballWall.finished.then(function() {
      StartScene4() ; });
    }

} // end main function


//morph1() ;

function StartScene4(){
    tlScene4.play() ;
}

var tlScene4 = anime.timeline({
      easing: 'easeOutExpo',
      autoplay: false 
});

tlScene4.add({
  targets: '#Scene3Text path',
  translateX: 25,
  opacity: 0,
  duration: 1
})

tlScene4.add({
  targets: '#Scene4Text path',
  translateX: 25,
  opacity: 1,
  delay: anime.stagger(75)
})


tlScene4.finished.then(function(){ startMorph(); });

function startMorph(){
var x = document.getElementById("BIRDT");
x.addEventListener("mouseover", flickerStop);
x.addEventListener("mouseout", flickerStart);
x.addEventListener("click", sign1Click);
var signStopped = false ;  
  
  function flickerStart(){
    document.getElementById("BIRDT").style.cursor = "auto";
     if(signStopped == false){
      signFlicker.play() ;
    }
    else{ signFlicker.pause() ;}
  }

  anime({
  targets: '#scene3Back',
  zIndex: 40})

  var signFlicker =  anime({
  targets: '#BIRDT polygon',
  fill: '#ffffff',
  direction: 'alternate',
  opacity: 0.5,
  duration: 600,
  easing: "linear",
  loop: true})

  function flickerStop(){
    if(signStopped == false){
      document.getElementById("BIRDT").style.cursor = "pointer";
      signFlicker.pause() ;
    }}

  function sign1Click(){
    x.removeEventListener("click", sign1Click);
    x.removeEventListener('mouseover', flickerStop);
    x.removeEventListener('mouseout', flickerStart);
    var signStopped = true ;
        
        signFlicker.pause() ;

         anime({
        targets: '#sign1Text',
        opacity:0 })


     var morphie =   anime({
        targets: '#BIRDT',
        points: [
        {value: '682.88,380.32 697.67,439.39 712.16,330.72 682.94,380.66 654.24,328.01 663.69,436.8' }
        ],
        easing: 'easeOutQuad',
        duration: 2000,
        opacity:1 })

  
  morphie.finished.then(function() {
      document.getElementById('BIRDT').style.opacity='0';
      skoenlapperLoopBegin() ;
    }) ;

}
}





function skoenlapperLoopBegin(){
Flapping.play() ;
var tlFirst = anime.timeline({
   loop: 4
});


tlFirst.add({
  targets: '#skoenToeNew',
  opacity: 1,
  duration: 1
  
})

tlFirst.add({
  targets: '#skoenToeNew',
  duration: 100
})

tlFirst.add({
  targets: '#skoenToeNew',
  opacity: 0,
  duration: 1

})

tlFirst.add({
  targets: '#skoenOopNew',
  opacity: 1,
  duration: 1
})

tlFirst.add({
  targets: '#skoenOopNew',
  duration: 100
})

tlFirst.add({
  targets: '#skoenOopNew',
  opacity: 0,
  duration: 1
}) 
tlFirst.finished.then(function() {
      skoenBeweeg() ;
    }) ;


}

function skoenBeweeg(){
  console.log("there") ;
var tl2 = anime.timeline({
   loop: false 
    });

tl2.add({
 targets: '#skoenOopNew',
 opacity: 1 ,
 duration: 1 
})

tl2.add({
 targets: '#skoenall',
 translateY: '26.5%',
 translateX: '-40.5%',
 duration: 500,
 easing: "linear"
})

tl2.add({
 targets: '#skoenOopNew',
 opacity: 0 ,
 duration: 1 
})

tl2.finished.then(function() {
      skoenloop2() ;
    }) ;

}



function skoenloop2(){

var tlFirst = anime.timeline({
   loop: 2
});


tlFirst.add({
  targets: '#skoenToeNew',
  opacity: 1,
  duration: 1
  
})

tlFirst.add({
  targets: '#skoenToeNew',
  duration: 100
})

tlFirst.add({
  targets: '#skoenToeNew',
  opacity: 0,
  duration: 1

})

tlFirst.add({
  targets: '#skoenOopNew',
  opacity: 1,
  duration: 1
})

tlFirst.add({
  targets: '#skoenOopNew',
  duration: 100
})

tlFirst.add({
  targets: '#skoenOopNew',
  opacity: 0,
  duration: 1
}) 

tlFirst.add({
  targets: '#skoenOopNew',
  opacity:1,
  duration: 1
})

tlFirst.finished.then(function() {move()}) ;
}

function move() {
  anime({
    targets: '#skoenOopNew',
    translateY: '-24%',
    translateX: '30%'
  })
  anime({
    targets: '#skoenToeNew',
    translateY: '-24%',
    translateX: '30%'
  })
  anime({
    targets: '#ball3',
    translateY: '0%',
    translateX: '-15%'
  })

  anime ({
    targets: '#scene3Back',
    translateY: "200%",
    opacity:0,
    duration: 3000
  })

  anime ({
    targets: '#TEXT3',
    translateY: '200%',
    opacity:0,
    duration:3000
  })

  var tltt=anime.timeline({
    loop: 10
  });

  tltt.add({
  targets: '#skoenOopNew',
  opacity: 1 ,
  duration: 1
  
})

tltt.add({
  targets: '#skoenOopNew',
  duration: 100
})

tltt.add({
  targets: '#skoenOopNew',
  opacity: 0,
  duration: 1

})

tltt.add({
  targets: '#skoenToeNew',
  opacity: 1,
  duration: 1
})

tltt.add({
  targets: '#skoenToeNew',
  duration: 100
})

tltt.add({
  targets: '#skoenToeNew',
  opacity: 0,
  duration: 1
}) 

tltt.add({
  targets: '#skoenToeNew',
  opacity:1,
  duration: 1
})

tltt.finished.then(function() {Scene5Text();});
}



function Scene5Text(){
  var tl5 = anime.timeline({
  easing: 'easeOutExpo'
});

  tl5.add({
    targets: "#Scene5Text",
    opacity: 1
  })
 tl5.add({
  targets: '#Scene5Text1 path',
  translateX: '1.8%',
  opacity: 1,
  delay: anime.stagger(60)})

 tl5.finished.then(function() {
             WaaierScene() ;    }) ;
      

}





function WaaierScene(){
      var stopped = false ;
      var btnWaai = document.getElementById("switchButton") ;
      btnWaai.addEventListener("click", WaaierLoopBegin);
      btnWaai.addEventListener("mouseenter", changeCol1);
      btnWaai.addEventListener("mouseleave", changeCol2);
      btnWaai.style.zIndex = "61" ;

      anime({
        targets: "#FAN",
        opacity: 1,
        duration: 50,
        zIndex: 60
      })

      var loopBtn = anime({
        targets: '#switchButton',
        stroke: '#999',
        duration: 700,
        easing: 'easeOutExpo',
        direction: 'alternate',
        loop: true 
        })

      function changeCol1(){
        document.getElementById("switchButton").style.cursor = "pointer";
        loopBtn.pause() ;
       anime({
        targets: '#switchButton',
        stroke: '#999',
        duration: 10,
        easing: 'easeOutExpo'
        })
      }

      function changeCol2(){
        document.getElementById("switchButton").style.cursor = "auto";
        if(stopped == false){ loopBtn.play() ;
       anime({
        targets: '#switchButton',
        stroke: '#999',
        duration: 10,
        easing: 'easeOutExpo'})
        }
       
      }

      function WaaierLoopBegin(){
        Fan.play() ;
      btnWaai.removeEventListener("click", WaaierLoopBegin);
      stopped = true ;
      loopBtn.pause() ;
      var tlW = anime.timeline({
         loop: 1
      });

      tlW.add({
        targets: '.up , .wind',
        duration: 1,
        opacity: 0
        
      })

      tlW.add({
        targets: '.down , .wind',
        opacity: 1 ,
        duration: 50
        
      })

      tlW.add({
        targets: '.down , .wind',
        duration: 50
      })

      tlW.add({
        targets: '.down , .wind',
        opacity: 0,
        duration: 1

      })

      tlW.add({
        targets: '#side , .blow',
        opacity: 1,
        duration: 1
        
      })

      tlW.add({
        targets: '#side, .blow',
        duration: 50
      })

      tlW.add({
        targets: '#side, .blow',
        opacity: 0,
        duration: 1

      })

      tlW.add({
        targets: '.up, #wind1 , #blow1 , #wind3',
        opacity: 1,
        duration: 1
      })

      tlW.add({
        targets: '.up , #wind1 , #blow1 , #wind3',
        duration: 50
      })

      tlW.add({
        targets: '.up , #wind1 , #blow1 , #wind3',
        opacity: 0 ,
        duration: 1
      }) 

      tlW.add({
        targets: '.up , .wind',
        duration: 1,
        opacity: 0
        
      })

      tlW.add({
        targets: '.down , .wind',
        opacity: 1 ,
        duration: 50
        
      })

      tlW.add({
        targets: '.down , .wind',
        duration: 50
      })

      tlW.add({
        targets: '.down , .wind',
        opacity: 0,
        duration: 1

      })

      tlW.add({
        targets: '#side , .blow',
        opacity: 1,
        duration: 1
        
      })

      tlW.add({
        targets: '#side, .blow',
        duration: 50
      })

      tlW.add({
        targets: '#side, .blow',
        opacity: 0,
        duration: 1

      })

      tlW.add({
        targets: '.up, #wind1 , #blow1 , #wind3',
        opacity: 1,
        duration: 1
      })

      tlW.add({
        targets: '.up , #wind1 , #blow1 , #wind3',
        duration: 50
      })

      tlW.add({
        targets: '.up , #wind1 , #blow1 , #wind3',
        opacity: 0 ,
        duration: 1
      }) 

      tlW.add({
        targets: '.up , .wind',
        duration: 1,
        opacity: 0
        
      })

      tlW.add({
        targets: '.down , .wind',
        opacity: 1 ,
        duration: 50
        
      })

      tlW.add({
        targets: '.down , .wind',
        duration: 50
      })

      tlW.add({
        targets: '.down , .wind',
        opacity: 0,
        duration: 1

      })

      tlW.add({
        targets: '#side , .blow',
        opacity: 1,
        duration: 1
        
      })

      tlW.add({
        targets: '#side, .blow',
        duration: 50
      })

      tlW.add({
        targets: '#side, .blow',
        opacity: 0,
        duration: 1

      })

      tlW.add({
        targets: '.up, #wind1 , #blow1 , #wind3',
        opacity: 1,
        duration: 1
      })

      tlW.add({
        targets: '.up , #wind1 , #blow1 , #wind3',
        duration: 50
      })

      tlW.add({
        targets: '.up , #wind1 , #blow1 , #wind3',
        opacity: 0 ,
        duration: 1
      }) 

      tlW.add({
        targets: "#skoenToeNew",
        translateX: '-100%',
        duration: 7000,
        easing: "easeOutExpo"
      }, 200)

      tlW.add({
        targets: "#ball3",
        translateX: '-100%',
        duration: 7000,
        easing: 'easeOutExpo'
      }, 400)
      var tlW2 = anime.timeline({
         loop: 8
      });

      tlW2.add({
        targets: '.up , .wind',
        duration: 1,
        opacity: 0
        
      })

      tlW2.add({
        targets: '.down , .wind',
        opacity: 1 ,
        duration: 50
        
      })

      tlW2.add({
        targets: '.down , .wind',
        duration: 50
      })

      tlW2.add({
        targets: '.down , .wind',
        opacity: 0,
        duration: 1

      })

      tlW2.add({
        targets: '#side , .blow',
        opacity: 1,
        duration: 1
        
      })


      tlW2.add({
        targets: '#side, .blow',
        duration: 50
      })

      tlW2.add({
        targets: '#side, .blow',
        opacity: 0,
        duration: 1

      })

      tlW2.add({
        targets: '.up, #wind1 , #blow1 , #wind3',
        opacity: 1,
        duration: 1
      })

      tlW2.add({
        targets: '.up , #wind1 , #blow1 , #wind3',
        duration: 50
      })

      tlW2.add({
        targets: '.up , #wind1 , #blow1 , #wind3',
        opacity: 0 ,
        duration: 1
      }) 


      tlW2.finished.then(function() {
             waaiweg() ;    }) ;


      }

      function waaiweg() {
      anime({
        targets: "#FAN",
        translateX: '100%',
        duration: 3000
      })
      var endScene5 = anime({
        targets: '#Scene5Text',
        translateX: '100%',
        duration: 3000
      })

      endScene5.finished.then(function(){
        Scene6Start() ;
        anime({
          targets: "#HoverMazeSVG",
          zIndex: 30
        })
      });

    }


}



function Scene6Start(){

 panic.play();
var tlFirst = anime.timeline({
        easing: 'easeOutExpo',
        loop: false
      });


      tlFirst.add({
        targets: "#skoenToeNew",
        opacity: 0,
        translateX: '60%',
        duration: 1
      })

      tlFirst.add({
        targets: "#skoenToeNew",
        opacity: 1,
        duration: 1
      })

      tlFirst.add({
        targets: "#skoenToeNew",
        translateX: "-100%",
        duration: 4000
      })

      tlFirst.add({
        targets: "#ballScene6",
        translateX: ['60%', '-2%'],
        duration: 500,
        opacity: 1
      }, 750)


      tlFirst.add({
        targets: '#Scene6Text path',
        translateX: '-2.8%'  })

      tlFirst.add({
        targets: '#Scene6Text path',
        translateX: '1%',
        opacity: 1,
        delay: anime.stagger(100) 
      })

      tlFirst.add({
        targets: '#thoughtScene',
        translateX: '-4%',
      })

      tlFirst.add({
        targets: '.thought1POPUP',
        translateX: '2%',
        opacity: 1,
        delay: anime.stagger(100)
      })

       tlFirst.add({
        targets: '.thought2POPUP',
        translateX: '2%',
        opacity: 1,
        delay: anime.stagger(100)
      })

        tlFirst.add({
        targets: '.thought3POPUP',
        translateX: '2%',
        opacity: 1,
        delay: anime.stagger(100)
        
      })

       tlFirst.add({
        targets: '.thought4POPUP',
        translateX: '2%',
        opacity: 1,
        delay: anime.stagger(100)
        
      })

        tlFirst.add({
        targets: '.thought5POPUP',
        translateX: '2%',
        opacity: 1,
        delay: anime.stagger(100)
        
      })

      tlFirst.finished.then(function(){
        loopThoughtBub() ;
      }) ;
      
}


function loopThoughtBub(){


  var move2 = anime({
    targets: '#thought5E ellipse ',
    translateX: '2.3%',
    delay: anime.stagger(100),
    loop: true
  }) 

    var move1 = anime({
    targets: '#main_3_',
    scale: 1.02,
    direction: "alternate",
    easing:'easeOutExpo',
    duration: 600,
    loop: true
  }) 

   document.addEventListener('keydown', enterBubble) ;
   function enterBubble(event){
       if (event.keyCode == 13) {
        //code to execute here
        document.removeEventListener('keydown', enterBubble) ;
        bubblePop.play() ;
        move1.pause() ;
        move2.pause() ;
        Scene6End1() ;
        document.getElementById("Scene6Text").style.opacity = "0" ;
        console.log("pressed enter") ;
    }
    else{console.log("pressed enter not") ;}
   } }




function Scene6End1(){
  var tlFirst = anime.timeline({
         loop: false
      });



      tlFirst.add({
        targets: '#thoughtScene',
        scale: 0,
        easing: 'easeOutExpo',
        transformOrigin: '46% 30%',
        duration: 1000
      })

       tlFirst.add({
        targets: '#MainCloud',
        delay: -1000,
        translateY: ['-20%','0%'],
        opacity: 1,
        easing: 'easeOutExpo',
        transformOrigin: '50% 50%',
        duration: 1000
      })


       tlFirst.finished.then(function(){

        var tlmove = anime.timeline({
        });

        tlmove.add({
          targets: '#MainCloud',
          translateX: '-10%',
          rotate: '-20deg',
          duration: 2000,
          easing: 'easeOutExpo'
       })

        tlmove.add({
          targets: '#ball6',
          translateX: '-8%',
          duration: 2000,
          easing: 'easeOutExpo'
          },'-=2000')

       



      tlmove.finished.then(function(){

        var cloudLoop = anime({
             targets: '#MainCloud',
            translateX: ['-10%','5%'],
            rotate: ['-20deg','20deg'],
            loop: 4 ,
            easing: 'cubicBezier(.5, .05, .1, .3)',
            duration: 2000,
            direction: 'alternate'
        })

        var ballCloudLoop = anime({
             targets: ' #ball6',
            translateX: ['-8%','4%'],
            loop: 4 ,
            easing: 'cubicBezier(.5, .05, .1, .3)',
            duration: 2000,
            direction: 'alternate'
        })

   /*     anime({
            targets: '#Scene6Text',
            opacity: 0,
            delay: 2,
            duration: 1
        })*/

        var textScene7 = anime({
            targets: '#Scene7Text_one path',
            translateX: '2.5%',
            opacity: 1,
            delay: 200,
            delay: anime.stagger(100) 
        })

        textScene7.finished.then(function(){
          startScene7() ;
          
          });

      })
      })
}


function startScene7(){
   var rectLoop = anime({
              targets: '#M',
              scale: 1.05,
              direction: 'alternate',
              duration: 1000,
              loop: true })
  rectLoop.pause() ;
  var mazeStagger = anime({
              targets: '.maze',
              translateY: '-1.8%',
              direction: 'alternate',
              delay: anime.stagger(100),
              loop: true })

    var hoverBox = document.getElementById("MazeHover") ;
    hoverBox.addEventListener("mouseenter", showM);
    hoverBox.addEventListener("mouseleave", hideM);
  //  hoverBox.style.opacity= "1" ;

    function showM(){
      console.log("hello");
      document.getElementById("MazeHover").style.cursor = "pointer";
      PickMUp.play() ;
       document.getElementById("M").style.opacity ="1" ;
        document.getElementById('Mclick').style.opacity ="0" ;
        document.getElementById('Mclick_1_').style.opacity ="0" ;
        document.getElementById('Mclick_2_').style.opacity ="0" ;
        document.getElementById('Mclick_3_').style.opacity ="0" ;
       rectLoop.play() ;}

        

    function hideM(){
      document.getElementById("MazeHover").style.cursor = "auto";
      console.log("hello");
      PutMDown.play() ;
       document.getElementById("M").style.opacity ="0" ;
        document.getElementById('Mclick').style.opacity ="1" ;
        document.getElementById('Mclick_1_').style.opacity ="1" ;
        document.getElementById('Mclick_2_').style.opacity ="1" ;
        document.getElementById('Mclick_3_').style.opacity ="1" ;
        rectLoop.pause() ;

    }

    document.getElementById("MazeHover").addEventListener("click", Scene7Start) ;

    function Scene7Start(){
        document.getElementById("MazeHover").removeEventListener("click", Scene7Start) ;
        document.getElementById("lastScenes").style.zIndex="70";
        rectLoop.pause() ;
        mazeStagger.pause() ;
        
        document.getElementById("MainCloud").style.opacity ="0" ;
        document.getElementById("M").style.opacity ="0" ;
        hoverBox.removeEventListener("mouseenter", showM); 
        hoverBox.removeEventListener("mouseleave", hideM);

        var tlScene7 = anime.timeline({
              easing: 'easeOutExpo',
              loop: false
        });
        appear.play() ;

        tlScene7.add({
                 targets: '#ball6',
                  translateX: '12.2%',
                  translateY: '20%',
                  scale: 0.8,
                 opacity: 1,
              })

        tlScene7.add({
                 targets: '.buildM',
                  translateY: ['-50%','0%'],
                 opacity: 1,
                delay: anime.stagger(300),
              
              })
          
          tlScene7.add({
                  targets: '#Scene7Text_one path',
                  translateX: 300,
                  duration: 3000
              })

           tlScene7.add({
                  targets: '#Scene7Text_two path',
                  translateX: '1.8%',
                  opacity: 1,
                  duration: 1500
              })

           tlScene7.add({
                  targets: '#guidePerson',
                  rotate: '1turn',
                  opacity: 1,
                  transformOrigin:'0% 0%',
                  duration: 2000
              })

           tlScene7.finished.then(function(){
            tlScene8Start() ;
           }) ;

        

        }

}



function tlScene8Start(){

  var guideLoop = anime({
    targets: '#guidePerson',
  
  width: '*=1.2',
  height: '*=1.2',
  duration: 500,
  direction:'alternate',
  easing: 'easeOutElastic(1, .8)',
  loop: true
  })
  document.getElementById("guidePerson").addEventListener("click", guideClicked) ;

  function guideClicked(){
    guideLoop.pause() ;
    document.getElementById("guidePerson").removeEventListener("click", guideClicked);

    anime({
    targets: '#Scene7Text_two',
    opacity: 0,
    duration: 1
  })

  var scene8TextDone = anime({
    targets: '#Scene8Text path',
    translateX: '0.8%',
    delay: -1,
    opacity: 1,
    endDelay: 800,
    duration: 1500
  })

  scene8TextDone.finished.then(function(){
    bubblesUp.play() ;
    
    loopBubble.play() ;}) ;

   var loopBubble = anime({
      targets: '.guideBub',
        translateY: '2%',
        opacity: 1,
        autoplay: false,
        delay: anime.stagger(100),
        loop: true,
    })

   document.addEventListener('keydown', pushUP) ;

   function pushUP(event){
      if (event.keyCode == 38) {
            document.getElementById("guideThoughtDisa").style.opacity ="0" ;
        loopBubble.pause() ;
        breakDoors() ;
    }
    else{console.log("pressed not up") ;}
    
    }
   } 


  
}

    
function breakDoors(){
  explosion.play() ;
  var tlScene8 = anime.timeline({
              easing: 'easeOutExpo',
              loop: false
        });


  tlScene8.add({
    targets: '#doorFlat_1_, #doorFlat_2_, #doorFlat',
    rotate: '-180deg',
    opacity: 0,
    duration: 6000,
    easing: "linear"
  })

  tlScene8.add({
    targets: '#doorSkuins_1_ , #doorSkuins_2_ , doorSkuins',
    rotate: '180deg',
    opacity: 0,
    duration: 6000,
    easing: 'linear'
  }, '-=5500')


  tlScene8.add({
    targets: '#ball6',
    translateY: '24%',
    duration: 1000
  }, 2000)

  tlScene8.add({
    targets: '#ball6',
    translateX: '-10%',
    easing: "linear",
    duration: 700
  }, 3000)

  tlScene8.add({
    targets: '#ball6',
    translateX: '-28%',
    translateY: '20%',
    duration: 2000,
    easing: 'easeOutExpo'
  },3700)

  tlScene8.finished.then(function(){
    console.log("tlScene8 finished");
    balltr() ;
  }) ;


} 

function balltr(){
  document.getElementById("lastScenes").style.zIndex ="20" ;
  document.getElementById("scene6").style.zIndex ="80" ;
  
  document.getElementById("ball6").addEventListener("click" , moveToSquare);

  console.log("entered ball tr") ;
  var ballt = anime({
    targets: '#ballScene6',
    rx: '*=1.5',
    ry: '*=1.5',
    direction: 'alternate',
    duration: 300,
    loop: true
})
  
}

function moveToSquare(){
  document.getElementById("ball6").removeEventListener("click" , moveToSquare);
  console.log("enteredMovetosquare") ;
  ballClick.play() ;

  var tlScene9 = anime.timeline({
              easing: 'easeOutExpo',
              loop: false
        });
  tlScene9.add({
    targets: '#Scene8Text',
    opacity: 0 ,
    easing: "linear",
    duration: 1
  })

  tlScene9.add({
    targets: '#ball6',
    translateX: '-31%',
    opacity: 0 ,
    easing: "linear",
    duration: 700
  })

  tlScene9.add({
    targets: '#guidePerson',
    delay: 100,
    keyframes: [
    {skew: '20deg'},
    {skew: '-20deg'},
    {skew: '0deg'},
    {translateX: '13.5%' , translateY: '8%'},
    {width:'*=18', height: '*=2'}

  ],
    easing: "linear",
    duration: 700
  })

  tlScene9.add({
    targets: '#Scene9Text path',
    translateY: '68%',
    opacity: 0,
    duration:'1'
  })

   tlScene9.add({
    targets: '#guidePerson',
    opacity: 0 ,
    easing: "linear",
    duration: 3800
  })

   tlScene9.add({
    targets: '#Scene9Text path',
    delay: -700,
    opacity: 1 ,
    easing: "linear",
    duration: 4000
  })

   tlScene9.add({
    targets: '#Scene9Text path',
    translateY: '22%' ,
    easing: "linear",
    duration: 600
  })

   tlScene9.add({
    targets: '.logoDraw',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    opacity: 1 
  })

   tlScene9.add({
    targets: '.logoDraw, .buildM',
    translateX: '-25.8%',
    easing: 'easeInOutSine',
    duration: 600  })

   tlScene9.add({
    targets: '#industries',
    translateX: ['-10%', '-1.3%'],
    easing: 'easeInOutSine',
    opacity: 1,
    duration: 600  })

tlScene9.finished.then(function(){ startScene10() ;}) ;
   

}

function startScene10(){
  finalsong.play() ;
 window.addEventListener('DOMMouseScroll', scene10End);
    window.addEventListener('mousewheel', scene10End);
    window.addEventListener('wheel', scene10End);

    anime({
    targets: '#scrollImg',
    easing: 'easeInOutSine',
    translateY: '4%',
    translateX: '-0.8%',
    opacity: 1,
    duration: 600  })

    var scrollLoop = anime({
    targets: '#scrollBall',
    translateY: '5%',
    easing: 'linear',
    loop: true ,
    duration: 800  })


function scene10End(){
  scroll.play() ;
  window.removeEventListener('wheel', scene10End);
   window.removeEventListener('DOMMouseScroll', scene10End);
    window.removeEventListener('mousewheel', scene10End);
    
  document.getElementById("scrollImg").style.opacity ="0" ;

  var tlScene10 = anime.timeline({
              easing: 'easeOutExpo',
              loop: false
        });


  tlScene10.add({
    targets: '#Scene9Text',
    translateY: '-30%',
    opacity: 0 ,
    easing: "linear",
    duration: 600
  })

  tlScene10.add({
    targets: '.logoDraw, .buildM',
    delay: -600,
    translateY: '-25%',
    opacity: 1 ,
    easing: "linear",
    duration: 600
  })

  tlScene10.add({
    targets: '#industries',
    delay: -600,
    translateY: '-25%',
    opacity: 1 ,
    easing: "linear",
    duration: 600
  })

  tlScene10.add({
    targets: '#Scene10Text path',
    opacity: 1 ,
    translateY: ['-30%', '0%'],
    easing: "linear",
    duration: 1000
  })

  tlScene10.add({
    targets: '#Scene10Text path',
    easing: "linear",
    duration: 3000
  })
  tlScene10.add({
    targets: '#Scene10Text path',
    opacity: 0,
    easing: "linear",
    duration: 800
  })

   tlScene10.add({
    targets: '#Scene10TextFinal path',
    opacity: 1 ,
    translateY: ['30%', '15%'],
    easing: "linear",
    duration: 1000
  })

   tlScene10.add({
    targets: '#Scene10TextFinal path',
    opacity: 1 ,
    easing: "linear",
    duration: 2500
  })


  tlScene10.finished.then(function(){
    theEnd() ;
  }) ;


}

}//end start scene 10



function theEnd(){
   document.getElementById('Scene10TextFinal').style.opacity = "0" ;
   document.getElementById('scrollImg').style.opacity = "0" ;
   document.getElementById('lastScenes').style.opacity = "0" ;
    document.getElementById('theEnd').style.opacity = "1" ;
    document.getElementById('theEnd').style.zIndex = "95" ;
    document.getElementById('back').style.opacity = "0" ;
    document.getElementById('logoBut').addEventListener("click", showLogo) ;
    document.getElementById('plagBut').addEventListener("click", showPlag) ;
    document.getElementById('ratBut').addEventListener("click", showRat) ;
    document.getElementById('back').addEventListener("click", showBegin) ;

    function removeMainButtons(){
      document.getElementById('back').addEventListener("click", showBegin) ;
      document.getElementById('logoBut').removeEventListener("click", showLogo) ;
      document.getElementById('plagBut').removeEventListener("click", showPlag) ;
    document.getElementById('ratBut').removeEventListener("click", showRat) ;

     document.getElementById('logoBut').style.opacity = "0" ; 
      document.getElementById('plagBut').style.opacity = "0" ;
    document.getElementById('ratBut').style.opacity = "0" ; 

    }

    function showPlag(){
      document.getElementById("plagForm").style.display = "block" ;
      document.getElementById('back').style.opacity = "1" ;
      removeMainButtons() ;
    }

    function showRat(){
      document.getElementById("rationale").style.display = "block" ;
      document.getElementById('back').style.opacity = "1" ;
      removeMainButtons() ;    }

    function showBegin(){
        document.getElementById('back').removeEventListener("click", showBegin) ;
        document.getElementById('back').style.opacity = "0" ;
        document.getElementById("rationale").style.display = "none" ;
        document.getElementById("plagForm").style.display = "none" ;
        document.getElementById("logoImg").style.display = "none" ;
        document.getElementById("url").style.display = "none" ;
        document.getElementById('logoBut').style.opacity = "1" ; 
        document.getElementById('plagBut').style.opacity = "1" ;
      document.getElementById('ratBut').style.opacity = "1" ; 
       document.getElementById('logoBut').addEventListener("click", showLogo) ;
    document.getElementById('plagBut').addEventListener("click", showPlag) ;
    document.getElementById('ratBut').addEventListener("click", showRat) ;
      
    }
    
        
function showLogo(){
      document.getElementById('logoBut').removeEventListener("click", showLogo) ;
      console.log('bravo');
      document.getElementById("logoImg").style.display = "block" ;
      document.getElementById("url").style.display = "block" ;
      document.getElementById('back').style.opacity = "1" ;
      removeMainButtons() ;
    }



}


