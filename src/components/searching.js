import {rules, createComparison, defaultRules} from "../lib/compare.js";

export function initSearching(searchField) {
    // @todo: #5.1 — настроить компаратор
	const compare = createComparison(defaultRules.skipEmptyTargetValues, rules.searchMultipleFields(searchField, ['date', 'customer', 'seller'], false));

	return (data, state, action) => {
		return data.search(row => compare(row, state));
	};
}