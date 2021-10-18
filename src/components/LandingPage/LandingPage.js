import { Button, Alert } from '@blueprintjs/core'
import React, {useState} from 'react'
import { useHistory } from 'react-router'

import landingpageimg from '../../assets/kbclandingpage.jpg'
import landingpageimgmobile from '../../assets/landingmobile.png'
import './LandingPage.css'

function LandingPage() {

    // const [disclaimer, setdisclaimer] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    let history = useHistory()

    return (
        <div>
            <section
                className="dt-l dt-m dn w-100 _landing_"
                style={{
                    backgroundImage: `url(${landingpageimg})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    objectFit: "fill",
                    height: "100vh"
                }}>
                <div className="dtc v-mid tc white ph3 ph4-l" >
                    <Button
                    onClick={() =>  setIsOpen(!isOpen) }
                    text="Let's start the game" intent="primary" large={true} className="pa3 br4" />
                </div>
                
            </section>
            <section
                className="dn-l dn-m dt w-100 _landingmobile_ pa3"
                style={{
                    backgroundImage: `url(${landingpageimgmobile})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    objectFit: "cover",
                    height: "100vh"
                }}>
                <div className="dtc v-mid tc white ph3 ph4-l" >
                    <Button text="Let's start the game" intent="primary" large={true} className="pa3 br4  mt4" 
                    onClick={() => setIsOpen(!isOpen) }
                    />
                </div>
            </section>

            <Alert
                className="mw6-l mw6-m mw4"
                // cancelButtonText = "Okay"
                confirmButtonText="Move to Game"
                icon="fast-forward"
                isOpen={isOpen}
                onClose={() =>  {setIsOpen(!isOpen); history.push('./kbc')} }
                canEscapeKeyCancel={true}
                canOutsideClickCancel={true}
                intent="danger"
            >
                <p className="f4-ns f4 b black">
                    please be notified, you won't get the money deposited in your account. 
                </p>
            </Alert>
        </div>
    )
}

export default LandingPage
