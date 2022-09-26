import { useRef } from "react"
import { useState } from "react"
import {GrSpotify} from 'react-icons/gr'
function Voiceplayer() {
const myAudio = [
'./songs/data.wav',
'./songs/test.wav',
'./songs/voice.mp3',
'./songs/sing.mp3',
'./songs/song.mp3',
]
const pictures = [
'/pictures/song1.webp',
'/pictures/song2.webp',
'/pictures/song3.jpeg',
'/pictures/song4.webp',
'/pictures/song5.jpeg'
]
const [increase,setincrease] = useState(0)
const [song,setsong] = useState(myAudio[increase])
const [data,setdata] = useState(pictures[increase])

// const count = useRef(0)
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
return(
<>
<img className="dataimg" src={data}/> <br></br> 
<audio className="myaudio" controls
source="true" src={song} type={'audio/mp3'}  /> <br></br>
<h1 className="h1">Ubuntu Player<GrSpotify/></h1>
<button onClick={()=> prev()} className="prev">Prev</button>
<button onClick={()=> add()}  className="next">Next</button>
</>
)
}
export default Voiceplayer