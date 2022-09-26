# Your first Ink! contract

## Initial setup

This tutorial uses a Standard specific development suite called Signac.

Signac will help you:

* **`Scaffold your dApp project`**
* **`Develop and deploy smart contracts`**
* **`Create custom tasks for blockchain and contract interaction`**
* **`Create predefined functions used in tasks and in the console`**
* **`Make CI faster using cloud builds`**

## Prerequisites

- [Install NPM](https://www.npmjs.com/)
- [Install Node JS v16](https://nodejs.org/download/release/latest-v16.x/)

## Set up Rust

Rust is the main programming language used for Ink! smart contracts. While WASM smart contracts can theoretically be written in any programming language, Ink! libraries and tooling work best with Rust.

First, install the latest version of [Rust](https://www.rust-lang.org/tools/install).  

Then run the following commands:

```sh
# 1. Set 'stable' as the default release channel:

rustup default stable

# 2. Add WASM as the compilation target:

rustup target add wasm32-unknown-unknown

# 3. Install the following packages to generate the contract:

curl -s https://raw.githubusercontent.com/standardweb3/signac/main/install-cargo-contract.sh | bash -s 
```

## Install Signac

Use npm to install the Signac command-line tool globally:

```sh
npm install -g signac
```

Now Signac is ready to use!

## Scaffold Your dApp Workspace

To create the sample project, run `signac` in your project folder.

![](./assets/signac-init.svg)

Let's **create a workspace with a starter Ink! contract**.

*What things will be placed when a workspace is initialized? Let's have a look 👀*

```
.
├── contracts   # smart contract directory
|  ├── ...  # Ink! smart contract cargo  
├── Cargo.toml # Workspace TOML file
├── signac.config.js # Cofiguration file for Signac
├── nx.json 
└── workspace.json  
```
#### contracts
These should be self explanatory, it's where contracts are stored. And as you might be able to guess from the name, one project can contain multiple contracts thanks to workspace. Each contract is managed as one cargo in the directory, and other commands refer to the directory name in the directory.

#### signac.config.js
This is our configuration file, you can find more information about it [here]().

#### Cargo.toml
There is a Cargo.toml here which specifies [cargo workspace](https://doc.rust-lang.org/book/ch14-03-cargo-workspaces.html).

#### nx.json and workspace.json

These are [Nx](https://nx.dev/getting-started/intro)'s configuration file, but these are automatically managed from Signac. <br>*You do not need to edit it unless you understand how Nx works.*

## Building Your First Contract

Next, if you take a look in the `contracts/` folder, you'll see `flipper` contract cargo's `src/lib.rs`:

![](./assets/ink-build.svg)

To build it, simply run:
```sh
signac build
```

Then Signac will help you choose which contract cargo to compile:
```sh
? 📦 Which contract cargo are you compiling with? (Use arrow keys)
❯ flipper
```

## Testing Your First Contract

Signac uses [cargo-test](https://doc.rust-lang.org/cargo/commands/cargo-test.html) to test each contract cargo. It will automatically find test codes with keyword `[test]`. In the flipper contract cargo, you will see test code within `src/lib.rs` file.

![](./assets/ink-test.svg)

To build it, simply run:
```sh
signac test
```

Then Signac will help you choose which contract cargo to test:
```sh
? 📦 Which contract cargo are you testing with? (Use arrow keys)
❯ flipper
```

Congrats! You have created a project and compiled, tested a smart contract.

Show us some love by starring [our repository on GitHub](https://github.com/standardweb3/docs)!️


#### Demo

<embed src="https://vumu.io/share/embed/6331629ffa4182d5e22002e2" type="video/mp4" width="640" height="360" allowscriptaccess="always" allowfullscreen="true"></embed>

