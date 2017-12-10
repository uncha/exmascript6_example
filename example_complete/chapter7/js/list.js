export default class{
	constructor({modify, del}){
		this.modify = modify;
		this.del = del;
		this.$list = $('#list');

		this.render([]);
	}

	render(list){
		this.$list = $('#list').empty();

		if(list.length > 0){
			for(let row of list){
				let self = this;
				let template = `<tr>
									<td><span>${row.content}</span></td>
									<td class="text-center"><span>${row.date}</span></td>
									<td class="text-right">
										<input class="btn btn-default btn-modify" type="button" value="수정" />
										<input class="btn btn-default btn-delete" type="button" value="삭제" />
									</td>
								</tr>`;

				let $template = $(template);
				this.$list.append($template);

				$template.find('.btn-modify').bind('click', function(){
					self.modify.call(this, $(this).parents('tr').index());
				});

				$template.find('.btn-delete').bind('click', function(){
					self.del.call(this, $(this).parents('tr').index());
				});
			}
		} else {
			let template = `<tr>
								<td colspan="3" class="no-list"><span>등록된 할 일이 없습니다.</span></td>
							</tr>`;
			let $template = $(template);
			this.$list.append($template);
		}
	}
}