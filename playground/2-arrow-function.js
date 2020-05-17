// ES6

const event = {
    name: "Birthday party",
    printGuestList: () => {
        console.log("Guest list for " + this.name);
    }
}

event.printGuestList();

// printGuestList function using arrow function is not binded to the scope of the event parent "this"

const event2 = {
    name: "Birthday party: ",
    guestList: ["micmic", "volvol"],
    printGuestList() {
        console.log("Guest list for " + this.name);
        this.guestList.forEach((guest) => {
            console.log(guest + " is attending " + this.name);
        });
    }
}

event2.printGuestList();