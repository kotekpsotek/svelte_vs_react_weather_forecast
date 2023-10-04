import type { APICallResult } from "../App";
import storm from "../assets/storm.png";

/** Is suitable now only for user position place */
export default function Card({ result }: { result: APICallResult | undefined }) {
    return (
        <>
            <div className="card">
                <img src={storm} alt=""/>
                <div className="text">
                    <div className="text-into">
                        <p className="text-3xl">Sunrise: </p>
                        <p>{new Date((result || { daily: { sunrise: [""] } })?.daily.sunrise[0]).toLocaleTimeString("pl-PL")}</p>
                    </div>
                    <div className="text-into">
                        <p>Sunset: </p>
                        <p>{new Date((result || { daily: { sunset: [""] } })?.daily.sunset[0]).toLocaleTimeString("pl-PL")}</p>
                    </div>
                    <div className="text-into">
                        <p>Temperature Max:</p>
                        <p>{result?.daily.temperature_2m_max[0]} &#176;C</p>
                    </div>
                    <div className="text-into">
                        <p>Temperature Min:</p>
                        <p>{result?.daily.temperature_2m_min[0]} &#176;C</p>
                    </div>
                    <div className="text-into">
                        <p>Index UV:</p>
                        <p>{result?.daily.temperature_2m_min[0]}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
