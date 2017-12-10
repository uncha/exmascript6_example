export default class{
	constructor(){
		this._list = [];
	}

	get list(){
		return this._list;
	}

	getIndexValue(index){
		return this._list[index];
	}

	add(value){
		if(!value) return;

		const obj = {
			content:value,
			date:this.formatDate()
		};
		this._list.push(obj);
	}

	modify({value, index}){
		if(!value) return;
		
		const obj = {
			content:value,
			date:this.formatDate()
		};
		this._list[index] = obj;
	}

	remove(index){
		this._list.splice(index, 1);
	}

	formatDate() {
	    let date = new Date();
	    let month = '' + (date.getMonth() + 1);
	    let day = '' + date.getDate();
	    let year = date.getFullYear();

	    if (month.length < 2) month = '0' + month;
	    if (day.length < 2) day = '0' + day;

	    return [year, month, day].join('-');
	}
}