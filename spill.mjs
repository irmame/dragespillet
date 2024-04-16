//#region 
// ALDRI ENDRE NOE INNEN FOR Regionen
import * as Actions from "./barneprat/actions.mjs";
import * as Blocks from "./barneprat/blocks.mjs";
import { removeAll } from "./barneprat/globalTimer.mjs";

const GaaTil = (maal) => {
    document.body.innerHTML = "";
    removeAll();
    maal();
}

const Start = (maal) => {
    if (window.location.hash) {
        maal = window.location.hash.replace("#", "")
        eval(maal)();
    } else {
        GaaTil(maal);
    }
}
//#endregion

Start(stasjonkart);

function stasjonkart()
{

// Å gjøre: Gi bedre navn til alle tingene.

const img23 = new Blocks.Image("bilder/dragekart.png", {x:0,y:0,width:750,height:1000});

const img17 = new Blocks.Image("bilder/firkant.png", {x:180,y:405,width:100,height:100});
const img22 = new Blocks.Image("bilder/firkant.png", {x:428,y:590,width:100,height:100});	

const img18 = new Blocks.Image("bilder/trekant.png", {x:325,y:728,width:100,height:100});
const img24 = new Blocks.Image("bilder/trekant.png", {x:455,y:405,width:100,height:100});

    const img19 = new Blocks.Image("bilder/sirkel.png", {x:324,y:188,width:100,height:100});
	const img20 = new Blocks.Image("bilder/sirkel.png", {x:324,y:400,width:100,height:100});
	const img21 = new Blocks.Image("bilder/sirkel.png", {x:260,y:590,width:100,height:100});
	const img25 = new Blocks.Image("bilder/sirkel.png", {x:324,y:880,width:100,height:100});
    const img26 = new Blocks.Image("bilder/sirkel.png", {x:324,y:20,width:125,height:125});
	
    
    Actions.Click(img25,()=>{
        GaaTil(stasjonintro)

    })
    Actions.Click(img18,()=>{
        GaaTil(stasjon1)
    })
    Actions.Click(img22,()=>{
        GaaTil(stasjon2)
    })
    Actions.Click(img21,()=>{
        GaaTil(stasjon3)
    })
    Actions.Click(img17,()=>{
        GaaTil(stasjon4)
    })
    Actions.Click(img20,()=>{
        GaaTil(stasjon5)
    })
    Actions.Click(img24,()=>{
        GaaTil(stasjon6)
    })

    Actions.Click(img19,()=>{
        GaaTil(stasjon7)
    })
    Actions.Click(img26,()=>{
        GaaTil(stasjonslutt)
    })

}


function stasjonintro()
{

// Å gjøre: Gi bedre navn til alle tingene.

	const img9 = new Blocks.Image("bilder/drageintro.JPG", {x:350,y:250,width:250,height:350});
	const sound10 = new Blocks.Sound("lyd/intro.mp3", {loop:false, auto:false});
	
    const home = new Blocks.Image("bilder/home.png", {x:900,y:0,width:100,height:100});
    Actions.Click(home,()=>{
     GaaTil(stasjonkart)
    })
    const speaker = new Blocks.Image("bilder/speaker.png", {x:100,y:0,width:100,height:100});
    Actions.Click(speaker,()=>{
        sound10.start()
    })
}

function stasjon1()
{

// Å gjøre: Gi bedre navn til alle tingene.

	const img13 = new Blocks.Image("bilder/erteposer.jpeg.png", {x:350,y:250,width:250,height:250});
	const sound14 = new Blocks.Sound("lyd/erteposer.mp3", {loop:false, auto:false});
	const home = new Blocks.Image("bilder/home.png", {x:900,y:0,width:100,height:100});
    Actions.Click(home,()=>{
     GaaTil(stasjonkart)
    })
    const speaker = new Blocks.Image("bilder/speaker.png", {x:100,y:0,width:100,height:100});
    Actions.Click(speaker,()=>{
        sound14.start()
    })

}

