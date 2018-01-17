const instafilterModule = (function() {
	const slider = document.querySelector('input#hue');

	function updateHue(ev) {
		const unit = slider.dataset.unit;
		document.documentElement.style.setProperty(`--${this.name}`, this.value + unit);
	}

	function init() {
		slider.addEventListener('input', updateHue);
	}

	return {
		init: init,
	};
})();

window.onload = () => instafilterModule.init();
