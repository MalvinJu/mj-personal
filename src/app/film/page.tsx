import Image from 'next/image'
import porto1 from "../img/film/1.jpg"
import porto2 from "../img/film/2.jpg"
import porto3 from "../img/film/3.jpg"
import porto4 from "../img/film/4.jpg"
import porto5 from "../img/film/5.jpg"
import porto6 from "../img/film/6.jpg"
import porto7 from "../img/film/7.jpg"
import porto8 from "../img/film/8.jpg"

export default function FilmPage() {
    return(
        <div className="grid grid-cols-2 gap-4 mx-10">
            <div className="grid gap-4">
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src={porto1} alt=""  width={500}/>
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src={porto2} alt=""  width={500}/>
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src={porto4} alt=""  width={500}/>
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src={porto5} alt=""  width={500}/>
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src={porto6} alt=""  width={500}/>
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src={porto8} alt=""  width={500}/>
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src={porto7} alt=""  width={500}/>
                </div>
                <div>
                    <Image className="h-auto max-w-full rounded-lg" src={porto3} alt=""  width={500}/>
                </div>
            </div>
        </div>
    )
}