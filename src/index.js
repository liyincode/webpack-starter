import _ from 'lodash'

const element = document.createElement('div');
element.innerHTML = _.join(['Hello', 'webpack'], ' ');
document.body.appendChild(element);
