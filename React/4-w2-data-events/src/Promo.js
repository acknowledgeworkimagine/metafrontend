import PromoHeading from './PromoHeading'


function Promo(){

    const data = {
        heading: "99% off all the items!",
        callToAction: "Everything must go!"
    }
    return(
        <div>
            <h1>Application B</h1>
            <PromoHeading heading={data.heading}
            callToAction={data.callToAction}
            />
        </div>
    )
}

export default Promo;