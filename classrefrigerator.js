'use strict';

class Refrigerator {
    constructor(marca, color, capacidad, meal) {
        this.marca = marca;
        this.color = color;
        this.capacidad = capacidad;
        this.meal = meal;
    }

    showinfo() {
        alert(`Marca: ${this.marca}`);
        alert(`Color: ${this.color}`);
        alert(`Capacidad: ${this.capacidad}`);
        alert(`Productos: ${this.meal}`);
    }

    showProducts() {
        alert(`Productos: ${this.meal}`);
    }

    compras(products) {
        if (Array.isArray(products)) {
            this.meal = this.meal.concat(products);
        } else {
            this.meal.push(products);
        }
    }

    comida(product) {
        let posicion = this.meal.indexOf(product);

        if (posicion !== -1) {
            this.meal.splice(posicion, 1);
            alert(`${product} se ha eliminado de la refrigeradora`);
        } else {
            alert('Producto agotado');
        }
    }
}

let refri = new Refrigerator('indurama', 'blanca', '600 lbs', ["cerveza", "pollo", "leche", "huevos", "carne"]);

refri.showinfo();
refri.compras(["jamon", "mortadela"]); 
refri.showProducts();

refri.comida('carne'); 
refri.showProducts();
refri.showinfo();
