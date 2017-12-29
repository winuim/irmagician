#! /usr/bin/env node

const irMagician = require("../lib/irMagician")
const meow = require("meow")
const cli = meow(`
Usage: irMagician <command> [file] 

Command
    capture    Capture a IR data
    play       Send a IR data
    dump       Dump written data
    write      Write a IR data from json
    temp       Get a Temperature data
    info       Show irMagician Infomation
    showPorts  Show device ports

Options
    -p, --port    Device port

Examples
    irMagician capture
    irMagician dump data.json
    irMagician write data.json
    
`, {})

switch (cli.input[0]) {
case "capture":
    irMagician.capture()
    break
case "play":
    if (cli.input[1]) {
        irMagician.play(cli.input[1])
    } else {
        irMagician.play()
    }
    break
case "dump":
    if (cli.input[1]) {
        irMagician.dump(cli.input[1])
    } else {
        irMagician.dump()
    }
    break
case "write":
    if (cli.input[1]) {
        irMagician.write(cli.input[1])
    } else {
        cli.showHelp()
    }
    break
case "temp":
    irMagician.temp()
    break
case "info":
    irMagician.info(cli.flags["p"])
    break
case "showPorts":
    require("./node_modules/serialport/bin/serialport-list.js")
    break
case "version":
    irMagician.version()
    break
case "reset":
    irMagician.reset()
    break
case "led":
    irMagician.led(cli.input[1])
    break
case "freq":
    irMagician.freq(cli.input[1])
    break
default:
    cli.showHelp()
    break
}
