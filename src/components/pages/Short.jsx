import React from 'react';
import { useForm } from 'react-hook-form';

const Short = () => {
  const { handleSubmit, register, errors } = useForm();
  const onSub = (input) => console.log(input);
  return (
    <div>
      <input
        type="text"
        name="urlShort"
        placeholder="Enter Your URL"
        ref={register({
          required: 'Required',
          pattern: {
            // value: '',
            message: 'please enter a URL',
          },
        })}
      />
      {errors.urlShort && errors.urlShort.message}
      <button type="submit">Shorten It!</button>
    </div>
  );
};

export default Short;
