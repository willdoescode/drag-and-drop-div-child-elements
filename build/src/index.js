"use strict";
let hoverEl = null;
let currentItem = null;
let startingPos = null;
const mdHandler = (e) => {
    const el = e.currentTarget;
    currentItem = el;
    const body = document.querySelector('body');
    const oldParent = el.parentElement;
    startingPos = oldParent;
    oldParent.removeChild(el);
    body.appendChild(el);
    el.style.position = 'absolute';
    el.style.transform = 'rotate(15deg) scale(1.1)';
};
const muHandler = (e) => {
    var _a;
    const el = currentItem;
    const body = document.querySelector('body');
    if ((hoverEl === null || hoverEl === void 0 ? void 0 : hoverEl.className) === 'lane') {
        body.removeChild(el);
        hoverEl === null || hoverEl === void 0 ? void 0 : hoverEl.appendChild(el);
        el.style.position = '';
    }
    else if ((hoverEl === null || hoverEl === void 0 ? void 0 : hoverEl.className) === 'item') {
        body.removeChild(el);
        (_a = hoverEl === null || hoverEl === void 0 ? void 0 : hoverEl.parentElement) === null || _a === void 0 ? void 0 : _a.appendChild(el);
        el.style.position = '';
    }
    else {
        body.removeChild(el);
        startingPos === null || startingPos === void 0 ? void 0 : startingPos.appendChild(currentItem);
        el.style.position = '';
    }
    el.style.transform = 'rotate(0deg) scale(1)';
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