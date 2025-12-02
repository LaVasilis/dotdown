import React from "react";
import { useTranslation } from "react-i18next";
import "./styles.css";
import LightRays from './LightRays';

function WorkWithUs() {
    const { t } = useTranslation();
    return (



        <div className="work-container"   >
            <div className="light-rays-container" >
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#00ffff"
                    raysSpeed={1.5}
                    lightSpread={1.5}
                    rayLength={1.3}
                    followMouse={true}
                    mouseInfluence={0.1}
                    noiseAmount={0.1}
                    distortion={0.05}
                    className="custom-rays"
                />
            </div>
            <div className="work-text-container">
                <div className="offer-section">
                    <h2>Work With Our Studio</h2>
                    <h3>Random Text from Chat</h3>
                    <p>
                        Join our creative team and collaborate on exciting new projects.
                        We’re looking for talented, passionate individuals to grow with us.
                        At DotDown The Label, we believe the best work happens when creative minds come together.
                        We’re always open to partnering with artists, brands, studios, and creators who share our passion for innovation, quality, and unique storytelling.
                        Whether you’re looking to develop a visual concept, produce high-end digital content, enhance your brand identity, or build something entirely new, we’d love to explore how we can work together.
                        
                        
                    </p>
                    <ul>
                        <li>✔ Professional Studio Environment</li>
                        <li>✔ High-end Creative Projects</li>
                        <li>✔ Flexible Work Opportunities</li>
                        <li>✔ Career Growth & Mentorship</li>
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