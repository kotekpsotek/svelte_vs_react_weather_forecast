export interface APICallResult {
    daily: {
      sunrise: string[],
      sunset: string[],
      temperature_2m_max: number[],
      temperature_2m_min: number[],
      time: string[],
      uv_index_max: number[]
    }
}

const callURL = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,rain,showers,snowfall,snow_depth,weathercode&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&timezone=auto";

export async function letsCallAPI() {
  const call = await fetch(callURL);
  const res = await call.json();

  return res as APICallResult;
}
