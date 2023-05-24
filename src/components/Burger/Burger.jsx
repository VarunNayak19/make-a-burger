import React, { useState } from 'react'
import BG from "../../assets/bg.png";
import BunTop from "../../assets/bun_top.png"
import BunBottom from "../../assets/bun_bottom.png"
import cheese from "../../assets/cheese.png";
import bunM from "../../assets/bun_middle.png"
import cucumber from "../../assets/cucumber.png"
import cutlet from "../../assets/cutlet.png"
import onion from "../../assets/onion.png"
import salad from "../../assets/salad.png"
import tomato from "../../assets/tomatoe.png"
import mayo from "../../assets/Type=mayo.png"
const Burger = () => {
    const [item, setitem] = useState([{
        id: 1,
        src: bunM,
        class: "my-[-40px] hidden"
    },]);

    const [stringg, setstringg] = useState("a")
    console.log(item)
    let removeByAttr = function (arr, attr, value) {
        console.log(item)
        var i = arr.length;
        while (i--) {
            if (arr[i]
                && arr[i].hasOwnProperty(attr)
                && (arguments.length > 2 && arr[i][attr] === value)) {

                arr.splice(i, 1);
                break;
            }
        }
        setitem(arr);
        setstringg(stringg.concat("a"))


    }
    console.log(item)

    const clicking = (e) => {
        setitem(prevArray => [...prevArray, e])
    }
    let customization = [
        {
            id: 1,
            src: bunM,
            name: "Medium Bun",
            class: "my-[-10px]",
            clickData: {
                id: 1,
                src: bunM,
                name: "Medium Bun",
                class: "my-[-10px]",
            }
        },
        {
            id: 2,
            src: cheese,
            name: "cheese",
            class: "mb-[-30px]",
            clickData: {
                id: 2,
                src: cheese,
                name: "cheese",
                class: "mb-[-30px]",
            }
        },
        {
            id: 3,
            src: cucumber,
            name: "cucumber",
            class: "my-[-90px]",
            clickData: {
                id: 3,
                src: cucumber,
                name: "cucumber",
                class: "my-[-90px]",
            }
        },
        {
            id: 4,
            src: cutlet,
            name: "cutlet",
            class: "my-[-22px]",
            clickData: {
                id: 4,
                src: cutlet,
                name: "cutlet",
                class: "my-[-22px]",
            }
        },
        {
            id: 5,
            src: onion,
            name: "onion",
            class: "my-[-65px]",
            clickData: {
                id: 5,
                src: onion,
                name: "onion",
                class: "my-[-65px]",
            }
        },
        {
            id: 6,
            src: salad,
            name: "salad",
            class: "my-[-30px]",
            clickData: {
                id: 6,
                src: salad,
                name: "salad",
                class: "my-[-30px]",
            }
        },
        {
            id: 7,
            src: tomato,
            name: "tomato",
            class: "my-[-50px]",
            clickData: {
                id: 7,
                src: tomato,
                name: "tomato",
                class: "my-[-50px]",
            }
        },
        {
            id: 8,
            src: mayo,
            name: "mayo",
            class: "my-[-60px]",
            clickData: {
                id: 8,
                src: mayo,
                name: "mayo",
                class: "my-[-60px]",
            }
        },
    ];

    return (
        <div className='letsdoAnimation bg-white container overflow-x-hidden min-h-screen w-full   mx-auto relative overflow-hidden'>
            <div className='md:absolute md:top-[300px] hidden md:flex md:text-8xl text-3xl mt-8 ml-4 w-[400px] font-bold ' onClick={() => removeByAttr(item, 'name', 'tomato')}>Make Your Burger</div>
            <div className='absolute w-[600px] min-h-[600px] left-[500px] bottom-[300px] bgImage flex  justify-start items-center flex-col-reverse'>
                <img src={BunBottom} alt="bb" className=' z-0 mt-[-10px]' />
                {
                    item.map((e, i) => {
                        // console.log(`${stringg}`, e)
                        return (<>

                            <img src={e.src} alt="img" className={`${e.class}`} key={i} style={{ zIndex: `${i + 10}` }} />
                            <div className='hidden'>{stringg}</div>
                        </>
                        )
                    })
                }
                <img src={BunTop} alt="bb" className='mb-[-10px] z-50' />
            </div>
            <div className='w-[100%] absolute mx-auto bottom-[20px] h-[250px]'>
                <div className='w-[90%] mx-auto relative  h-full flex gap-3 px-5 py-5'>
                    {
                        customization.map((e) => {
                            return (
                                <>
                                    <div className=' shadow-2xl relative w-[300px] h-full bg-white rounded-md flex flex-col justify-center items-center' key={e.id} >
                                        <img src={e.src} alt="img" className='w-[80%] h-auto absolute top-10' />
                                        <div className='absolute font-sans font-bold uppercase bottom-20'>{e.name}</div>
                                        <div className='absolute bottom-10 left-5 font-bold text-lg' onClick={() => removeByAttr(item, 'name', e.name)}>-</div>
                                        <div className='absolute bottom-10 right-5 font-bold text-lg' onClick={() => { clicking(e.clickData) }}>+</div>

                                    </div>
                                </>
                            );
                        })
                    }
                </div>
            </div>
            {item.length > 10 && <div className='z-[100] w-[400px] h-auto px-10 py-2 text-slate-950 bg-white rounded-lg border-amber-400 border-2 uppercase font-bold absolute top-[200px] right-[400px]'>
                Anna/akka eeth banjidulai pova eerna!
            </div>}
        </div>
    )
}

export default Burger