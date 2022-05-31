const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			syncTokenFromsessionStore: () => {

				const token =sessionStorage.getItem("token");
				console.log("aplication just loaded, synching the session storage token");
				if(token && token != "" && token != undefined ) setStore({token:token});
			},
			logout: () => {

				sessionStorage.removeItem("token");
				console.log("login out ");
				setStore({token:null});
			},

			login: async (email, password) => {
				const opts = {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						email: email,
						password: password,
					}),
				};

				try {

					const resp = await fetch(
						"https://3001-jorgereboll-proyectofin-b4kaxoo2l69.ws-us46.gitpod.io/api/token",
						opts
					)
					if (resp.status !== 200 && resp.status !== 201) {
						alert("There has been some error"); 
						return false;
					}

					const data = await resp.json();
					console.log("esto viene del backend", data);
					sessionStorage.setItem("token", data.access_token);
					setStore({token: data.access_token})
					return true;
				}
				catch(error){
					console.log("there has been an error login in")
				}
			},
			register: async (name, email, street, city, country, phone, password) => {
				const opts = {
					method: "POST",
				//	mode: "no-cors",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						name:name.campo, email:email.campo, address:street.campo, city:city.campo, country:country.campo, phone:phone.campo, password:password.campo,role_id:1
					}),
				};

				try {

					const resp = await fetch(
						"https://3001-jorgereboll-proyectofin-f5wtyul2spl.ws-us46.gitpod.io/api/users",
						opts
					)
					if (resp.status !== 200 && resp.status !== 201) {
						alert("There has been some error"); 
						return false;
					}

					const data = await resp.json();
					console.log("esto viene del backend",data);
				//	sessionStorage.setItem("token", data.access_token);
				//	setStore({token: data.access_token})
					return true;
				}
				catch(error){
					console.log("there has been an error register in")
				}
			},

			getMessage: () => {
				const store = getStore()
				const opts = {
					headers:{
						"Authorization": "Bearer" + store.token
					}
				}
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello",opts)
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
