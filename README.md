# Rust WebGL Template

Rust and WebGL sample template

## Introduction

TODO

## Installation

First of all make sure that [Rust](https://doc.rust-lang.org/book/ch01-01-installation.html) and [wasm-pack](https://rustwasm.github.io/wasm-pack/installer/) are both installed.

Then clone the repository and install:

```
$ git clone https://github.com/kgish/rust-webgl-template.git
$ cd rust-webgl-template
$ npm install
$ cargo build
```

Now just execute the following command:

```
$ npm run serve
```

Point your favorite browser to this [link](http://localhost:8080) and enjoy.

## From scratch

If you prefer, you can also build all of this from scratch. By doing this on your own, you will get a better grip on 
the required knowledge and acquire useful insights.

### Install

First of all install the [following items](https://rustwasm.github.io/docs/book/game-of-life/setup.html):

* [Rust](https://www.rust-lang.org/tools/install)
* [wasm-pack](https://rustwasm.github.io/wasm-pack/installer)
* [cargo-generate](https://github.com/ashleygwilliams/cargo-generate)
* [npm](https://www.npmjs.com/get-npm)

### Generate the template

```
$ cargo generate --git https://github.com/rustwasm/wasm-pack-template
 Project Name: rust-webgl-template
 Creating project called `rust-webgl-template`...
 Done! New project created /home/kiffin/rust-webgl-template
$ cd rust-webgl-template/
```

### Directory tree

```
rust-webgl-template/
├── Cargo.toml
├── LICENSE_APACHE
├── LICENSE_MIT
├── README.md
├── src
│   ├── lib.rs
│   └── utils.rs
└── tests
    └── web.rs
```

### Cargo.toml

```
[package]
name = "rust-webgl-template"
version = "0.1.0"
authors = ["Kiffin Gish <kiffin.gish@planet.nl>"]
edition = "2018"

[lib]
crate-type = ["cdylib", "rlib"]

[features]
default = ["console_error_panic_hook"]

[dependencies]
wasm-bindgen = "0.2"
console_error_panic_hook = { version = "0.1.1", optional = true }
wee_alloc = { version = "0.4.2", optional = true }

[dev-dependencies]
wasm-bindgen-test = "0.2"

[profile.release]
opt-level = "s"
```

Note the use of [console_error_panic_hook](https://github.com/rustwasm/console_error_panic_hook#readme) and 
[wee_alloc](https://github.com/rustwasm/wee_alloc#readme).

### src/lib.rs

```
mod utils;

use wasm_bindgen::prelude::*;

#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet() {
    alert("Hello, rust-webgl-template!");
}
```

### src/lib.rs

```
pub fn set_panic_hook() {
    #[cfg(feature = "console_error_panic_hook")]
    console_error_panic_hook::set_once();
}
```

### tests/web.rs 

```
#![cfg(target_arch = "wasm32")]

extern crate wasm_bindgen_test;
use wasm_bindgen_test::*;

wasm_bindgen_test_configure!(run_in_browser);

#[wasm_bindgen_test]
fn pass() {
    assert_eq!(1 + 1, 2);
}
```

## References

* [Rust and WebAssembly](https://rustwasm.github.io/docs)
* [wasm-pack](https://rustwasm.github.io/docs/wasm-pack/)
* [wasm-pack-template](https://github.com/rustwasm/wasm-pack-template)
* [WebGL Example](https://rustwasm.github.io/docs/wasm-bindgen/examples/webgl.html)
* [Rust 3D Graphics in the Browser: Boilerplate Setup and WASM Introduction](https://www.youtube.com/watch?v=p7DtoeuDT5Y&list=PLLqEtX6ql2EyPAZ1M2_C0GgVd4A-_L4_5)
* [Rust and Node.js: A match made in heaven](https://blog.logrocket.com/rust-and-node-js-a-match-made-in-heaven/)
