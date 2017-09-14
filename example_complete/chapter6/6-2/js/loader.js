export default class {
	constuctor(){

	}

	load({url, callback}){
		const promise = new Promise((resolve, reject)=>{
			let req = new XMLHttpRequest();
			req.open('GET', url);
			req.send();
			req.onreadystatechange = ()=>{
			    if(req.readyState == req.DONE){
			        if(req.status == 200){
			            callback.call(this, req.response);
			        } else {
			            console.log(req.statusText);
			        }
			    }
			}
		});
	}
}