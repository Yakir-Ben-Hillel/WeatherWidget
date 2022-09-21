import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import weatherWidgetSDK from 'sdk';
interface WidgetFieldValues {
  lan: number;
  lat: number;
  temperature: number;
  country: string;
  city: string;
}
const WeatherWidget = () => {
  const {
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<WidgetFieldValues>();
  const onSubmit = (values: WidgetFieldValues) => {
    return weatherWidgetSDK({
      context: {
        lan: values.lan,
        lat: values.lat,
      },
      onComplete: (res) => reset({ ...values, ...res }),
      onError: (err) => console.log(err),
    }).calculate();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}></form>
    </div>
  );
};
