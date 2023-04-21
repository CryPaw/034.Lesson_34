class todoList {
    constructor () {
        this.list = [];
        this.container = document.querySelector(".container");
        this.input = document.createElement("input");
        this.input.type = ("text");
        this.input.id = ("input");
        this.input.placeholder = ("Введіть щось в мене");
        this.inputLabel = document.createElement("labelW");
        this.inputLabel.textContent = ("Поле для вводу задач: ");

        this.listOl = document.createElement("ol");

        this.input.addEventListener ('keyup', (event) => {
                if (event.keyCode === 13) {
                    this.addTodo();
                }
            });

           
    }

    inputRender() {
        this.container.appendChild(this.inputLabel);
        this.container.appendChild(this.input);
    }

    olRender() {
        this.container.appendChild(this.listOl);
    }

    addTodo() {
        const todoText = this.input.value;
        if (todoText.trim() === '') {
            return
        }

        const newTodo = { text: todoText, completed: false };
        this.list.push(newTodo);
        this.input.value = '';
        this.listRender();
        
    }


    listRender() {
        this.listOl.innerHTML = '';

        for (let index = 0; index < this.list.length; index++) {
    
            const listLi = document.createElement("li");
            listLi.innerText = this.list[index].text + ' ';

            // delete btn
            this.listBtn = document.createElement("button");
            this.listBtn.textContent = ("Видалити");
            this.listBtn.addEventListener ('click', (event) => {
                this.deleteTodo(index);
            });
            listLi.appendChild(this.listBtn);

            //completed btn
            this.listСheck = document.createElement("input");
            this.listСheck.setAttribute("type", "checkbox");

            listLi.appendChild(this.listСheck);
            
            if (this.list[index].completed) {
                this.listСheck.setAttribute("checked", "true");
            }
            
            this.listСheck.addEventListener ('click', (event) => {
                this.toogleCompleted(index);
            });
            
            this.listOl.appendChild(listLi);

        };
        
    }

    deleteTodo(index) {
        this.list.splice(index, 1);
        this.listRender();
    }

    toogleCompleted(index) {
        this.list[index].completed = !this.list[index].completed;
        this.listRender();
    }
}

const todoL = new todoList();
todoL.inputRender();
todoL.olRender();