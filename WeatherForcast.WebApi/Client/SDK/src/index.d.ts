interface WeatherResponse {
    country: string
    city: string
    temperature: number
    statusCode: number
    error: string | null
  }
  interface CallResponse {
    country: string
    city: string
    temperature: number
  }
  interface WidgetInput {
    context: {
      lan: number
      lat: number
    }
    onComplete: (response: CallResponse) => any
    onError: (err: any) => any
  }
  