import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import weatherWidgetSDK from 'sdk';
interface WidgetFieldValues {
  lan: number;
  lat: number;
  temperature: number;
  country: string;
  city: string;
}
export const WeatherWidget = () => {
  const { handleSubmit, control, watch, reset } = useForm<WidgetFieldValues>();
  const [error, setError] = useState('');
  const country = watch('country');
  const city = watch('city');
  const temperature = watch('temperature');
  const onSubmit = (values: WidgetFieldValues) => {
    setError('');
    return weatherWidgetSDK({
      context: {
        lan: values.lan,
        lat: values.lat,
      },
      onComplete: (res) => reset({ ...values, ...res }),
      onError: (err) => setError(err),
    }).calculate();
  };
  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'column',
        height: '80%',
        margin: 30,
        backgroundColor: 'honeydew',
        justifyContent: 'center',
      }}
    >
      <h1>Weather Test</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Controller
            control={control}
            name='lat'
            render={({ field: { onChange } }) => (
              <input
                type={'number'}
                step={'any'}
                placeholder={'Lat'}
                onChange={onChange}
                style={{ marginRight: 12 }}
              />
            )}
          />
          <Controller
            control={control}
            name='lan'
            render={({ field: { onChange } }) => (
              <input
                type={'number'}
                step={'any'}
                placeholder={'Lan'}
                onChange={onChange}
                style={{ marginRight: 12 }}
              />
            )}
          />
          <button type='submit'>Go</button>
          <div>
            {country && <p>{`Country: ${country}`}</p>}
            {city && <p>{`City: ${city}`}</p>}
            {temperature && <p>{`Temperature: ${temperature}`}</p>}
            {error && (
              <p style={{ color: 'red' }}>{`Result Message: ${error}`}</p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};
