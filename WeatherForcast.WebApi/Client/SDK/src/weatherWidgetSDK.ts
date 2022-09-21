import axios from 'axios'
const API_URL = 'http://localhost:28469/weather'
export default ({ context, onComplete, onError }: WidgetInput) => {
  return {
    calculate: async () => {
      try {
        const res = await axios.get<WeatherResponse>(
          `${API_URL}?latitude=${context.lat}&longitude=${context.lan}`,
        )
        onComplete({
          country: res.data.country,
          city: res.data.city,
          temperature: res.data.temperature,
        })
      } catch (err: any) {
        onError(err.message)
      }
    },
  }
}
