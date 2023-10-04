<script lang="ts">
    import stromIMG from "../assets/storm.png"
    import type { APICallResult } from "../../../intermediate_api";
    
    export let apiResult: APICallResult | undefined;
</script>

<div class="card">
    <img src="{stromIMG}" alt="">
    <div class="text">
        <div class="text-into">
            <p>Sunrise:</p>
            <p>{new Date((apiResult || { daily: { sunrise: [""] } })?.daily.sunrise[0]).toLocaleTimeString("pl-PL")}</p>
        </div>
        <div class="text-into">
            <p>Sunset:</p>
            <p>{new Date((apiResult || { daily: { sunset: [""] } })?.daily.sunset[0]).toLocaleTimeString("pl-PL")}</p>
        </div>
        <div class="text-into">
            <p>Temoerature min:</p>
            <p>{apiResult?.daily.temperature_2m_min[0]} &deg;C</p>
        </div>
        <div class="text-into">
            <p>Temperature max:</p>
            <p>{apiResult?.daily.temperature_2m_max[0]} &deg;C</p>
        </div>
        <div class="text-into">
            <p>UV index:</p>
            <p>{apiResult?.daily.temperature_2m_max[0]}</p>
        </div>
    </div>
</div>