var dynamic_progress = {
    // props: ['name', 'type', 'textcolor', 'progress', 'background'],
    props: {
        name: {
            type: String,
            default: "java"
        },
        type: {
            type: String,
            default: "java"
        },
        textcolor: {
            type: String,
            default: "java"
        },
        progress: {
            type: Number,
            default: 100
        },
        background: {
            type: String,
            default: "red"
        },
    },
    template: `<div class="progress_bar_point">
                    <div class="pro-bar">
                        <small class="progress_bar_point_title">
                            <span v-bind:style="textforground">{{name}} [{{type}}]</span>
                            <span class="progress_number" v-bind:style="textforground">{{value}}%</span>
                        </small>
                        <span class="progress_bar_inner" v-bind:style="widthandcolor"></span>
                    </div>
                </div>`,
    data: function () {
        return {
            value: this.progress,
            color: this.background,
            widthandcolor: "width: " + this.progress + "%;background-color: " + this.background + ";",
            textforground: "color:" + this.textcolor,
        }
    },
    watch: {
        progress(val) {
            this.value = val;
            this.widthandcolor = "width: " + val + "%;background-color: " + this.background + ";";
        },
        value(val) {
            this.$emit("on-progress-change", val);
        },
        background(val) {
            this.color = val;
            this.widthandcolor = "width: " + this.progress + "%;background-color: " + val + ";";
        },
        color(val) {
            this.$emit("on-color-change", val);
        }
    },
    methods: {
        change(val) {
            this.value = val;
        },
    }
}