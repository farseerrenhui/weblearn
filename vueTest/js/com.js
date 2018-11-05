var test = {
	template:"<div @click='show'>131</div>",
	data:function () {
		return {
			msg:"dasdasdas"
		}
	},
	methods:{
		show:function () {
			alert(this.msg)
		}
	}
}