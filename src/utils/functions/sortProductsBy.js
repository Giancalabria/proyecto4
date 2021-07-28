const sortProductsBy = (array, sort, desc) => {
	let newProducts = array.sort(function (a, b) {
		if (sort === 'cost') {
			if (a[sort] < b[sort]) {
				return -1
			} else if (a[sort] > b[sort]) {
				return 1
			} else {
				return 0
			}
		} else if (sort === 'name') {
			if (a[sort].toUpperCase() < b[sort].toUpperCase()) {
				return -1
			} else if (a[sort].toUpperCase() > b[sort].toUpperCase()) {
				return 1
			} else {
				return 0
			}
		}
	})
	return desc ? newProducts : newProducts.reverse()
}
export default sortProductsBy
