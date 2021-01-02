let hoverEl: HTMLElement | null = null;
let currentItem: HTMLElement | null = null;
let startingPos: HTMLElement | null = null;

const mdHandler = (e: Event): void => {
	const el = e.currentTarget as HTMLElement
	currentItem = el
	const newParent = document.querySelector('body') as HTMLElement
	const oldParent = el.parentElement as HTMLElement
	startingPos = oldParent
	oldParent.removeChild(el)
	newParent.appendChild(el)
	el.style.position = 'absolute'
	el.style.transform = 'rotate(15deg) scale(1.1)'
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
	el!.style.transform = 'rotate(0deg) scale(1)'
	currentItem = null
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
	if (hoverEl.className === 'lane' && currentItem !== null) {
		hoverEl.style.border = '1px solid green'
	}
}

const normalBorder = (e: Event) => {
	(e.currentTarget as HTMLElement).style.border = '1px solid red'
}

document.addEventListener('mouseup', muHandler)
document.addEventListener('mousemove', mouseMoveHandler)
document.addEventListener('mouseover', hoverHandler)
