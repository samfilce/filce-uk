---
title: "Reolink RLN36 NVR Review — 36-Channel Recorder for a Serious Home CCTV Setup"
date: 2026-04-16
description: "The Reolink RLN36 is a 36-channel NVR built for proper home CCTV. Set and forget once it's running. No PoE built in — here's what you need to know before buying."
category: "Home Automation"
rating: 4.5
product: "Reolink RLN36 36-Channel NVR"
brand: "Reolink"
price: "£199.99"
affiliateLink: "https://www.amazon.co.uk/dp/B0CW19WQVK?tag=filce-21"
featuredImage: "/images/reolink-rln36-nvr-review.jpg"
featuredImageAlt: "Reolink RLN36 NVR installed in a server rack, showing green power and red HDD activity LEDs, above a StarTech KVM switch"
tags: ["home-automation", "security", "reolink", "cctv", "nvr", "homelab", "home-assistant"]
---

# Reolink RLN36 NVR Review

**Rating: ⭐⭐⭐⭐½ (4.5/5)**

---

## What It Is

The Reolink RLN36 is a 36-channel Network Video Recorder — the box that sits in your rack or cabinet and handles continuous recording from all your cameras. 36 channels is more than most homes will ever fill, but having that headroom means you're not buying another NVR when you add more cameras.

It supports up to 16MP resolution, works natively with all Reolink cameras, and can record 24/7 or on motion trigger. Once it's set up it runs quietly in the background and does exactly what it's supposed to do.

---

## Installation

The RLN36 is rack-mountable — it slots neatly into a 1U space and sits well alongside other equipment. Setup is straightforward: connect cameras via your network switch, plug in a monitor for initial config (HDMI out on the back), and work through the setup wizard.

**Important: it does not have PoE built in.** Cameras connect over your network, not directly to the NVR. You'll need a separate PoE switch to power your cameras — I use a [YuanLey 18-port PoE switch](https://www.amazon.co.uk/dp/B09VBJ2TZP?tag=filce-21) alongside this. Factor that into your budget if you're building from scratch.

---

## Hard Drives

The RLN36 supports up to 3 hard drives (not included). I installed **3x 4TB WD drives**, giving around 12TB of total storage. For a home setup recording multiple cameras that's a huge amount of headroom — you won't be scrambling to manage storage.

For reference, 12TB at 1080p continuous recording across multiple cameras will give you weeks of footage before it loops. At 4K the footprint is larger but you're still looking at days rather than hours.

WD Purple or WD Red drives are the right choice here — they're designed for always-on surveillance recording. Standard desktop drives can fail early under that kind of sustained write load.

---

## Day-to-Day Use

This is genuinely a set-and-forget device. Once the cameras are configured and recording schedules set, it just runs. The HDD activity light blinks constantly (that's normal — it's always writing), and the interface is accessible locally or via the Reolink app remotely.

Footage review is clean. You can scrub through a timeline per camera, jump to motion events, or pull clips to USB. The 36-channel grid view is useful for a quick visual check across all cameras at once.

It integrates with Home Assistant — cameras feed through and you can surface live views and motion alerts on dashboards. I use this alongside the [Reolink PoE Fisheye](/posts/reolink-fisheye-camera-review/) and other cameras across the house.

---

## What to Know Before Buying

1. **No PoE** — you need a separate PoE switch for your cameras
2. **No hard drives included** — budget for these separately (3x 4TB adds ~£90–120)
3. **Rack mount** — ideal if you have a cabinet; bulkier if you're just putting it on a shelf
4. **36 channels is a lot** — if you only have 4-6 cameras, a smaller RLN model may be better value

---

## Verdict

Solid, reliable, and built for a proper home CCTV setup rather than a casual one. The 36-channel capacity gives you room to grow, the recording quality is excellent, and once it's running it genuinely needs no attention.

The lack of built-in PoE is a minor frustration — it's an odd omission at this price — but pairing it with a dedicated PoE switch is cleaner in a rack setup anyway.

If you're serious about home security and want a long-term recording solution, this is the right foundation to build on.

---

## What You'll Need

- [Reolink RLN36 NVR — Amazon UK](https://www.amazon.co.uk/dp/B0CW19WQVK?tag=filce-21)
- [WD Red 4TB NAS Drive (x3 recommended) — Amazon UK](https://www.amazon.co.uk/dp/B08TZPS4QQ?tag=filce-21)
- [YuanLey 18-Port PoE Switch review + Amazon UK link](/posts/yuanley-18-port-poe-switch-review/)

---

**Related reads:**
- [Reolink Fisheye PoE Camera Review](/posts/reolink-fisheye-camera-review/)
- [Best PoE Security Cameras UK 2025](/posts/best-poe-security-cameras-uk-2025/)
- [Getting Started with Home Assistant](/posts/home-assistant-guide/)

---

*As an Amazon Associate I earn from qualifying purchases. This NVR was bought with my own money.*
