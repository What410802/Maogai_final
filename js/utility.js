const impressAPI = impress();
impressAPI.init();

document.addEventListener(`DOMContentLoaded`, () => {
	const contentItems = document.getElementById(`content-page`).querySelectorAll(`ol li`);
	document.addEventListener(`impress:stepenter`, (e) => {
		const currStep = e.target; // Both src and target are the page TO COME, i.e. the page "current".
		if(currStep.classList.contains(`ret-step`)){
			contentItems.forEach(it => it.classList.remove(`toc-active`));
			const targetItem = document.getElementById(currStep.getAttribute(`mygo2`));
			if(targetItem){
				targetItem.classList.add(`toc-active`); // Unused: , `shake`, `shake-constant`, `shake-slow`, `shake-little`
			}
		}
		else if(currStep.classList.contains('beg-step')){
			contentItems.forEach(it => it.classList.remove(`toc-active`));
		}
	});
});
document.addEventListener(`keydown`, (event) => {
	if(event.ctrlKey && (event.key === 'o' || event.key === 'Escape')){
		console.log(`Ctrl+${event.key} pressed. Going to "myfinal".`);
		event.preventDefault();
		impressAPI.goto(`myfinal`);
	}
})