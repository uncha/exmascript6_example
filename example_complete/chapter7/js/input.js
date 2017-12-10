export default class{
	constructor({save}){
		this.$value = $('#value');
		this.$btn = $('#btn');
		this.save = save;

		this.$btn.on('click', ()=>{
			let value = this.$value.val();
			this.$value.val('');
			this.save.call(this, value);
		});
	}

	set value(value){
		this.$value.val(value);
	}
}