# 🎮 Valorant Live Stream Tracker & Overlay

A professional, zero-setup desktop utility tool and automated stream overlay engineered for beginner streamers. This system seamlessly tracks your live match **Rank**, **Ranked Rating (RR) changes**, and **Session Win/Loss records** with a minimalist aesthetic matching official competitive ticker designs.

---

## ✨ Features

* **Dynamic Text Color Transitions:** The text dynamically flashes **Neon Green** on match victories and automatically flips to **Vibrant Red** whenever your RR shifts negative from a match loss.
* **Streamlined UI Workspace:** A compact, lightweight desktop window saves your settings locally and manages backgrounds silently without cluttering your system with open console terminal windows.
* **Zero-Leak Pipeline:** Your private API tokens remain completely on your local computer; your public stream layer overlay simply listens to your private machine safely.
* **On-the-Fly Control Macros:** Easily update your party code or use quick button overrides directly on your desktop control panel to adjust session metrics instantly.

---

## 🚀 Quick Start Guide

### 1. Download & Install the Desktop App
1. Navigate to the **Releases** tab on this GitHub repository (or download the setup package directly from the community package share link).
2. Download and run `val-tracker-overlay Setup 1.0.0.exe`.
3. Follow the quick installation installation wizard steps. The setup process will automatically drop a **"Danny Valorant Tracker"** shortcut icon right onto your desktop.

### 2. Secure a Free Permanent API Token
The app requires an access key to fetch secure Riot match statistics safely. Getting your permanent key takes 60 seconds:
1. Head over to the developer engine portal at [api.henrikdev.xyz/dashboard/](https://api.henrikdev.xyz/dashboard/).
2. Log in using your **Discord account** authorization.
3. Select the option to generate a free **"Basic Key"**.
4. When prompted for your app's objective description, type a brief note like: *Private stream overlay utility to display match performance telemetry on my live channel.*
5. Copy your new unique string token (it will begin with `HDEV-`).

### 3. Configure Your Parameters
1. Launch the app from your desktop shortcut icon.
2. Paste your copied token into the **HenrikDev API Key** text field.
3. Input your exact Riot account identification:
   * **Riot Name:** (Your case-sensitive in-game display name)
   * **Tagline:** (Your account tagline numbers *without* the `#` character)
   * **Region:** Select your active server cluster (e.g., Select `Asia Pacific (AP/VN)` for local match shards).
4. Click **Save Settings** to connect your loop engine. Your current stats will replace the default values in the app status box!

---

## 🎬 Hooking It to TikTok Live Studio

Because this architecture runs via an encrypted cloud layout managed directly on this GitHub domain, you don't have to host files or scripts yourself!

1. Open **TikTok Live Studio**.
2. Inside the scene editing suite on the left side menu panel, click **Add Source** and select **Link** (Browser Source).
3. Paste this exact public destination URL straight into the address field:
https://itsdannyit.github.io/Valorant-tracker-overlay/overlay.html
