import bgcImage from '../../assets/bcg1.png'
import headerImage from '../../assets/header1.png'

export const Format1= () => {
    return (
        <div className="w-screen h-screen" style={{background:`url(${bgcImage}) center center / cover no-repeat`}}>
            <header className='w-auto h-20 mx-auto' style={{background:`url(${headerImage}) center center no-repeat`}}>
                
            </header>
        </div>
    )
}