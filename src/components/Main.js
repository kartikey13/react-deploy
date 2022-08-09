import React from 'react';
import Navbar from './Navbar';


export default function Main(){
    const [memegenerator, setMemeGenerator] = React.useState({
        firstLine: "",
        secondLine: "",
        memeImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes]  = React.useState([])

    console.log(memegenerator)

    function regulatorfn(event){
        const {name, value} = event.target
        setMemeGenerator (prevItem => {
            return{
                ...prevItem,
                [name] : value
            }
        })
    }

    function handleimg(){
        const random = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[random].url;
        setMemeGenerator(prevItem => ({
                ...prevItem,
                memeImage: url
        }))
    }

    React.useState(() => {
        async function getmemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getmemes()
    }, [])

    
    return(
        <div>
            <Navbar />
            <form>
                <input 
                type='text'
                name = 'firstLine'
                placeholder='First Line'
                value={memegenerator.firstLine}
                onChange = {regulatorfn}
                />
                <input 
                type='text'
                name = "secondLine"
                placeholder='Second Line'
                value={memegenerator.secondLine}
                onChange = {regulatorfn}
                />
            </form>

            <div className='next-img'>
                <button onClick={handleimg}>Click to get next Image</button>
            </div>

            <div className='image-bloc'>
                <img src={memegenerator.memeImage} alt='' />
                <div className='over'>
                    <h3 className='top-head'>{memegenerator.firstLine}</h3>
                </div>
                <div className='over-scnd'>
                    <h3 className='bottom-head'>{memegenerator.secondLine}</h3>
                </div>
            </div>
        </div>
    )


}





