const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			full_name: 'name',
			email: 'email',
			agenda_slug: 'mateos',
			address: 'address',
			phone: 'phone',
			contacts: [],
            currentUser: {}
		},
		actions: {

			assignUser: (item) => { setStore({ currentUser: item} )},
			clearUser: () => { setStore({ currentUser: {} })},

			//METODO POST
			createContacts: async (dataToSend) => {
				const options = {
					method: "POST",
					body: JSON.stringify(dataToSend),
					headers: {
						"Content-type": "application/json"
					}
				}

				const response = await fetch('https://playground.4geeks.com/apis/fake/contact/', options);
				if (!response.ok) return
				const data = await response.json();
				getActions().getContacts();
			},

			//METODO GET
			getContacts: async () => {
				const response = await fetch('https://playground.4geeks.com/apis/fake/contact/agenda/mateos');
				if (!response.ok) {
					return response.status
				}

				const data = await response.json()
				setStore({ contacts: data })
				localStorage.setItem('contactList', JSON.stringify(data))
			},

			//METODO PUT
			updateContacts: async (dataToSend, id) => {
				const options = {
					method: "PUT",
					body: JSON.stringify(dataToSend),
					headers: {
						"Content-type": "application/json"
					}
				}

				const response = await fetch('https://playground.4geeks.com/apis/fake/contact/' + id, options);
				if (!response.ok) return
				const data = await response.json();
				getActions().getContacts();
			},

			//METODO DELETE
			deleteContacts: async (contactId) => {
				const options = {
					method: "DELETE",
					headers: {
						"Content-type": "application/json"
					}
				}

				const response = await fetch('https://playground.4geeks.com/apis/fake/contact/' + contactId, options);
                if (!response.ok) return
				const data = await response.json();
				getActions().getContacts();
			},


			//----------------------------------------------------------------------------------------------------------------//
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
