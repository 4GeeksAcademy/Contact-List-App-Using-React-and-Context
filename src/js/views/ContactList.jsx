import React, { useState, useEffect, useContext } from "react";

import "../../styles/demo.css";
import { Context } from "../store/appContext.js";
import { useNavigate } from "react-router";

export const ContactList = () => {
  const { store, actions } = useContext(Context)
  const navigate = useNavigate()

  const editTask = (item) => {
    actions.assignUser(item);
    navigate('/contact-edit');
  }

  return (

    <div className="container col-5 justify-content-center">
      {!store.contacts ? <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div> : store.contacts.map((item) =>
        <div key={item.id} className="card mb-3" style={{ width: '540px' }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src="https://static.vecteezy.com/system/resources/previews/005/544/753/non_2x/profile-icon-design-free-vector.jpg" className="img-fluid rounded-start" alt="..."></img>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Name: {item.full_name} </h5>
                <p className="card-text">Email: {item.email}</p>
                <p className="card-text">Phone: {item.phone}</p>
                <div className="d-flex justify-content-between"><p className="card-text">Address: {item.address}</p>
                  <div className="d-flex justify-content-end">

                    <span onClick={() => editTask(item) } ><i className="fa-solid fa-pen-nib text-secondary mt-1"></i></span>
                    <span onClick={() => actions.deleteContacts(item.id) } ><i className="fa-solid fa-trash text-danger mx-3 mt-1"></i></span>
                  </div></div>
              </div>
            </div>
          </div>
        </div>

      )
      }
    </div>

  );
}
