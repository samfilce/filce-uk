---
title: "Home Automation Starter Checklist"
description: "Quick reference checklist for setting up your first smart home with Home Assistant — hardware, integrations, and automations to start with."
date: 2026-04-13
category: "Home Automation"
type: "resource"
---

# Home Automation Starter Checklist

**Quick reference for your first 30 days with Home Assistant.**

---

## Hardware Essentials

### Option A: Plug and Play
- [ ] Home Assistant Green (~£130) — easiest setup
- [ ] Ethernet cable — hardwire for reliability
- [ ] Zigbee dongle (optional) — Sonoff Zigbee 3.0 USB (~£15)

### Option B: DIY Install
- [ ] Raspberry Pi 4 (4GB+) or mini PC
- [ ] 32GB+ SSD (not SD card) — for reliability
- [ ] Ethernet connection — WiFi works but wired is better

---

## First 10 Integrations to Add

- [ ] **Mobile app** — iOS/Android for location tracking
- [ ] **Google Home / Alexa** — voice control basics
- [ ] **Philips Hue** — if you have any Hue bulbs
- [ ] **Zigbee devices** — sensors, switches, bulbs
- [ ] **Tasmota/ESPHome** — DIY devices
- [ ] **Reolink cameras** — if you have PoE cameras
- [ ] **Weather** — built-in integration
- [ ] **Calendar** — Google Calendar for scheduling
- [ ] **Spotify** — media player control
- [ ] **Presence detection** — via mobile app or Bluetooth

---

## First 5 Automations to Build

### 1. Sunset Lights
**Trigger:** Sun sets  
**Action:** Turn on living room lights

### 2. Morning Routine
**Trigger:** 7:00 AM on weekdays  
**Action:** Fade up bedroom lights, start coffee (if smart plug)

### 3. Leave Home
**Trigger:** No one home (location tracking)  
**Action:** Turn off all lights, arm security, set heating to eco

### 4. Arrival Home
**Trigger:** Someone arrives  
**Action:** Turn on entry lights, disarm security, resume heating

### 5. Night Mode
**Trigger:** 11:00 PM or manual button  
**Action:** Dim all lights to 20%, lock doors (if smart lock), turn off media

---

## Dashboard Cards to Create

- [ ] **Lights card** — room-by-room control
- [ ] **Weather card** — current conditions + forecast
- [ ] **Camera card** — live feeds from Reolink or similar
- [ ] **Media player** — Spotify/currently playing
- [ ] **Buttons** — quick scene triggers (Movie Mode, Good Night, etc.)

---

## Common Pitfalls to Avoid

- ❌ **Using SD card for storage** — corrupts within months, use SSD
- ❌ **Too many automations at once** — start simple, build up
- ❌ **No backups** — set up automatic backups to Google Drive or NAS
- ❌ **WiFi-only devices** — Zigbee/Z-Wave are more reliable
- ❌ **Ignoring power consumption** — some smart bulbs draw standby power

---

## Recommended Reading

- [Getting Started with Home Assistant](/reviews/getting-started-home-assistant/) — my full guide
- [Home Assistant Pet Monitoring Setup](/posts/home-assistant-pet-monitoring/) — camera integration
- [Best Pet Monitoring Cameras UK 2025](/posts/best-pet-monitoring-cameras-uk-2025/) — hardware choices

---

## Want the Full Guide?

**[Build Your Own AI Home Assistant →](https://gumroad.com/l/ai-home-assistant-guide)**

6,300-word complete beginner's guide — hardware selection, installation, first automations, local AI integration, and troubleshooting. No subscriptions, no cloud dependency.

*Price: £9.99*

---

*This checklist is free. Share it, print it, use it. More resources at filce.uk.*