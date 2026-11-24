// import { rules, createComparison } from "../lib/compare.js";

export function initSearching(searchField) {
	// @todo: #5.1 — настроить компаратор
	// const comparator = createComparison([], [
	// 	rules.searchMultipleFields(searchField, ["date", "customer", "seller"], false),
	// ]);

	return (query, state, action) => { // result заменили на query
		return state[searchField] ? Object.assign({}, query, { // проверяем, что в поле поиска было что-то введено
			search: state[searchField] // устанавливаем в query параметр
		}) : query; // если поле с поиском пустое, просто возвращаем query без изменений
	}

	// return (data, state, action) => {
	// 	// @todo: #5.2 — применить компаратор
	// 	const query = state[searchField];
	// 	if (!query) {
	// 		return data;
	// 	}
	// 	// Используем метод filter: оставляем только те строки, где comparator вернул true
	// 	return data.filter((item) => comparator(item, { [searchField]: query }));
	// }
}