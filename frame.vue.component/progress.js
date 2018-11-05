var progress = {
	props: ['name', 'value', 'color'],
	template: `<div class="progress_bar_point">
    <div class="pro-bar">
        <small class="progress_bar_point_title">
            {{name}} [{{type}}]
            <span class="progress_number">{{value}}%</span>
        </small>
            <span class="progress_bar_inner" v-bind:style="widthandcolor()"></span>
        </div>
    </div>`,
	data: function () {
		return {
			type: 'Develop',
		}
	},
	methods: {
		widthandcolor: function () {
			return "width: " + this.value + "%;background-color: " + this.color + ";";
		},
	}
}