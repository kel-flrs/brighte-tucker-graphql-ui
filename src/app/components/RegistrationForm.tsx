'use client';

import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import { REGISTER_LEAD, SERVICE_OPTIONS } from '../lib/graphql';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Form validation schema
const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  mobile: z.string().min(1, 'Mobile number is required'),
  postcode: z.string().min(1, 'Postcode is required'),
  services: z.array(z.string()).min(1, 'At least one service must be selected'),
});

type FormValues = z.infer<typeof formSchema>;

const RegistrationForm = () => {
  const [submitted, setSubmitted] = useState(false);
  
  const { control, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      mobile: '',
      postcode: '',
      services: [],
    },
  });

  const [registerLead, { error }] = useMutation(REGISTER_LEAD);

  const onSubmit = async (data: FormValues) => {
    try {
      const result = await registerLead({
        variables: {
          input: data,
        },
      });
      
      if (result.data?.register.success) {
        setSubmitted(true);
        reset();
      }
    } catch (e) {
      console.error('Error submitting form:', e);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-md w-full mx-auto text-center">
        <div className="text-[#00C28C] mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
        <p className="text-gray-600 mb-4">Your interest in Brighte Eats has been registered. We&apos;ll be in touch soon!</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="bg-[#00A87B] text-white px-6 py-2 rounded-md hover:bg-[#00C28C] transition-colors"
        >
          Register Another
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full">
      <h2 className="text-2xl font-bold mb-6 text-center">Express Interest in Brighte Eats</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                id="name"
                className="form-input"
                placeholder="John Doe"
              />
            )}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="email"
                id="email"
                className="form-input"
                placeholder="john.doe@example.com"
              />
            )}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
          <Controller
            name="mobile"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="tel"
                id="mobile"
                className="form-input"
                placeholder="+61412345678"
              />
            )}
          />
          {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile.message}</p>}
        </div>

        <div>
          <label htmlFor="postcode" className="block text-sm font-medium text-gray-700 mb-1">Postcode</label>
          <Controller
            name="postcode"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                id="postcode"
                className="form-input"
                placeholder="2000"
              />
            )}
          />
          {errors.postcode && <p className="text-red-500 text-sm mt-1">{errors.postcode.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Services Interested In</label>
          <div className="space-y-2">
          {SERVICE_OPTIONS.map(service => (
              <div key={service.key} className="flex items-center">
                <Controller
                  name="services"
                  control={control}
                  render={({ field }) => (
                    <input
                      type="checkbox"
                      id={service.key}
                      value={service.key}
                      checked={field.value.includes(service.key)}
                      onChange={(e) => {
                        const value = e.target.value;
                        const newValues = e.target.checked
                          ? [...field.value, value]
                          : field.value.filter(s => s !== value);
                        field.onChange(newValues);
                      }}
                      className="h-5 w-5 text-[#00C28C] focus:ring-[#00A87B] border-gray-300 rounded"
                    />
                  )}
                />
                <label htmlFor={service.key} className="ml-2 block text-sm text-gray-700">
                  {service.value}
                </label>
            </div>
            ))}
          </div>
          {errors.services && <p className="text-red-500 text-sm mt-1">{errors.services.message}</p>}
        </div>

        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-primary py-3"
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>

        {error && (
          <div className="text-red-500 text-sm text-center mt-2">
            Error submitting the form. Please try again.
          </div>
        )}
      </form>
    </div>
  );
};

export default RegistrationForm;