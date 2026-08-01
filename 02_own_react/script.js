function showContent(data, container) {
    let element = document.createElement(data.type);
    // element.setAttribute("href", data.props.href);
    // element.setAttribute("target", data.props.target);
    for (const prop in data.props) {
        if(prop === "children") continue;
        element.setAttribute(prop, data.props[prop])
        console.log(prop)
    }
    element.innerHTML = data.children;
    container.appendChild(element);
}

const container = document.querySelector('#root');

let data = {
    type: 'a',
    props: {
        href: "https://www.google.com",
        target: "_blank"
    },
    children: "Click me"
};

showContent(data, container);