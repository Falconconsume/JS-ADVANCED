"use strict"

import {Person} from "./lib/person";
import {Human} from "./lib/human";
import {UuEE} from './lib/uuee'


let John = new Human("John", 25);
let Peter = new Human("Peter", 32);
let machine = new UuEE(John);

machine.sayHello(Person); //No!
machine.sayHello(John); //Hello John