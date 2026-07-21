import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./styles.css";
import LightRays from './LightRays';

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;

function WorkWithUs() {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
    const [status, setStatus] = useState("idle"); // idle | sending | success | error

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");
        try {
            const res = await fetch(FORMSPREE_ENDPOINT, {
                method: "POST",
                headers: { Accept: "application/json" },
                body: new FormData(e.target),
            });
            if (res.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", phone: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

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

                <div className="form-container">
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">{t("workWithUs.form.name")}</label>
                            <input required name="name" id="name" type="text" value={formData.name} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">{t("workWithUs.form.email")}</label>
                            <input required name="email" id="email" type="email" value={formData.email} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">{t("workWithUs.form.phone")}</label>
                            <input required name="phone" id="phone" type="tel" value={formData.phone} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">{t("workWithUs.form.message")}</label>
                            <textarea required cols="50" rows="10" id="message" name="message" value={formData.message} onChange={handleChange}></textarea>
                        </div>
                        <button type="submit" className="form-submit-btn" disabled={status === "sending"}>
                            {status === "sending" ? t("workWithUs.form.sending") : t("workWithUs.form.submit")}
                        </button>
                        {status === "success" && (
                            <p className="form-status form-status-success">{t("workWithUs.form.success")}</p>
                        )}
                        {status === "error" && (
                            <p className="form-status form-status-error">{t("workWithUs.form.error")}</p>
                        )}
                    </form>
                </div>
            </div>
        </div>




    );
}
export default WorkWithUs;
