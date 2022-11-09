import 'animate.css';

export default function HeaderComponent(){
    return (
        <section className="header-bg">
            <div className="header-row">
                <div>
                    <img src="images/logo.svg" alt="" className='animate__animated animate__fadeInDown' />
                </div>
                <div>
                    <button className='animate__animated animate__fadeInDown'>Try It Free</button>
                </div>
            </div>
            <div className="hero">
                <div className='animate__animated animate__fadeInLeft'>
                    <h1>Build The Community Your Fans Will Love</h1>
                    <p>Huddle re-imagines the way we build communities. You have a choice, but so does your audience. Create connecions with your user as you engage in genuine discussions.</p>
                    <button>Get Started For Free</button>
                </div>
                <div className='animate__animated animate__fadeInRight'>
                    <img src="images/illustration-mockups.svg" alt="" />
                </div>
            </div>
        </section>
    )
}