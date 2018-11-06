var dynamic_progress = {
    props: ['name', 'progress', 'color'],
    template: `<div class="progress_bar_point">
                    <div class="pro-bar">
                        <small class="progress_bar_point_title">
                            {{name}} [{{type}}]
                            <span class="progress_number">{{value}}%</span>
                        </small>
                        <span class="progress_bar_inner" v-bind:style="widthandcolor"></span>
                    </div>
                </div>`,
    data: function () {
        return {
            value: this.progress,
            type: 'Develop',
            widthandcolor: "width: " + this.progress + "%;background-color: " + this.color + ";",
        }
    },
    watch: {
        progress(val) {
            this.value = val;
            this.widthandcolor = "width: " + val + "%;background-color: " + this.color + ";";
        },
        value(val) {
            this.$emit("on-progress-change", val);
        }
    },
    methods: {
        change(val) {
            this.value = val;
        },
    }
}