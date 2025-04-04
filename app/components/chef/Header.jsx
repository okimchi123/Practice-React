import cheflogo from '../../assets/images/cheflogo.png'

export default function ChefHeader() {
    return (
        <header className="w-full py-3 flex justify-center shadow-md">
            <div className="flex gap-2 items-center">
                <img src={cheflogo} className="w-8" />
                <h1 className='text-xl text-[#141413]'>Chef Claude</h1>
            </div>
            
        </header>
    )
}