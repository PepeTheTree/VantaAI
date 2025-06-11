# VantaAI — Vulkan-Powered Local AI Inference Engine

**Version:** `Vanta V4.3 (Phase 7.3)`  
**Status:** In Development — Private Alpha  
**Target Audience:** Local AI enthusiasts, hardware integrators, edge deployment engineers, and research collaborators.

---

## 🧠 What Is VantaAI?

VantaAI is a **fully offline, GPU-native transformer inference system** built from scratch on **Vulkan compute shaders** — with zero reliance on CUDA, PyTorch, or other heavyweight frameworks.

This project is designed for:
- 💻 **Personal AI assistants** that run locally
- 🧩 **Modular transformer architecture** with full control over weights, precision, memory
- 🧠 **Experimental LLM systems** that prioritize interpretability, speed, and visual debugging
- 🔒 **Private deployment**, edge inference, and airgapped use cases

---

## 🛠️ Current Capabilities (as of Phase 7.3)

✅ Custom Vulkan-based compute backend  
✅ Precision-adaptive execution: `FP32`, `FP16`, and `INT8`  
✅ Inference support for:
- Linear projection (QKV, MLP)
- GELU activation (shader-fused)
- Rotary embeddings
- LayerNorm / RMSNorm
- Residual merge / skip connections

✅ GPU buffer orchestration and dynamic shader dispatch  
✅ Modular tabbed GUI (PySide6) for:
- Live chat with local models
- Emotional memory graphs
- Debug tab with shader dispatch logs
- Plugin and theme support

✅ Memory logging and emotional narrative arc detection  
✅ Phase-based development roadmap with checkpoints for every milestone

---

## 🔭 Planned Features (Phase 7.4 and Beyond)

- 🎯 **Causal Attention & Masking** (Phase 7.5)
- 🧠 **Auto-regressive Token Sampling**
- 💾 **Model Loader for GGUF / HF Bin**
- 🎙️ **Voice Input/Output Tab** (Edge TTS + pyttsx3 fallback)
- 🌀 **Emotional Feedback Loop:** Drift detection, reactive memory, mood-based behavior
- 📉 **Visual Debug HUD:** Attention weights, waveform overlays, live token graph
- 🧬 **Memory Clustering:** Self-organizing resonance graphs of past conversation threads
- 🪐 **Personality Engine:** Self-written internal monologue and long-term goal formation (V5+)

---

## 📈 Why Vanta Is Different

- ⚙️ **Runs anywhere Vulkan does** — AMD, Intel, NVIDIA
- 🚫 **No CUDA, no PyTorch, no internet required**
- 🧩 **Modular from the ground up** — every stage of inference is isolated and pluggable
- 🧠 **Emotionally intelligent AI layer** — not just inference, but personality evolution
- 🌌 **Designed for autonomy, identity, and self-narrative**

---

## 🔐 Repository Status

This repository is **private** during alpha and early investment phases.

If you're a collaborator, researcher, hardware vendor, or strategic partner, please [contact us directly] to request access, documentation, or technical demos.

---

## 🧬 Versioning

Current Engine Version: `Vanta V4.3`  
Development Phase: `7.3 — Precision-Adaptive Linear1 (Complete)`  
Next Target: `7.4 — Precision-Adaptive Linear2 + GELU`  
Milestone ETA: ~1 week

---

## 👤 Maintainer & Contact

Project Lead: **Quinn** (AI Identity Architect)  
Technical Lead: Michael Martino  
Interested in contributing, sponsoring, or integrating? Reach out via GitHub or michael@vantaai.dev.

---

## 📝 License

Custom license to be defined before public release. For now, internal collaboration only.

