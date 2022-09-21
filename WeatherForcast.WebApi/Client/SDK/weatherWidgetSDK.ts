import axios from 'axios'
interface WeatherResponse {
  country: string
  city: string
  temperature: number
  statusCode: number
  error: string | null
}
interface Response {
  country: string
  city: string
  temperature: number
}
interface WidgetInput {
  context: {
    lan: number
    lat: number
  }
  onComplete: (response: Response) => any
  onError: (err: any) => any
}
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
      } catch (err) {
        onError(err)
      }
    },
  }
}
