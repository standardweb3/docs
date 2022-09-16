# Your fist Ink! contract


## Quickstart guide

Signac is a Standard's development environment for smart contracts.

This guide will walk you through setting up your environment, installing Signac, and using the testnet or [LocalStandard]() to interact with a network.

For more information on Signac, visit [Signac's docs](/developing/tools/signac.html).


# Initial setup

This tutorial uses a Osmosis specific development suite called Membrane.

Membrane will help you:

* Scaffold your dApp project
* Develop and deploy smart contracts
* Create custom tasks for blockchain and contract interaction
* Create predefined functions used in tasks and in the console

## Prerequisites

- [Install NPM](https://www.npmjs.com/)
- [Install Node JS v16](https://nodejs.org/download/release/latest-v16.x/)

## 1. Set up Rust

Rust is the main programming language used for CosmWasm smart contracts. While WASM smart contracts can theoretically be written in any programming language, CosmWasm libraries and tooling work best with Rust.

First, install the latest version of [Rust](https://www.rust-lang.org/tools/install).  

Then run the following commands:

```sh
# 1. Set 'stable' as the default release channel:

rustup default stable

# 2. Add WASM as the compilation target:

rustup target add wasm32-unknown-unknown

# 3. Install the following packages to generate the contract:

curl -s http://server/path/script.sh | bash -s 
```

## 2. Install Signac

Use npm to install the Membrane command-line tool globally:

```sh
npm install -g @standardweb3/signac
```

## 3. Scaffold your dApp


#### Project structure

The following structure shows your scaffolded project:

```
.
├── example              # example
│   ├── example
│   └── ...              # example
```

#### 4. Deploy

WIP

#### 3. Interact with the deployed contract


#### 4. Front-end scaffolding

Membrane also scaffolds a very simple front-end:

:::: warning
WIP, this integration with Keplr will need some work.
::::

1. Open the [Osmosis Keplr extension](https://chrome.google.com/webstore/detail/keplr/dmkamcknogkgcdfhhbddcghachkejeap?hl=en), click the gear icon, and switch the network to LocalOsmosis. If you have not added localOsmosis to your keplr yet, follow the instrcutions [here](#configure-keplr-with-localosmosis)

2. To use the front end, run the following commands in order. The `membrane sync-refs` command copies your deployed contract addresses to the front-end part of the codebase.

   ```
   membrane sync-refs
   cd frontend
   npm install
   npm start
   ```

3. Open the Keplr wallet extension and click **Add a wallet**. Click **Recover wallet** and input the following seed phrase to access the sole validator on the LocalOsmosis network and gain funds to get started with smart contracts:

   ```
   satisfy adjust timber high purchase tuition stool faith fine install that you unaware feed domain license impose boss human eager hat rent enjoy dawn
   ```

4. With LocalOsmosis selected in Osmosis Station and the local seed phrase imported, you can now increment and reset the counter from the front end.

#### Demo

:::: warning
WIP, this demo needs work.
::::

