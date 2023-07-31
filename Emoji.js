import React, { useState } from 'react'
const emojiData=[
    {id:1,
    symbol:"😂",
    name:"laugh"
},
{id:2,
    symbol:"😭",
    name:"cry"
},
{id:3,
    symbol:"❤️",
    name:"heart"
},
{id:4,
    symbol:"🔥",
    name:"fire"
},
{id:5,
    symbol:"😐",
    name:"speechless"
},
{id:6,
    symbol:"😁",
    name:"lol"
},
{id:7,
    symbol:"✌️",
    name:"victory"
},
{id:8,
    symbol:"😘",
    name:"kiss"
},
{id:9,
    symbol:"👌",
    name:"super"
},
{id:10,
    symbol:"😉",
    name:"wink"
},
{
    id:11,
    symbol:"🙋‍♂️",
    name:"hi"
},
{
    id:12,
    symbol:"👋",
    name:"bye"
},
{
    id:13,
    symbol:"😎",
    name:"cool"
},
{
    id:14,
    symbol:"😒",
    name:"cheppav le"
},
{
    id:15,
    symbol:"😏",
    name:"sarle"
}


]

function Emoji() {
    const [searchEmoji,setSearchEmoji] = useState("");
   
    const handleChange = (e) =>{
        setSearchEmoji(e.target.value);
    }

    const showEmoji = emojiData.filter((emoji) => {
        const emojiName = emoji.name.toLowerCase();
        return emojiName.includes(searchEmoji.toLowerCase())

    });
  return (
    <div>
        <h1>React Emoji Search App!!!!</h1>
        <input type='text' placeholder='Search the Emoji..!!' value={searchEmoji} onChange={handleChange}></input>
        <div>{
            showEmoji.map((emoji) => emoji.symbol)}
        </div>
        </div>
  )
}

export default Emoji