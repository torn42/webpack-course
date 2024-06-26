import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import styles from '@/App.module.scss';
import { Link, Outlet } from 'react-router-dom';
import { About } from '@/pages/about';
// TREE SHAKING DEMONSTRATION
function TODO(a) {
    console.log('TODOFUNCTION', a);
}
export var App = function () {
    var _a = useState(0), count = _a[0], setCount = _a[1];
    TODO('biba');
    return (_jsxs("div", { children: [_jsxs("h1", { children: ["PLATFORM=", __PLATFORM__] }), _jsx(Link, { to: '/about', children: "about" }), _jsx("br", {}), _jsx(Link, { to: '/shop', children: "shop" }), count, _jsx("button", { className: styles.button, onClick: function () { return setCount(function (count) { return count += 1; }); }, children: "+" }), _jsx("button", { onClick: function () { return setCount(function (count) { return count -= 1; }); }, children: "-" }), _jsx(Outlet, {}), _jsx(About, {})] }));
};
