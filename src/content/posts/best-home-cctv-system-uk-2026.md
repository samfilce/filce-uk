---
title: "Best Home CCTV System UK 2026 — Complete Setup Guide"
date: 2026-05-01
description: "Everything you need to build the best home CCTV system in the UK: cameras, NVR, PoE switch, and cabling — with real product picks tested at home and full costs."
category: "Home Automation"
featuredImage: "/images/reolink-fisheye.jpg"
featuredImageAlt: "PoE CCTV camera installed outdoors — part of a complete home CCTV system guide for UK buyers in 2026"
tags: ["cctv", "home-security", "poe-cameras", "nvr", "poe-switch", "home-automation", "buying-guide", "uk-buying-guide", "reolink", "hikvision", "security-cameras"]
---

# Best Home CCTV System UK 2026 — Complete Setup Guide

*Last updated: May 2026 | Based on two years of running a live home CCTV system in the UK*

---

A good home CCTV system isn't just cameras. It's cameras, an NVR to record everything, a PoE switch to power them, and cabling to tie it together. Buy just the cameras and you'll end up with a fragmented mess that relies on cloud subscriptions and won't survive a router reboot.

I've been running a full PoE CCTV system at home for two years — currently five cameras, a dedicated NVR, and a PoE switch feeding everything over a single network run. This guide covers exactly what you need to buy, at what budget, and why.

---

## What's in a Home CCTV System?

A proper home CCTV system has four layers:

1. **PoE IP cameras** — the eyes. Connect via Ethernet, powered by the same cable.
2. **NVR (Network Video Recorder)** — stores footage locally, 24/7, without cloud fees.
3. **PoE switch** — powers the cameras and connects everything to your network.
4. **Cabling** — Cat5e or Cat6, ideally run through walls for clean installs.

You can mix brands (most cameras support ONVIF), but sticking with one ecosystem (like Reolink) gets you the simplest setup.

---

## Quick System Comparison

