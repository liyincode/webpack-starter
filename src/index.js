async function getComponent() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element
}

getComponent().then((component) => {
    document.body.appendChild(component);
});

