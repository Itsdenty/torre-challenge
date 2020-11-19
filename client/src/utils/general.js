import axios from 'axios';

export function initialize(store, router){
	router.beforeEach((to, from, next) => {
	const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
	const currentUser = store.state.currentUser;
	
	if(requiresAuth && !currentUser){
		next('/');
	}else{
		next();
	}
});


if(store.state.currentUser != null){
	axios.defaults.headers.common["Authorization"] = `${store.state.currentUser.token}`;
}

// axios.defaults.headers.common["Authorization"] = `Bearer ${store.getters.currentUser.token}`

}