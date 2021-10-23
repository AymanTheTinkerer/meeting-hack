import React, {Component} from 'react';
import { TextInput } from 'react-native';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import "./styles.css";


export function MeetingCreate() {

    const { register, errors, handleSubmit } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name of meeting</label>
      <input
        type="text"
        {...register("First name", { required: true, maxLength: 80 })}
      />
    
      <label>Email</label>
      <input
        type="text"
      />
      <label>Mobile number</label>
      <input
        type="tel"
      />
      <label>People to invite</label>
      <select
        name="Title"
      >
        <option value="Mr">Aakash</option>
        <option value="Mrs">Arjun</option>
        <option value="Miss">Ayman</option>
        <option value="Dr">Puneet</option>
      </select>
      
      <input type="submit" />
    </form>
  );
  }
  