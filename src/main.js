/*
 * @Date: 30/03/2021 17.16.46 +0800
 * @Author: KnowsCount
 * @LastEditTime: 30/03/2021 17.36.36 +0800
 * @FilePath: /wedding-invitation-for-programmers/src/main.js
 */
import Vue from "vue";
import Wedding from "./Wedding.vue";

/* eslint-disable no-new */
new Vue({
	el: "#app",
	render: h => h(Wedding)
});
