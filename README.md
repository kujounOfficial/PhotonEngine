# ⚡ PhotonEngine

> A small graphics/game engine built with **WebGPU** and **TypeScript** — a hobby project where I'm learning how modern graphics APIs work and what it takes to build an engine from scratch.

[![WebGPU](https://img.shields.io/badge/WebGPU-%23000000.svg?style=for-the-badge&logo=webgpu&logoColor=white)](https://www.w3.org/TR/webgpu/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Status](https://img.shields.io/badge/status-work%20in%20progress-yellow?style=for-the-badge)]()
[![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)]()

---

## 🧭 About

**PhotonEngine** is my personal attempt at building a graphics engine from the ground up using **WebGPU** — the new, low-level graphics API for the web that succeeds WebGL. The goal isn't to compete with Unity or Unreal, but to actually understand what happens under the hood of a modern engine: the render pipeline, buffer management, shaders, and overall architecture.

This is purely a **hobby / learning project** — development happens whenever I have free time and the itch to experiment. 🔧

## 🚀 Why WebGPU?

- A modern, low-level API — closer to Vulkan/Metal/DX12 than the old WebGL
- Runs directly in the browser, nothing to install
- A great way to learn how compute shaders, render pipelines, and GPU memory actually work

## 🛠️ Tech stack

| Technology | Purpose |
|---|---|
| **TypeScript** | Type safety and better DX |
| **WebGPU** (`@webgpu/types`) | GPU rendering |
| **tsc** | Build/compilation |

## 📦 Installation

```bash
git clone https://github.com/kujounOfficial/PhotonEngine.git
cd PhotonEngine
npm install
```

## ▶️ Build

```bash
npm run build
```

The compiled output is generated into `dist/`.

> ⚠️ WebGPU is still a fairly new technology — you'll need a browser that supports it (current Chrome/Edge, or Firefox/Safari behind a flag).

## 🗺️ Roadmap

- [ ] WebGPU device & swapchain initialization
- [ ] Basic render pipeline
- [ ] Shader loading and compilation (WGSL)
- [ ] Vertex/index buffers and basic geometry
- [ ] Camera and 3D transforms
- [ ] Textures and materials
- [ ] Scene graph / entity system
- [ ] Lighting
- [ ] A small game demo built on top of the engine

*(The roadmap will shift depending on what I feel like exploring next 😄)*

## 💡 Motivation

This repo mostly serves as my **playground** for understanding graphics programming. If you're into WebGPU or engine architecture, feel free to follow along or reach out — feedback and ideas are always welcome.

## 📄 License

No license yet — reach out if you need specific usage terms.

---

<div align="center">
Built with ☕ and curiosity by <a href="https://github.com/kujounOfficial">@kujounOfficial</a>
</div>
