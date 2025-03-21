class Car
{
    constructor()
    {
        this.name=""
        this.model=""
        this.weight=0
    }

    createCar(name, model, weight)
    {
        this.weight=weight
        this.model=model
        this.name=name
    }

    showCar()
    {
        console.log(this.weight);
        console.log(this.name);
        console.log(this.model);
    }
}