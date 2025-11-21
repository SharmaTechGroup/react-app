import { NetflixRegister } from "./netflix-register";


export function NetflixSection(){
     return(
        <section className="d-flex mt-5 justify-content-center text-white">
            <div className="text-center">
                <div className="fs-1 fw-bold">
                Unlimited movies, shows,<br/> and more
                </div>
                <div className="fs-4">
                    Starts at ₹149. Cancel at any time.
                </div>
                <main>
                    <NetflixRegister />
                </main>
            </div>
        </section>
     )
}