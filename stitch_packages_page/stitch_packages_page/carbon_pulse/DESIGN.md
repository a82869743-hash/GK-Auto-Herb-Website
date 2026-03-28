# Design System Document: High-Performance Editorial

## 1. Overview & Creative North Star

### Creative North Star: "The Kinetic Atelier"
This design system is not a utility; it is an experience. It treats the digital interface like a luxury automotive showroom—high-contrast, atmospheric, and precision-engineered. We move away from the "standard grid" by utilizing **Kinetic Asymmetry** and **Tonal Depth**. The system thrives on the tension between the deep, infinite voids of `#000000` and the aggressive, high-energy pulses of `primary_container` (#E10600).

To break the "template" look, designers should leverage overlapping elements (e.g., a car silhouette bleeding out of a glass container) and extreme typography scales. The goal is to feel like a high-end digital editorial: spacious, bold, and unapologetically premium.

---

## 2. Colors

The palette is rooted in the "Stealth & Pulse" philosophy. We use dark surfaces to provide a sense of mystery and luxury, while the red acts as a tactical highlight.

### Color Strategy
*   **Primary Background (`surface` / `#131313`):** Use this as the base for the entire canvas. It provides a more sophisticated depth than pure black for large areas.
*   **Accent Pulse (`primary_container` / `#E10600`):** This is your high-octane red. Use it for critical CTAs and "neon" glow effects.
*   **Neutral Contrast (`on_surface` / `#E2E2E2`):** Reserved for high-contrast typography and iconography to ensure legibility against the dark void.

### The "No-Line" Rule
**Strict Mandate:** Prohibit the use of 1px solid borders for sectioning or containment. Boundaries must be defined solely through:
1.  **Background Shifts:** Transitioning from `surface` to `surface_container_low`.
2.  **Tonal Transitions:** Using subtle gradients to suggest an edge.
3.  **Negative Space:** Using the spacing scale (e.g., `spacing.16`) to create mental boundaries without visual clutter.

### Surface Hierarchy & Nesting
Treat the UI as physical layers of carbon fiber and frosted glass.
*   **Base:** `surface` (#131313)
*   **Sectioning:** `surface_container_low` (#1B1B1B)
*   **Floating Cards:** `surface_container_high` (#2A2A2A) with 40% opacity and a 20px backdrop-blur.

### The "Glass & Gradient" Rule
Flat colors are for wireframes; depth is for GK AUTO HERB. Main CTAs should utilize a linear gradient from `primary` (#FFB4A8) to `primary_container` (#E10600) at a 135-degree angle to simulate a polished paint finish.

---

## 3. Typography

The typography pairings contrast the technical precision of **Space Grotesk** with the human-centric clarity of **Manrope**.

*   **Display & Headlines (Space Grotesk):** These are your "Engineered" fonts. Use `display-lg` for hero statements. Apply `letter-spacing: -0.04em` to headlines to give them a compact, high-torque feel.
*   **Body & Titles (Manrope):** These are your "Comfort" fonts. Manrope provides a modern, sans-serif balance that ensures long-form content remains readable.
*   **Visual Hierarchy:** Use the 3.5rem `display-lg` against 0.875rem `body-md` to create an editorial "High-Low" contrast. This mimics premium automotive brochures where the imagery and headlines dominate.

---

## 4. Elevation & Depth

We eschew traditional material shadows in favor of **Tonal Layering** and **Atmospheric Glows**.

### The Layering Principle
Stack `surface-container` tiers to create lift. An inner component should always be a tier "higher" than its parent (e.g., a `surface_container_highest` input field sitting on a `surface_container_low` card).

### Ambient Glows (The Neon Effect)
When an element needs to "pop," do not use a black drop shadow. Instead, use a **Red Ambient Glow**:
*   **Shadow Color:** `primary_container` (#E10600)
*   **Opacity:** 15% - 25%
*   **Blur:** 30px - 50px
*   **Spread:** -5px
This creates a "neon underglow" reminiscent of high-performance car lighting.

### Glassmorphism & Depth
For floating panels (Navigation, Feature Cards):
*   **Fill:** `surface_variant` (#353535) at 30% opacity.
*   **Backdrop Blur:** 16px.
*   **Ghost Border:** If contrast is required, use `outline_variant` at 15% opacity. Never use a 100% opaque border.

---

## 5. Components

### Buttons
*   **Primary:** Rounded (`roundedness.full`), Gradient (Red Pulse), with a white `label-md` bold label. Add a 1px "inner shine" on the top edge using a white overlay at 10% opacity.
*   **Secondary:** Glassmorphic background with `primary` (#FFB4A8) text.
*   **Tertiary:** Ghost style, text-only with `primary_container` underlines on hover.

### Glass Cards
No dividers. Use `surface_container_high` with backdrop-blur. Use `spacing.5` (1.7rem) for internal padding to give content room to breathe.

### Input Fields
*   **Background:** `surface_container_lowest`.
*   **Active State:** The bottom edge glows with a 2px `primary_container` line and a soft red ambient shadow.
*   **Text:** `on_surface` for input, `on_surface_variant` for placeholders.

### Additional Signature Component: "The Performance Gauge"
A custom progress bar or data visualization component using a segmented `primary_container` bar to represent car specs or service progress, mimicking a digital dashboard tachometer.

---

## 6. Do's and Don'ts

### Do:
*   **DO** use intentional asymmetry. Place a large headline on the left and a small detail label on the far right to create a "wide-track" feel.
*   **DO** use high-quality, desaturated car photography so the red accents of the UI pull the user's eye.
*   **DO** use the `full` roundedness scale for buttons and chips to mimic the aerodynamic curves of luxury vehicles.

### Don't:
*   **DON'T** use 1px solid white or grey lines to separate content. It breaks the "premium atmosphere."
*   **DON'T** use standard blue for links. Every interaction must be Red, White, or Tonal Grey.
*   **DON'T** crowd the layout. If in doubt, add more `spacing.12` or `spacing.16`. Luxury is defined by the space you *don't* use.
*   **DON'T** use heavy, opaque shadows. If the shadow looks like a "drop shadow," it's too heavy. It should look like "light bleed."

---

## 7. Spacing & Grid

Avoid the "Equal Column" trap. Use a 12-column grid but break it. Align your primary headline to column 2, while your body copy starts at column 5. This creates an editorial flow that feels custom-built for the content, rather than poured into a template. Use `spacing.8` (2.75rem) as your default vertical rhythm between major sections.