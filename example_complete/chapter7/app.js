import List from './js/list.js';
import Data from './js/data.js';
import Input from './js/input.js';

const MODE = {
	WRITE:'write',
	MODIFY:'modify'
};

let currentMode = MODE.WRITE;
let modifyIndex;

const data = new Data();

const list = new List({
	modify:function(index){
		currentMode = MODE.MODIFY;
		modifyIndex = index;
		input.value = data.getIndexValue(index).content;
	},
	del:function(index){
		data.remove(index);
		list.render(data.list);
	}
});

const input = new Input({
	save:function(value){
		switch(currentMode){
			case MODE.WRITE:
				data.add(value);
				list.render(data.list);
				break;
			case MODE.MODIFY:
				data.modify({value:value, index:modifyIndex});
				list.render(data.list);
				currentMode = MODE.WRITE;
				break;
		}
	}
});