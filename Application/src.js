let courseApi = 'http://localhost:3000/course';

function start() {
    getCourse(renderCourses);
    handleCreateForm();
}

//Start the web application
start();

//Functions Declaration

function getCourse(callBack) {
    fetch(courseApi).then(response => {
        return response.json();
    }).then(callBack);
}

function renderCourses(courses) {
    let listCourse = document.querySelector('.listCourse');
    let htmls = courses.map((course) => {
        return `
            <li class="element-item-${course.id}">
                <h4>${course.name}</h4>
                <p>${course.description}</p>
                <button class="btn formgroup__delete" onclick="handleDeleteCourse(${course.id})">Delete</button>
            </li>
        `;
    });
    listCourse.innerHTML = htmls.join('');
}

function handleCreateForm() {
    let createBtn = document.querySelector('.formgroup__submit');
    createBtn.addEventListener('click', () => {
        let name = document.querySelector('input[name="name"]').value;
        console.log(name);
        let description = document.querySelector('input[name="description"]').value;
        //Send POST api using fetch
        let formData = {
            name: name,
            description: description
        }
        createCourse(formData, () => {
            getCourse(renderCourses);
        });
    })
}

function createCourse(data, callBack) {
    let options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    };
    fetch(courseApi, options).then((response) => {
        return response.json();
    }).then(callBack);
}

function handleDeleteCourse(id) {
    let options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    fetch(courseApi + '/' + id, options).then((response) => {
        response.json();
    }).then(() => {
        let courseItem = document.querySelector('.element-item-' + id);
        if (courseItem) {
            courseItem.remove();
        }
    });
}