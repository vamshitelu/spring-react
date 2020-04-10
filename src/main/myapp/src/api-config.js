let apiHost;

const hostname = window && window.location 
	&& window.location.hostname;

/* const port = window && window.location &&
	window.location.port; */

	 
if(hostname.includes('localhost')){
	apiHost = 'http://localhost:8080';
}else if(hostname.includes('dev')){
	apiHost = 'http://localhost:8085';
}else if(hostname.includes('qa')){
	apiHost = 'http://localhost:8090';
}else if(hostname.includes('prod')|| 
	(hostname === 'https://api.example.com')){
		apiHost = 'https://localhost:9000'
	}

/*
if(port.includes(9500)){
	// local profile
	apiHost = 'http://localhost:8080';
}else if(port.includes(9600)){
	// dev profile
	apiHost = 'http://localhost:8085';
}else if(port.includes(9700)){
	// qa profile
	apiHost = 'http://localhost:8090';
}else if(port.includes(9800)){
	// prod profile
	apiHost ='http://localhost:8095';
}
*/
export const API_ROOT = `${apiHost}`;