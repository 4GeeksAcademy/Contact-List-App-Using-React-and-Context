import React,{useContext, useState,} from "react";
import{useParams} from "react-router";
import { Context } from "../store/appContext.js";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export const ContactEdit = () => {
    const{ store, actions} = useContext(Context)
    const details = store.currentUser;

    const [name, setName] = useState(details.name);
    const [email, setEmail] = useState(details.email);
    const [address, setAddress] = useState(details.address);
    const [phone, setPhone] = useState(details.phone);
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
    actions.updateContacts(contact, details.id);
    navigate('/contact-list')
  }


  return (
    <div className="container justify-content-center col-4">
      <h3 className="text-primary">Edit Contact</h3>
      <form onSubmit={handleOnSubmit}>
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

        <button type="submit" className="btn btn-primary mt-4">Save Changes</button>

        <Link to="/contact-list">
          <button type="button" className="btn btn-secondary mt-4 mx-3">Back to Contacts</button>
        </Link>

      </form>

    </div>

  );
}
