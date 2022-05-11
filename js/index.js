'use strict';

import stats from "../utils/stats.js";
import charts from "./chart.js";
import nav from "./nav.js";
import { tasksStats, todo } from "./todo.js";
import validacion from "./form.js";

const documentReady = () => {
    nav();
    charts(stats);
    todo();
    validacion();
}
document.addEventListener('DOMContentLoaded',documentReady);