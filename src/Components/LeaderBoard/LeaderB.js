import LeaderBoardImage from '../../Assets/LeaderBoardImage.png'
const LeaderB = () => {
    return (
        <section className='md:pt-32 md:pb-16 sm:px-24 px-4 bg-[#f7f7f7]'>
            <div className='max-w-screen-xl md:px-[90px] m-auto'>
                <div className='details'>
                    <h1 className='text-center font-bold text-[#191C29] md:text-5xl text-3xl '>Leaderboard to Show <span className='text-[#E93439]'>points</span></h1>
                    <p className='m-auto py-3 md:py-8 xl:w-[400px]  font-light text-[#667986] md:text-xl text-base text-center'>
                        Show the way to earn from likes comment and shares
                    </p>
                </div>
                <div className='image max-w-screen-xl m-auto'>
                    <img className='w-full' src={LeaderBoardImage} alt="Leader Board" />
                </div>
            </div>
        </section>
    )
}
export default LeaderB