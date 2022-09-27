import { useEffect, useRef, useState } from "react"
import {GrSpotify} from 'react-icons/gr'
import {GiPreviousButton} from 'react-icons/gi'
import {GiNextButton} from 'react-icons/gi'
import {BsPlayCircle} from 'react-icons/bs'
import {BsPauseCircle} from 'react-icons/bs'
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
const [increase,setincrease] = useState(0)
const [song,setsong] = useState(myAudio[increase])
const [data,setdata] = useState(pictures[increase]) 
console.log(song);   
const add = ()=> {
setincrease(increase+1)
setsong(myAudio[increase])
setdata(pictures[increase])
}
console.log(increase);
const prev = ()=> {
setincrease(increase-1)
setsong(myAudio[increase])
setdata(pictures[increase])
}   
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

return(
<>
<img alt="" className="dataimg"src={data}/><br></br> 
<audio className="myaudio" controls  
src={song} ref={myRef}  type={'audio/mp3'}/><br></br>
<div className="buttons">
<h1 className="h1">Ubuntu Player<GrSpotify/></h1>
<button onClick={()=> prev()} className="prev"><GiPreviousButton/></button>
<button onClick={()=> setplaying(!playing)} className="play">{playing ? <BsPauseCircle/>:<BsPlayCircle/>}</button>
{/* <button onClick={()=> pause()}className="pause"><FaPauseCircle/></button> */}
<button onClick={()=> add()}  className="next"> <GiNextButton/></button>
</div>
</>
)
}
export default Voiceplayer