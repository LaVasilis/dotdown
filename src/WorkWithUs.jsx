import React from "react";
import { useTranslation } from "react-i18next";
import "./styles.css";
import LightRays from './LightRays';
import i18n from "i18next";


function WorkWithUs() {
    const { t } = useTranslation();
    return (



        <div className="work-container"   >
            <div className="light-rays-container" >
                <LightRays
                        raysOrigin="top-center"
                    raysColor="#699595ff"
                    raysSpeed={1.5}
                    lightSpread={1.5}
                    rayLength={2.3}
                    followMouse={true}
                    mouseInfluence={0.1}
                    noiseAmount={0.4}
                    distortion={0.05}
                    className="custom-rays"
                />
            </div>
            <div className="work-text-container">
                <div className="offer-section">
                    <h1>{t("workWithUs.title")}</h1>
                    <br></br>
                    <p>{t("workWithUs.text")}</p>
                    <ul>
                        <li>{t("workWithUs.FirstCheck")}</li>
                        <li>{t("workWithUs.SecondCheck")}</li>
                        <li>{t("workWithUs.ThirdCheck")}</li>
                        <li>{t("workWithUs.FourthCheck")}</li>
                    </ul>
                </div>

                <div class="form-container">
                    <form class="form">
                        <div class="form-group">
                            <label for="email">Full Name</label>
                            <input required="" name="email" id="email" type="text"></input>
                            <label for="email">Email</label>
                            <input required="" name="email" id="email" type="text"></input>
                        </div>
                        <div class="form-group">
                            <label for="textarea">How Can We Help You?</label>
                            <textarea required="" cols="50" rows="10" id="textarea" name="textarea">          </textarea>
                        </div>
                        <button type="submit" class="form-submit-btn">Submit</button>
                    </form>
                </div>
            </div>
        </div>




    );
}
export default WorkWithUs;