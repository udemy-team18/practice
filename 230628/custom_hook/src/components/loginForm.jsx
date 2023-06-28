import React from "react";
import useForm from "../hooks/useForm";

export default function Loginform() {
  const { value, handleChange, resetForm } = useForm({
    userName: "",
    password: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("login data");
    resetForm();
  };

  return <form></form>;
}