function stasjon2()
{

// Å gjøre: Gi bedre navn til alle tingene.

	const img1 = new Blocks.Image("bilder/dragehopp.JPG", {x:350,y:250,width:300,height:300});
	const sound5 = new Blocks.Sound("lyd/Hopp.mp3", {loop:false, auto:false});
    const home = new Blocks.Image("bilder/home.png", {x:900,y:0,width:100,height:100});
    Actions.Click(home,()=>{
     GaaTil(stasjonkart)
    })
    const speaker = new Blocks.Image("bilder/speaker.png", {x:100,y:0,width:100,height:100});
Actions.Click(speaker,()=>{
    sound5.start()
})

}
function stasjon3()
{

// Å gjøre: Gi bedre navn til alle tingene.

	const img3 = new Blocks.Image("bilder/stjerne.png", {x:350,y:250,width:250,height:250});
    
    const sound4 = new Blocks.Sound("lyd/triks.mp3", {loop:false, auto:false});

    const home = new Blocks.Image("bilder/home.png", {x:900,y:0,width:100,height:100});
    Actions.Click(home,()=>{
     GaaTil(stasjonkart)
    })
   
    const speaker = new Blocks.Image("bilder/speaker.png", {x:100,y:0,width:100,height:100});
Actions.Click(speaker,()=>{
    sound4.start()
})


}
function stasjon4()
{

// Å gjøre: Gi bedre navn til alle tingene.

	const img1 = new Blocks.Image("bilder/hus.png", {x:100,y:250,width:250,height:250});
	const img2 = new Blocks.Image("bilder/fjell.png", {x:400,y:250,width:250,height:250});
	const img3 = new Blocks.Image("bilder/havet.png", {x:700,y:250,width:250,height:250});
	const sound4 = new Blocks.Sound("lyd/hvorbordragen.mp3", {loop:false, auto:false});
    const lydriktig = new Blocks.Sound("lyd/brajobb.mp3", {loop:false, auto:false});
    const lydfeil = new Blocks.Sound("lyd/prøvigjen.mp3", {loop:false, auto:false});
    const home = new Blocks.Image("bilder/home.png", {x:900,y:0,width:100,height:100});
   
    Actions.Click(img1,()=>{
      lydfeil.start()
       })
       Actions.Click(img2,()=>{
        lydriktig.start()
       })
       Actions.Click(img3,()=>{
        lydfeil.start()
       })
    Actions.Click(home,()=>{
     GaaTil(stasjonkart)
    })

    const speaker = new Blocks.Image("bilder/speaker.png", {x:100,y:0,width:100,height:100});
    Actions.Click(speaker,()=>{
        sound4.start()
    })

}
function stasjon5()
{

// Å gjøre: Gi bedre navn til alle tingene.

	const img1 = new Blocks.Image("bilder/sau.png", {x:100,y:250,width:250,height:250});
    const img2 = new Blocks.Image("bilder/ku.png", {x:400,y:250,width:250,height:250});
	const img3 = new Blocks.Image("bilder/gris.png", {x:700,y:250,width:250,height:250});
    const sound4 = new Blocks.Sound("lyd/sangomsau.mp3", {loop:false, auto:false});
	const sound5 = new Blocks.Sound("lyd/sangomkua.mp3", {loop:false, auto:false});
	const sound6 = new Blocks.Sound("lyd/sangomgriser.mp3", {loop:false, auto:false});
   
    const home = new Blocks.Image("bilder/home.png", {x:900,y:0,width:100,height:100});
    Actions.Click(home,()=>{
     GaaTil(stasjonkart)
    }) 
    
    Actions.Click(img1,()=>{
        sound4.start()
    })
    Actions.Click(img2,()=>{
        sound5.start()
    })
    Actions.Click(img3,()=>{
        sound6.start()
    })



}
function stasjon6(){
    
    const img9 = new Blocks.Image("bilder/taarn.png", {x:350,y:250,width:250,height:350});
const sound10 = new Blocks.Sound("lyd/taarn.mp3", {loop:false, auto:false});

const home = new Blocks.Image("bilder/home.png", {x:900,y:0,width:100,height:100});
Actions.Click(home,()=>{
 GaaTil(stasjonkart)
})
const speaker = new Blocks.Image("bilder/speaker.png", {x:100,y:0,width:100,height:100});
Actions.Click(speaker,()=>{
    sound10.start()
})
}

function stasjon7()
{

// Å gjøre: Gi bedre navn til alle tingene.

	const img20 = new Blocks.Image("bilder/puslespill1.JPG", {x:800,y:400,width:250,height:350});
	const img21 = new Blocks.Image("bilder/puslespill2.JPG", {x:900,y:50,width:250,height:350});
	const img22 = new Blocks.Image("bilder/puslespill3.JPG", {x:450,y:50,width:250,height:350});
	const img23 = new Blocks.Image("bilder/puslespill4.JPG", {x:200,y:450,width:250,height:350});
	const sound24 = new Blocks.Sound("lyd/puslespil.mp3", {loop:false, auto:false});
    const img24 = new Blocks.Image("bilder/sjekksvarher.png", {x:100,y:600,width:200,height:100});
    const lydriktig = new Blocks.Sound("lyd/brajobb.mp3", {loop:false, auto:false});
    const speaker = new Blocks.Image("bilder/speaker.png", {x:100,y:0,width:100,height:100});
    Actions.Click(speaker,()=>{
        sound24.start()
    })
    Actions.Click(img24,()=>{
lydriktig.start()
    })
    
    Actions.Drag(img20)
Actions.Drag(img21)
Actions.Drag(img22)
Actions.Drag(img23)
const home = new Blocks.Image("bilder/home.png", {x:900,y:0,width:100,height:100});
Actions.Click(home,()=>{
 GaaTil(stasjonkart)
})

}

function stasjonslutt()
{

// Å gjøre: Gi bedre navn til alle tingene.

	let img1 = new Blocks.Image("bilder/dragetomt.JPG", {x:350,y:50,width:450,height:550});
	
    let countDownScene1 = new Actions.CountDown(2,()=>{
        img1 =new Blocks.Image("bilder/drageettegg.JPG", {x:350,y:50,width:450,height:550});
        countDownScene2.start()
    })
    
    let countDownScene2 = new Actions.CountDown(2,()=>{
        img1 =new Blocks.Image("bilder/dragetoegg.JPG", {x:350,y:50,width:450,height:550});
        countDownScene3.start()
    })
    
    let countDownScene3 = new Actions.CountDown(2,()=>{
        img1 =new Blocks.Image("bilder/dragetreegg.JPG", {x:350,y:50,width:450,height:550});
        countDownScene4.start()
    })
    let countDownScene4 = new Actions.CountDown(2,()=>{
        img1 =new Blocks.Image("bilder/dragetreeggslutt.JPG", {x:350,y:50,width:450,height:550});
    })
   
	const sound5 = new Blocks.Sound("lyd/Drageslutt.mp3", {loop:false, auto:false});

    const home = new Blocks.Image("bilder/home.png", {x:900,y:0,width:100,height:100});
    Actions.Click(home,()=>{
     GaaTil(stasjonkart)
    })
    const speaker = new Blocks.Image("bilder/speaker.png", {x:100,y:0,width:100,height:100});
    Actions.Click(speaker,()=>{
        sound5.start()
        countDownScene1.start()
    })


}
