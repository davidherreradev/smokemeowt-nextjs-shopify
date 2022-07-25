import { Button } from "@components/ui"
import React, { useState } from "react";
import { useForm, Resolver, SubmitHandler  } from "react-hook-form";
import axios from 'axios'

type FormValues = {
    email: string;
};

const resolver: Resolver<FormValues> = async (values) => {
    return {
        values: values.email ? values : {},
        errors: !values.email
        ? {
            email: {
                type: 'required',
                message: 'This is required.',
            },
            }
        : {},
    };
};

const Newsletter = () => {
    const [message, setMessage] = useState('');
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>({ resolver });
    const  onSubmit: SubmitHandler<FormValues> = async data => {
        let config = {
            method: 'POST',
            url: '/api/newsletter',
            headers: {
                'Content-type': 'application/JSON',
            },
            data: data
        }
        try {
            const response = await axios(config)
            const msg = `${data.email} is one cool cat. \nThanks for subbing!`
            setMessage(msg);
            reset();
        } catch (error) {
            console.error(error)
        }
        
    }
    
    return (
        <>
            <h3 className="heading-text text-center">You a cool cat?</h3>
            <p className="heading-tag text-center">Want dank memes & weed discounts in your inbox? Enter your email meow!</p>
            <form onSubmit={handleSubmit(onSubmit)} className="lg:w-1/2 flex flex-col items-center mb-8">
                <input 
                    className="mb-3 text-center rounded-full bg-gray-50 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 font-mono" 
                    type="email"
                    placeholder="Email Address"
                    {...register("email")}
                />
                <Button type="submit">Subscribe</Button>
            </form>
            <p className="text-purple text-center whitespace-pre-wrap">{message}</p>
        </>
    )
}

export default Newsletter