import bgcImage from '../../assets/bcg1.png'
import headerImage from '../../assets/header1.png'
import left_rightImage from '../../assets/left_rightImage.png'
import top_middleImage from '../../assets/top_middle.png'
import left_right_b from '../../assets/left_right_b.png'
import middle_b from '../../assets/middle_b.png'

import { Lux1 } from '../../common/Lux1/index.tsx'
import { Lux2 } from '../../common/Lux2/index.tsx'



export const Format1= () => {
    return (
        <div className="w-screen h-screen flex flex-col bg-center bg-cover bg-no-repeat" style={{background:`url(${bgcImage})`}}>
            <header className='w-full md:w-auto'>
                 <img src={headerImage} />
            </header>
            <div className='w-screen  px-3 py-3 flex-1 grid gap-5 grid-cols-4 grid-rows-4 grid-flow-4 flex justify-center'>
                {/* <div className='bg-center bg-contain bg-no-repeat' style={{backgroundImage:`url(${left_rightImage})`}}>
                    <Lux1 class="w-10/12 h-3/4"/>
                </div> */}
                <div className='bg-center bg-contain bg-no-repeat bg-red-400'>
                </div>
                <div className='col-span-2 row-span-3 bg-auto bg-center bg-no-repeat' style={{backgroundImage:`url(${top_middleImage})`}}></div>
                <div className='bg-center bg-contain bg-no-repeat' style={{backgroundImage:`url(${left_rightImage})`}}>
                    <Lux2 class="w-10/12 h-full"/>
                </div>
                <div className='bg-center bg-contain bg-no-repeat' style={{backgroundImage:`url(${left_rightImage})`}}></div>
                <div className='bg-center bg-contain bg-no-repeat' style={{backgroundImage:`url(${left_rightImage})`}}></div>
                <div className='bg-center bg-contain bg-no-repeat' style={{backgroundImage:`url(${left_rightImage})`}}></div>
                <div className='bg-center bg-contain bg-no-repeat' style={{backgroundImage:`url(${left_rightImage})`}}></div>
                <div className='bg-center bg-contain bg-no-repeat' style={{backgroundImage:`url(${left_rightImage})`}}></div>
                <div className='bg-center bg-contain bg-no-repeat' style={{backgroundImage:`url(${left_rightImage})`}}></div>
                <div className='bg-center bg-contain bg-no-repeat' style={{backgroundImage:`url(${left_rightImage})`}}></div>
                <div className='bg-center bg-contain bg-no-repeat' style={{backgroundImage:`url(${left_rightImage})`}}></div>
            </div>
        </div>
    )
}