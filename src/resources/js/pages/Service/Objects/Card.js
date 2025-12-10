export class Card {
    value = null;
    suite = null;
    state = null;
    in_solution = false;
    in_out_of_solution = false;
    in_win = false;

    constructor(value, suite, state, in_solution,in_out_of_solution, in_win){
        this.value = value
        this.suite = suite
        this.state = state
        this.in_solution = in_solution
        this.in_out_of_solution = in_out_of_solution
        this.in_win = in_win
    }

    setRoles(roles){
        this.roles = roles
    }
}