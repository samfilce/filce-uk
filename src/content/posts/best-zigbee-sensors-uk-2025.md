---
title: "Best Zigbee Sensors UK 2025 — Top Motion & Door Sensors for Home Assistant"
date: 2026-04-15
description: "The best Zigbee motion sensors and door sensors for UK homes in 2025. Aqara, Philips Hue, SONOFF, and Xiaomi tested with Home Assistant — find the right sensor for your setup."
category: "Home Automation"
tags: ["zigbee", "motion-sensors", "door-sensors", "home-assistant", "aqara", "philips-hue", "sonoff", "buying-guide", "uk-buying-guide", "smart-home"]
---

# Best Zigbee Sensors UK 2025

*Last updated: April 2025 | All sensors tested with Home Assistant ZHA and Zigbee2MQTT*

---

Sensors are the nervous system of a smart home. Without them, you're just remotely switching things on and off. With them, your home starts to respond to what's actually happening — lights that come on when you enter a room, doors that alert you when opened, heating that adjusts based on occupancy.

Zigbee sensors in particular are the gold standard for home automation: low power, local control, no cloud dependency, and they extend your mesh with every device you add.

Here are the best Zigbee sensors available in the UK right now, tested with real Home Assistant setups.

---

## Quick Comparison Table

| Sensor | Type | Battery Life | Range | Home Assistant | Best For | Price |
|--------|------|-------------|-------|----------------|----------|-------|
| **Aqara Motion Sensor P1** | Motion + light | ~2 years | 7m | ✅ Excellent | Best motion sensor overall | [~£18](https://www.amazon.co.uk/dp/B09QKQ3QKC?tag=filce-21) |
| **Philips Hue Motion** | Motion + temp + light | ~2 years | 12m | ✅ Good | Hue ecosystem, wider range | [~£35](https://www.amazon.co.uk/dp/B076MGK22M?tag=filce-21) |
| **SONOFF SNZB-03P** | Motion | ~3 years | 6m | ✅ Excellent | Budget motion pick | [~£10](https://www.amazon.co.uk/dp/B0BVJJ4KSJ?tag=filce-21) |
| **Xiaomi Door/Window Sensor** | Contact | ~2 years | N/A | ✅ Excellent | Door/window monitoring | [~£9](https://www.amazon.co.uk/s?k=xiaomi+zigbee+door+sensor&tag=filce-21) |

---

## Why Zigbee (Not WiFi) for Sensors

Before getting into specific products, it's worth explaining why Zigbee dominates in home automation sensors.

**Battery life:** Zigbee sensors sip power. A WiFi motion sensor might last weeks; a Zigbee sensor lasts 1–3 years on a single CR2450 coin cell. That matters when you have 20 sensors spread around the house.

**Local control:** Zigbee runs locally. No cloud, no internet dependency, no privacy concerns. If your broadband goes down, your sensors still fire and your automations still run.

**Mesh networking:** Every mains-powered Zigbee device (like smart plugs and light bulbs) acts as a router, extending range to battery sensors. The more Zigbee devices you have, the more reliable the network becomes.

**Response speed:** Local Zigbee events reach Home Assistant in 100–300ms. Cloud-dependent sensors often introduce 1–3 second delays. For motion-triggered lighting, that difference is the gap between "smart home" and "annoying home."

You'll need a Zigbee coordinator to use these sensors. If you don't have one yet, the [SONOFF Zigbee PoE Controller](/posts/sonoff-poe-review/) is what I run — reliable, centrally-placeable, and excellent with 50+ devices.

---

## 1. Aqara Motion Sensor P1 — Best Overall Motion Sensor

**[➡️ Check current price on Amazon UK](https://www.amazon.co.uk/dp/B09QKQ3QKC?tag=filce-21)**

The Aqara Motion Sensor P1 is the motion sensor I recommend to anyone building a Home Assistant setup. It's accurate, fast, and includes features most competitors don't offer at this price point.

### What Makes It Stand Out

**Adjustable sensitivity and detection angle**

The P1 lets you adjust PIR sensitivity (1–3 levels) and has a 170° horizontal detection angle with a physical mount that pivots. This means you can tune it for a corridor versus a large room, and mount it on a wall or ceiling without needing a separate bracket.

**Light level sensing included**

The P1 also reports ambient light levels (lux). This is crucial for intelligent automations: you don't want lights to turn on if there's already enough daylight. "Turn on lights if motion detected AND lux < 50" is a simple but powerful automation that the P1 enables.

**Fast response and reliable pairing**

In my testing across multiple Zigbee setups (ZHA and Zigbee2MQTT), the P1 pairs reliably and stays connected. Motion events arrive in under 200ms. The default cooldown period (time before it reports "clear" again) is configurable in Zigbee2MQTT.

### Pros
- 170° detection angle, adjustable sensitivity
- Lux sensor included for intelligent lighting automations
- Excellent Home Assistant support (ZHA + Zigbee2MQTT)
- ~2 year battery life on CR2450
- Versatile mounting — wall or ceiling

### Cons
- Slightly bulkier than the SONOFF alternative
- Requires Zigbee hub (no standalone WiFi mode)
- App experience (Aqara Home) requires their hub for full features

### Verdict

**Best motion sensor for Home Assistant.** The lux sensor and adjustable sensitivity make this the most versatile option available at the price.

---

## 2. Philips Hue Motion Sensor — Best for Wider Coverage

**[➡️ Check current price on Amazon UK](https://www.amazon.co.uk/dp/B076MGK22M?tag=filce-21)**

The Philips Hue Motion Sensor is the most expensive option on this list, but it earns its premium with a 12-metre detection range, temperature sensing, and one of the most polished experiences in the Zigbee sensor market.

### What Makes It Stand Out

**12-metre PIR range**

Most sensors cover 6–7 metres. The Hue Motion Sensor covers 12 metres with a 90° field of view. For large open-plan spaces, long hallways, or stairwells, this extra range is genuinely useful.

**Temperature sensor included**

Alongside motion and light, the Hue sensor reports ambient temperature. In a Home Assistant setup, this can drive heating automations — turn up the thermostat in a room that's below 19°C when it's occupied.

**Works without Hue Bridge**

The Hue Motion Sensor is a standard Zigbee device. It pairs directly with ZHA or Zigbee2MQTT — no Hue Bridge required. You get all the sensor data in Home Assistant without paying for the ecosystem lock-in.

### Pros
- 12m detection range — best on this list
- Temperature sensor included
- Premium build quality, sleek design
- Works with ZHA/Zigbee2MQTT (no Hue Bridge needed)
- Excellent Home Assistant support

### Cons
- Most expensive option (~£35)
- 90° field of view is narrower than the Aqara P1's 170°
- Larger physical footprint

### Verdict

**Best for large rooms and long-range detection.** The 12m range and temperature sensor justify the premium for the right spaces.

---

## 3. SONOFF SNZB-03P — Best Budget Motion Sensor

**[➡️ Check current price on Amazon UK](https://www.amazon.co.uk/dp/B0BVJJ4KSJ?tag=filce-21)**

The SONOFF SNZB-03P is the value pick. At around £10 per sensor, it's priced for bulk deployment — and it performs well beyond what the price suggests.

### What Makes It Stand Out

**~3 year battery life**

SONOFF claim up to 3 years on a single CR2450 battery. In practice, with typical home automation usage, that's broadly accurate. For sensors in low-traffic areas or secondary zones, this longevity is excellent.

**Fast motion detection**

The SNZB-03P uses PIR with a detection angle of 120° and 6m range. Response time in Home Assistant is fast — typically under 300ms. For light automations, it's perfectly adequate.

**Excellent value for multi-room deployments**

If you want motion detection in every room and can't justify £18–35 per sensor, the SNZB-03P at £10 makes it affordable. I run several as secondary sensors in rooms that don't need the precision of the Aqara P1.

### Pros
- Exceptional value at ~£10
- ~3 year battery life
- Fast pairing with ZHA and Zigbee2MQTT
- Compact, unobtrusive design
- Good Home Assistant support

### Cons
- No lux sensing (motion only)
- 120° field of view — narrower than Aqara P1
- 6m range — less than Hue Motion
- No sensitivity adjustment

### Verdict

**Best budget motion sensor.** Buy these for secondary rooms, hallways, and anywhere you want coverage without the premium price.

---

## 4. Xiaomi/Aqara Door & Window Sensor — Best Contact Sensor

**[➡️ Check current price on Amazon UK](https://www.amazon.co.uk/s?k=xiaomi+zigbee+door+sensor&tag=filce-21)**

Contact sensors might seem less exciting than motion sensors, but they're actually among the most useful devices in a smart home. The Xiaomi Zigbee door sensor is the one I use throughout my house.

### What Makes It Stand Out

**Tiny, discreet form factor**

The Xiaomi sensor is remarkably small — the main unit is about the size of a matchbox, and the magnet is even smaller. On a door frame, it's nearly invisible.

**Huge range of use cases**

Door opened = turn on hallway light. Door opened after midnight = send alert. Fridge door open for > 5 minutes = notification. Bathroom door closed = activate fan. Contact sensors unlock a category of automations motion sensors can't cover.

**Reliable Zigbee2MQTT and ZHA support**

The Xiaomi Zigbee sensors have been supported in Home Assistant for years and are extremely well-documented. They "just work" with both ZHA and Zigbee2MQTT out of the box.

**Very affordable**

At around £9 per sensor, contact sensors are one of the cheapest automations you can add. Deploy them on every external door, your garage, your meter cupboard.

### Pros
- Extremely compact, barely visible when installed
- Excellent Home Assistant compatibility
- Very affordable — great for multi-door deployment
- ~2 year battery life on CR2032
- Tamper alerts available in some models

### Cons
- Contact (open/close) only — no motion or light
- Some variants require Xiaomi hub for full features (but basic Zigbee functions work standalone)
- Adhesive mount may not suit all surfaces

### Verdict

**Best contact/door sensor.** Deploy these on every door and window that matters. At this price, there's no reason not to.

---

## Building Automations with Zigbee Sensors

Here are the automations I actually run using these sensors — all via [Home Assistant](/posts/home-assistant-guide/):

**Motion-triggered lighting:**
> Motion detected (Aqara P1) AND lux < 50 → Turn on lights → Turn off 5 minutes after motion clears

**Door open at night:**
> Front door sensor opened AND time is 23:00–06:00 → Send push notification

**Bathroom fan automation:**
> Bathroom door closed AND motion detected → Turn on extract fan → Fan off 5 minutes after door opens

**Occupancy-aware heating:**
> No motion in any room for 60 minutes → Set thermostat to away mode

For a deeper look at building these kinds of automations, see: [Home Assistant Guide](/posts/home-assistant-guide/)

---

## Do You Need a Zigbee Hub?

Yes — Zigbee sensors need a coordinator/hub. Options:

- **SONOFF Zigbee PoE Controller** — What I use. PoE-powered, excellent range, supports Zigbee and Thread. [Review here](/posts/sonoff-poe-review/)
- **ConBee II / Sonoff USB Dongle Plus** — USB stick options that work with Home Assistant. Good for smaller setups.
- **IKEA Dirigera or Hue Bridge** — Ecosystem hubs that limit flexibility. Not recommended if you're serious about Home Assistant.

For Home Assistant users, a dedicated USB or PoE coordinator running ZHA or Zigbee2MQTT is the right choice.

---

## Where to Buy

| Sensor | Amazon UK Link |
|--------|---------------|
| Aqara Motion Sensor P1 | [Buy on Amazon](https://www.amazon.co.uk/dp/B09QKQ3QKC?tag=filce-21) |
| Philips Hue Motion Sensor | [Buy on Amazon](https://www.amazon.co.uk/dp/B076MGK22M?tag=filce-21) |
| SONOFF SNZB-03P | [Buy on Amazon](https://www.amazon.co.uk/dp/B0BVJJ4KSJ?tag=filce-21) |
| Xiaomi Door Sensor | [Buy on Amazon](https://www.amazon.co.uk/s?k=xiaomi+zigbee+door+sensor&tag=filce-21) |

---

## FAQ

## What are the best Zigbee sensors for Home Assistant in the UK?

The **Aqara Motion Sensor P1** is the best all-round Zigbee motion sensor for Home Assistant users. It includes a lux sensor, adjustable sensitivity, and wide 170° coverage. For budget deployments, the **SONOFF SNZB-03P** offers excellent performance at ~£10. For contact sensing, the **Xiaomi door sensor** is hard to beat for price and reliability.

## Do Zigbee sensors work without the internet?

Yes — this is one of Zigbee's key advantages. Zigbee sensors communicate locally via your Zigbee coordinator. Automations triggered by Zigbee sensors run entirely on-device within Home Assistant. No internet connection required, no cloud outage risk.

## How long do Zigbee sensor batteries last?

Most Zigbee sensors last 1–3 years on a single coin cell battery (typically CR2450 or CR2032). The SONOFF SNZB-03P claims ~3 years. Exact life depends on how frequently the sensor reports — high-traffic areas will drain batteries faster.

## Can I use Zigbee sensors without Home Assistant?

Yes, but with limitations. Sensors can work with ecosystem hubs (IKEA Dirigera, Philips Hue Bridge, Aqara Hub) for basic automations. However, for the full power of cross-sensor automations, custom logic, and local control without ecosystem lock-in, Home Assistant is the way to go.

## What's the difference between PIR and radar motion sensors?

PIR (passive infrared) sensors — like all options on this list — detect movement via body heat. They're inexpensive and reliable for most use cases. Radar (mmWave) sensors detect presence, not just movement, meaning they can tell if someone is sitting still in a room. Radar sensors are more expensive but increasingly popular for precision automations like occupancy-based heating.

---

## Ready to Automate?

Zigbee sensors are a starting point, not an end point. Once you have sensors reporting to Home Assistant, the automations you can build are limited only by imagination.

**[→ Home Automation Starter Checklist](/posts/home-automation-starter-checklist/)** — The complete list of hardware and software to start your smart home right.

**[→ Home Assistant Guide](/posts/home-assistant-guide/)** — Full setup guide for the most powerful home automation platform available.

**[→ SONOFF Zigbee PoE Controller Review](/posts/sonoff-poe-review/)** — The coordinator I use for 50+ Zigbee devices.

---

*Disclosure: Some links are Amazon affiliate links. As an Amazon Associate I earn from qualifying purchases — at no extra cost to you. All reviews are based on real-world testing and independent opinion.*
