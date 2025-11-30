document.addEventListener(`DOMContentLoaded`, () => {
	const impressAPI = impress();
	impressAPI.init();
	const contentItems = document.getElementById(`content-page`).querySelectorAll(`ol li`);
	document.addEventListener(`impress:stepenter`, (e) => {
		const currStep = e.target; // Both src and target are the page TO COME, i.e. the page "current".
		if(currStep.classList.contains(`ret-step`)){
			contentItems.forEach(it => it.classList.remove(`toc-active`));
			const targetItem = document.getElementById(currStep.getAttribute(`mygo`));
			if(targetItem){
				targetItem.classList.add(`toc-active`); // Unused: , `shake`, `shake-constant`, `shake-slow`, `shake-little`
			}
		}
		else if(currStep.classList.contains('beg-step')){
			contentItems.forEach(it => it.classList.remove(`toc-active`));
		}
	});
});