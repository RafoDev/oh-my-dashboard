'use strict';

import stats from "../utils/stats.js";
import charts from "./chart.js";
import nav from "./nav.js";
import { tasksStats, todo } from "./todo.js";

const documentReady = () => {
    nav();
    charts(stats);
    todo();
}
document.addEventListener('DOMContentLoaded',documentReady);