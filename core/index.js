export const asyncHTML = (parentId, body) => {
    document.getElementById(parentId).innerHTML += body;    
    Buttons(Button)
}

export const stateHTML = (parentId, body) => {
    document.getElementById(parentId).innerHTML = body;
}

export const API_GET = async(url) => {
    return fetch(`${url}`)
    .then(response => response.json())
    .catch(error => error)
}
export const API_POST = (url, body, header={}) => {
    return fetch(`${url}`, {
        method: 'POST',
        body: `${body}`, //id=${id}&username=${username}&password=${password}
        headers: {
            ...header,
            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        referrer: 'no-referrer'
    })
    .then(response => response.json())
    .catch(error => error)
}
export const API_PUT = (url, body, header={}) => {
    return fetch(`${url}`, {
        method: 'POST',
        body: `${body}`, //id=${id}&username=${username}&password=${password}
        headers: {
            ...header,
            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        referrer: 'no-referrer'
    })
    .then(response => response.json())
    .catch(error => error)
}

export const API_DELETE = (url) => {
    return fetch(`${url}`)
    .then(response => response.json())
    .catch(error => error)
}

export const Global = (arr) => {
    for(const element of arr){
        for (const [key, value] of Object.entries(element)) {
            localStorage.setItem(key, value)
        }
    }
}
    
export const GetGlobal = (specify) => {
    return localStorage.getItem(specify)
}

export const ClearGlobal = (specify=null) => {
    if(specify!=null){
        return localStorage.removeItem(specify)
    }
    return localStorage.clear()
}

export const Render = (element) => {
    document.querySelector('#root').innerHTML = element;
    return element;
}

export const reRenderer = (parentNodeId, content) => {
    let newContent = content
    if(document.getElementById(parentNodeId)) document.getElementById(parentNodeId).innerHTML = newContent
}

export const State = (initialState) => {
    let value = initialState;
    function setState(nextValue, parentNodeId, content) {
        reRenderer(parentNodeId, content)
        value = nextValue;
    }
    return [value, setState];
}

export const Loader = (components) => {
    for(const element of components) {
        let script = document.createElement('script')
        script.type = "module"
        script.src = `../src/${element}`
        document.querySelector('body').appendChild(script)
    }
}

export const Buttons = (arr) => {

    for(const element of arr){
        if(document.getElementById(element.id)) document.getElementById(element.id).onclick = element.func;
    }

    // if(document.getElementById(nodeId)) document.getElementById(nodeId).onclick = func;
}


//after Virtual
// load components
// Virtual.Loader(['components/Title.js'])
// import components
// import * as TitleElement from './components/Title.js'