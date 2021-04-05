// boolean( true / false )
let isOpen: boolean
isOpen = true

//string ('foo', "foo", `foo`)
let message: string
message = `foo ${isOpen}`

//number ( int, float, hexa, binary)
let total: number 
total = 0xff0

//array (type[])
let items: string[] // array of numbers
items = ["Emerson", "Maria", "Jose"]

let values: Array<number> //generic
values = [1, 2, 4]

//tuple like python ( number and parameters pre defined)
let title: [number, string]
title = [1, "foo"]

// enum amount of key : value
enum Colors {
  white = '#fff',
  black = "#000"
}

// any (something else)
let thing: any;
thing = "string"

// void ( empty / not return )

function logger(): void {
  console.log('full')
}

// null / undefined nao aconselhavel usar em tipos primitivos
let variable: null

// never
function error(): never {
  throw new Error("erro")
}

// Object 
let cart: object
cart = {
  // (somethins else)
}
