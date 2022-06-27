const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			apiUrl: "https://3001-jorgereboll-proyectofin-5qyk02tzkub.ws-us47.gitpod.io",
			currentUser: null,
			message: null,
			// products: [JSON.parse(localStorage.getItem("product"))] || [],
			cart: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			addToCart1: (producto) => {
				let newItem = getStore().cart.includes(producto);
				newItem ? {
					...producto,
					cart: producto.map((item) => item.id === producto.id ? { ...item, quantity: item.quantity + 1 }
						: item)
				} : {
					...producto,
					cart: [...cart, { ...producto, quantity: 1 }]
				}
			},
			addTolocalStorage: () => {
				localStorage.setItem("products_list", JSON.stringify(getStore().cart))
				console.log("producto añadido al localStorage")
			},
			addToCart: (producto) => {
				let newItem = getStore().cart.includes(producto);
				if (newItem) {
					alert("Ya se encuentra en el carro")
				} else {
					setStore({
						cart: getStore().cart.concat(producto)

					})
					getActions().addTolocalStorage()
				}
			},
			deleteFromCart: (producto) => {
				setStore({
					cart: getStore().cart.filter(carro => carro !== producto)
				})
				getActions().addTolocalStorage()
			},

			getLogin: async (info = { email: '', password: '' }) => {
				try {
					const { apiUrl } = getStore();
					const response = await fetch(`${apiUrl}/api/login`, {
						method: 'POST',
						body: JSON.stringify(info),
						headers: {
							'Content-Type': 'application/json'
						}
					})

					const data = await response.json()

					if (data.access_token) {
						setStore({ currentUser: data })
						sessionStorage.setItem('currentUser', JSON.stringify(data));
					}

					return data;

				} catch (error) {
					console.log(error);
				}
			},

			getlogout: () => {

				if (sessionStorage.getItem('currentUser')) {
					sessionStorage.removeItem('currentUser');
					setStore({ currentUser: null });
				}
			},

			checkSession: () => {
				if (sessionStorage.getItem('currentUser')) {
					setStore({ currentUser: JSON.parse(sessionStorage.getItem('currentUser')) })
				}
			},

			register: async (name, email, street, city, country, phone, password,) => {
				const opts = {
					method: "POST",
					//	mode: "no-cors",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						name: name.campo, email: email.campo, address: street.campo, city: city.campo, country: country.campo, phone: phone.campo, password: password.campo, role_id: 1
					}),
				};

				try {

					const resp = await fetch(
						"https://3001-jorgereboll-proyectofin-5qyk02tzkub.ws-us47.gitpod.io/api/users",
						//"https://3001-jorgereboll-proyectofin-f5wtyul2spl.ws-us46.gitpod.io/api/users",
						opts
					)
					if (resp.status !== 200 && resp.status !== 201) {
						alert("There has been some error");
						return false;
					}

					const data = await resp.json();
					console.log("esto viene del backend", data);
					//	sessionStorage.setItem("token", data.access_token);
					//	setStore({token: data.access_token})
					return true;
				}
				catch (error) {
					console.log("there has been an error register in")
				}
			},

			getMessage: () => {
				const store = getStore()
				const opts = {
					headers: {
						"Authorization": "Bearer" + store.token
					}
				}
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello", opts)
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
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