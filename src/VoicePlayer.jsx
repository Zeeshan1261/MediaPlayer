import { useEffect, useRef, useState } from "react"
import {GrSpotify} from 'react-icons/gr'
import {GiPreviousButton} from 'react-icons/gi'
import {GiNextButton} from 'react-icons/gi'
import {BsPlayCircle} from 'react-icons/bs'
import {BsPauseCircle} from 'react-icons/bs'
import {BsSearch} from 'react-icons/bs'
import {ProgressBar} from 'audio-progress-bar';
function Voiceplayer() {
const myAudio = [
'./songs/sing.mp3',
'./songs/data.wav',
'./songs/test.wav',
'./songs/voice.mp3',
'./songs/song.mp3',
]
const pictures = [
'/pictures/song4.webp',
'/pictures/song1.webp',
'/pictures/song2.webp',
'/pictures/song3.jpeg',
'/pictures/song5.jpeg'
]
let tempt = 0
const [currentindex,setcurrentindex] = useState(0)

const myRef = useRef()
const [playing,setplaying] = useState(false)

useEffect(()=> {
if(playing)  {
myRef.current.play()
    } 
else{
myRef.current.pause()
    }
})
const next = ()=> {
    
setcurrentindex(()=> {
let tempt = currentindex 
tempt ++
if(tempt > myAudio.length-1) {
tempt = 0
}
return tempt
})

}
const prev = ()=> {
    
setcurrentindex(()=> {
let tempt = currentindex 
tempt --
if(tempt < 0) {
tempt = myAudio.length -1
}
return tempt
})
}

const forward = ()=> {
setcurrentindex(currentindex+1)
if(currentindex>= myAudio.length -1) {
setcurrentindex(0)
}
}
const backward = ()=> {

setcurrentindex(currentindex-1)
if(currentindex<= 0) {
setcurrentindex(myAudio.length -1)
       
}
}

return(
<>
{/* <button className="searchbtn" ><BsSearch/></button> <br></br> */}
<img alt="" className="dataimg"src={pictures[currentindex]}/><br></br> 
<audio className="myaudio"  controls  
src={myAudio[currentindex]} ref={myRef}  type={'audio/mp3'}/><br></br>
<div className="buttons">
<h1 className="h1">Ubuntu Player<GrSpotify/></h1>
<button onClick={()=> backward()}  className="prev"><GiPreviousButton/></button>
<button onClick={()=> setplaying(!playing)} className="play">{playing ? <BsPauseCircle/>:<BsPlayCircle/>}</button>
<button onClick={()=> forward()}  className="next"> <GiNextButton/></button>
{/* <input  className="range" type={'range'} min={1000} max={10000}/> */}
</div>
</>
)
}
export default Voiceplayer