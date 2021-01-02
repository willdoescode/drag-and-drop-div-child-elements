"use strict";
let hoverEl = null;
let currentItem = null;
let startingPos = null;
const mdHandler = (e) => {
    const el = e.currentTarget;
    currentItem = el;
    const newParent = document.querySelector('body');
    const oldParent = el.parentElement;
    startingPos = oldParent;
    oldParent.removeChild(el);
    newParent.appendChild(el);
    el.style.position = 'absolute';
};
const muHandler = (e) => {
    var _a;
    const el = currentItem;
    const parent = document.querySelector('body');
    if ((hoverEl === null || hoverEl === void 0 ? void 0 : hoverEl.className) === 'lane') {
        parent.removeChild(el);
        hoverEl === null || hoverEl === void 0 ? void 0 : hoverEl.appendChild(el);
        el.style.position = '';
    }
    else if ((hoverEl === null || hoverEl === void 0 ? void 0 : hoverEl.className) === 'item') {
        parent.removeChild(el);
        (_a = hoverEl === null || hoverEl === void 0 ? void 0 : hoverEl.parentElement) === null || _a === void 0 ? void 0 : _a.appendChild(el);
        el.style.position = '';
    }
    else {
        parent.removeChild(el);
        startingPos === null || startingPos === void 0 ? void 0 : startingPos.appendChild(currentItem);
        el.style.position = '';
    }
    currentItem = null;
};
const mouseMoveHandler = (e) => {
    const el = currentItem;
    if (el !== null) {
        el.style.top = e.pageY + 20 + "px";
        el.style.left = e.pageX + 20 + "px";
    }
};
const hoverHandler = (e) => {
    hoverEl = e.target;
    if (hoverEl.className === 'lane' && currentItem !== null) {
        hoverEl.style.border = '1px solid green';
    }
};
const normalBorder = (e) => {
    e.currentTarget.style.border = '1px solid red';
};
document.addEventListener('mouseup', muHandler);
document.addEventListener('mousemove', mouseMoveHandler);
document.addEventListener('mouseover', hoverHandler);
//# sourceMappingURL=index.js.map