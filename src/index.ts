let hoverEl: HTMLElement | null = null;
let currentItem: HTMLElement | null = null;
let startingPos: HTMLElement | null = null;

const mdHandler = (e: Event): void => {
	const el = e.currentTarget as HTMLElement
	currentItem = el
	const newParent = document.querySelector('body') as HTMLElement
	const oldParent = el.parentElement as HTMLElement
	startingPos = oldParent
	console.log(startingPos)
	oldParent.removeChild(el)
	newParent.appendChild(el)
	el.style.position = 'absolute'
}

const muHandler = (e: Event): void => {
	const el = currentItem
	const parent = document.querySelector('body') as HTMLElement
	if (hoverEl?.className === 'lane') {
		parent.removeChild(el!)
		hoverEl?.appendChild(el!)
		el!.style.position = ''
	} else if (hoverEl?.className === 'item') {
		parent.removeChild(el!)
		hoverEl?.parentElement?.appendChild(el!)
		el!.style.position = ''
	}
	else {
		parent.removeChild(el!)
		startingPos?.appendChild(currentItem!)
		el!.style.position = ''
	}
}

const mouseMoveHandler = (e: MouseEvent) => {
	const el = currentItem
	if (el !== null) {
		el!.style.top = e.pageY + 20 + "px"
		el!.style.left = e.pageX + 20 + "px"
	}
}

const hoverHandler = (e: MouseEvent) => {
	hoverEl = e.target as HTMLElement
}

document.addEventListener('mouseup', muHandler)
document.addEventListener('mousemove', mouseMoveHandler)
document.addEventListener('mouseover', hoverHandler)