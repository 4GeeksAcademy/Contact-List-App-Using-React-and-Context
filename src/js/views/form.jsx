import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";


export const Form = () => {
  const { store, actions } = useContext(Context);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const contact = {
      full_name: name,
      email: email,
      agenda_slug: store.agenda_slug,
      address: address,
      phone: phone
    }
    actions.createContacts(contact);
    navigate('/contact-list')
  }


  return (
    <form onSubmit={handleOnSubmit}>
        <div className="container justify-content-center col-4">
      <h3 className="text-primary">Create Contact</h3>
        <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
        <input type="text" className="form-control" id="exampleFormControlInput0" placeholder="Name"
          value={name} onChange={(e) => setName(e.target.value)}
        >
        </input>


        <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
          value={email} onChange={(e) => setEmail(e.target.value)}
        ></input>


        <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Phone</label>
        <input type="phone" className="form-control" id="exampleFormControlInput1" placeholder="+34 000 00 000"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        ></input>

        <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Address</label>
        <input type="address" className="form-control" id="exampleFormControlInput1" placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        ></input>

        <button className="btn btn-primary mt-4" type="submit">Save</button>

        <Link to="/contact-list">
          <button type="button" className="btn btn-secondary mt-4 mx-3">Back to Contacts</button>
        </Link>

    </div>
      </form>


  );
}