| Budget | Cameras | NVR | PoE Switch | Approx Cost |
|--------|---------|-----|------------|-------------|
| **Starter (2–4 cams)** | [Reolink RLC-810A](https://amzn.to/41TwvVY) ×2–4 | Reolink RLN8-410 | [Yuanley 8-port PoE](/posts/yuanley-18-port-poe-switch-review/) | £250–400 |
| **Mid (4–8 cams)** | [Reolink Fisheye PoE](/posts/reolink-fisheye-camera-review/) ×4–8 | [Reolink RLN36](/posts/reolink-rln36-nvr-review/) | [Yuanley 18-port PoE](/posts/yuanley-18-port-poe-switch-review/) | £600–900 |
| **Advanced (8–16 cams)** | Hikvision DS-2CD2143G2-I ×8+ | Hikvision DS-7608NI | [GigaPlus 2.5G PoE](/posts/gigaplus-2-5g-poe-switch-10g-sfp-review/) | £900–1,500 |
| **Home Lab / HA** | Mixed ONVIF cameras | Frigate on NAS/mini PC | Any managed PoE switch | Variable |

---

## The Cameras

### Best Overall: Reolink RLC-810A (4K, £75–85)

The workhorse of UK home CCTV. 4K 8MP, colour night vision when there's any ambient light, full RTSP support for Home Assistant, and solid UK warranty support. Works with any ONVIF NVR.

**Best for:** Most homes. Outdoor coverage, driveways, gardens.

### Best Fisheye: Reolink Fisheye PoE (6MP 180°, ~£150)

One camera covers an entire room or garage with zero blind spots. [Full review here](/posts/reolink-fisheye-camera-review/).

**Best for:** Garages, open-plan rooms, anywhere you want total coverage without multiple cameras.

### Best Budget: Annke C800 (4K, ~£60–70)

Hikvision sensor in a budget housing. ONVIF-compatible, works with any NVR. Image quality punches above its price. IR-only night vision (no colour).

**Best for:** Tight budgets, secondary coverage areas.

### Hikvision DS-2CD2143G2-I (4MP, ~£70)

The go-to for professional installs. Excellent low-light performance, rock-solid reliability, ONVIF + ISAPI. Better than Reolink in difficult lighting conditions.

See the full [Reolink vs Hikvision comparison](/posts/reolink-vs-hikvision-uk-2026/) if you're deciding between the two brands.

---

## The NVR

### Best UK Pick: Reolink RLN36 (~£280–320)

36-channel capacity, 4K@30fps recording, built-in PoE ports for up to 16 cameras, and clean app support. If you're staying in the Reolink ecosystem, this is the end-game NVR for home use.

[Full Reolink RLN36 review here](/posts/reolink-rln36-nvr-review/) — including setup walkthrough, storage requirements, and Home Assistant integration.

**Also consider:** Reolink RLN8-410 for smaller setups (8 channels, ~£120). Same software, much lower cost if you're running under 8 cameras.

### DIY Option: Frigate NVR on a Home Assistant Machine

If you're already running [Home Assistant](/posts/home-assistant-guide/), Frigate turns any mini PC or NAS into an AI-powered NVR with object detection, person alerts, and zero cloud dependency. Steeper setup, but more powerful. Covered in the [Home Assistant pet monitoring guide](/posts/home-assistant-pet-monitoring/).

---

## The PoE Switch

PoE switches are often overlooked, but a bad one will kill your whole system. You need enough PoE budget (watts) to power all cameras simultaneously.

### Best Value: Yuanley 18-Port PoE Switch (~£70–90)

250W PoE budget, 18 ports, VLAN support. Runs our five-camera system with headroom to spare. [Full review here](/posts/yuanley-18-port-poe-switch-review/).

### Best for Home Labs: GigaPlus 2.5G PoE Switch with 10G SFP (~£120–150)

Multi-gig uplinks for future-proofing, 10G SFP+ port for NAS or uplink aggregation. [Full review here](/posts/gigaplus-2-5g-poe-switch-10g-sfp-review/).

**Quick rule of thumb:** Budget 15W per camera for sizing. An 8-camera system needs at least 120W PoE budget.

---

## How to Set It All Up

1. **Plan camera positions first.** Walk your perimeter. Think about coverage zones, cable runs, and where you'll mount each camera.
2. **Run Cat6 cable.** Drop cables from your switch location to each camera mount point. Through loft/roof space is cleanest.
3. **Connect cameras to PoE switch ports.** They'll power on automatically.
4. **Add cameras to NVR.** Reolink NVRs auto-discover cameras on the same PoE ports. For other brands, use ONVIF.
5. **Configure motion zones and recording schedules.**
6. **Optional: Integrate with Home Assistant.** Use RTSP streams for live view, Frigate for AI detection, or the Reolink integration for events.

See the full [Reolink setup guide](/posts/reolink-setup-guide-uk-2026/) for a detailed walkthrough including app setup, remote access, and Home Assistant integration.

---

## How Much Storage Do You Need?

| Cameras | 1080p Recording | 4K Recording |
|---------|----------------|--------------|
| 2 cameras | ~1TB/month | ~3TB/month |
| 4 cameras | ~2TB/month | ~6TB/month |
| 8 cameras | ~4TB/month | ~12TB/month |

*Estimates based on 24/7 continuous recording at medium bitrate. Motion-only recording cuts this by 60–80%.*

Most setups use **motion-triggered recording** + a rolling 30-day loop. For 4–8 cameras at 4K, a 4–8TB HDD is realistic.

---

## CCTV + Home Assistant

All the cameras above support RTSP streaming, which means they integrate directly with Home Assistant for:

- **Live camera feeds** on dashboards
- **Motion alerts** via automations
- **Person/vehicle detection** with Frigate
- **Recording to local NAS** without a separate NVR
- **Integration with door locks, alarms, and lighting**

See [Home Assistant Pet Monitoring](/posts/home-assistant-pet-monitoring/) for a real-world example of how this works in practice. The same setup works for general home security.

---

## Monitoring Your Dog? Read This

If one of your goals is keeping an eye on your dog while you're out, the [dedicated dog monitoring guide](/posts/how-to-monitor-dog-when-away-uk-guide/) covers camera positioning, two-way audio, separation anxiety tech, and alert setups specifically for pet monitoring.

---

## Frequently Asked Questions

### Do I need a subscription for home CCTV?

No. A proper PoE system with a local NVR stores everything on-site, no cloud required, no monthly fees. Avoid consumer cameras (Ring, Nest, Arlo) if you want subscription-free operation.

### What's the difference between PoE and WiFi cameras?

PoE cameras are powered and connected via a single Ethernet cable. They're more reliable, have no battery to charge, and aren't affected by WiFi interference. WiFi cameras are easier to install but fail more often and depend on a strong signal.

### Is Reolink worth it for UK homes?

Yes. Reolink offers genuine 4K cameras at £75–150, solid UK support, and excellent Home Assistant integration. See the [Reolink vs Hikvision comparison](/posts/reolink-vs-hikvision-uk-2026/) for a full breakdown of when to choose which brand.

### How many cameras do I need?

Most homes need 4–6: front door, back garden, side gate, driveway, and 1–2 interior cameras. Start with the highest-risk areas and add from there.

### Can I mix Reolink and Hikvision cameras on the same NVR?

Yes, if the NVR supports ONVIF (most do). Reolink's RLN-series NVRs accept any ONVIF camera. You'll lose some brand-specific features (like Reolink's smart detection on Hikvision cameras), but recording and live view will work fine.

### Is 4K worth it for home CCTV?

Yes for key zones (front door, driveway) where you need facial recognition or number plate visibility. Overkill for side gates or garden coverage where motion detection is the goal. Mix resolutions to manage storage.

### Do I need planning permission for CCTV in the UK?

For domestic use pointing at your own property: no. If cameras capture public spaces or neighbours' property, you need to comply with UK GDPR and the ICO's CCTV code of practice. Keep cameras pointed at your own land.

---

## The Bottom Line

A complete home CCTV system in the UK costs **£300–900** depending on how many cameras you need. That's a one-time cost with no subscriptions, no cloud dependency, and recordings that stay on your hardware.

The fastest path to a reliable system:
- **Reolink cameras** → **Reolink NVR** → **Yuanley or GigaPlus PoE switch**
- Add Home Assistant integration when you're ready to automate

Start with the [PoE camera buying guide](/posts/best-poe-security-cameras-uk-2025/) to pick your cameras, then come back here to spec out the full system.

---

*All product links may be affiliate links. Prices are approximate and vary by retailer. Tested and researched for UK buyers in 2026.*
